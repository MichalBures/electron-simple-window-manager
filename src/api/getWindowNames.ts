import {getGlobalVar} from '../utils/getGlobalVar';

import { IGetWindowNames } from '../variables/windows';

export function getWindowNames():Array<string> {
	let globalGetWindowConfig:IGetWindowNames = getGlobalVar('getWindowNames');

	if (globalGetWindowConfig == null)
	{
		return null;
	}
	
	return globalGetWindowConfig();
}