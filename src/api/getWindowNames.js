import {getGlobalVar} from '../utils/getGlobalVar';


export function getWindowNames():Electron.BrowserWindow {
	let globalGetWindowConfig = getGlobalVar('getWindowNames');

	if (globalGetWindowConfig == null)
	{
		return null;
	}
	
	return globalGetWindowConfig();
}