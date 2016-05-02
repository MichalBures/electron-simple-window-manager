import {getGlobalVar} from '../utils/getGlobalVar';
import {getCurrentWindow} from './getCurrentWindow';

export function getCurrentWindowName()
{
	let window = getCurrentWindow();
	
	if (window == null) {
		return null;
	}
	
	let globalGetWindowNameById = getGlobalVar('getWindowNameById');

	if (globalGetWindowNameById == null)
	{
		return null;
	}

	return globalGetWindowNameById(window.id);
}