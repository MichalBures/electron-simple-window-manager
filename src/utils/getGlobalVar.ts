import {isBrowserProcess} from './isBrowserProcess';
import {isRendererProcess} from './isRendererProcess';
import {GLOBAL_VAR_NAME} from '../constants';

export function getGlobalVar(globalVarName:string):any
{
	let globalVar = null;

	if (isBrowserProcess())
	{
		globalVar = global[GLOBAL_VAR_NAME];
	}

	if (isRendererProcess())
	{
		let remote = require('electron').remote;
		globalVar  = remote.getGlobal(GLOBAL_VAR_NAME);
	}

	if (globalVar != null && globalVar[globalVarName] != null)
	{
		return globalVar[globalVarName];
	}
	else
	{
		return null;
	}
}