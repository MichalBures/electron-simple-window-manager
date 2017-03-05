import {getGlobalVar} from '../utils/getGlobalVar';
import {getCurrentWindow} from './getCurrentWindow';

import { IGetWindowNameById } from '../variables/windows';

export function getCurrentWindowName():string
{
	let window = getCurrentWindow();
	
	if (window == null) {
		return null;
	}
	
	let globalGetWindowNameById:IGetWindowNameById = getGlobalVar('getWindowNameById');

	if (globalGetWindowNameById == null)
	{
		return null;
	}

	return globalGetWindowNameById(window.id);
}