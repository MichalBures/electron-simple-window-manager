import {getGlobalVar} from '../utils/getGlobalVar';

export function openWindow({windowName} = {}):?Electron.BrowserWindow
{
	let globalOpenWindow = getGlobalVar('openWindow');

	if (globalOpenWindow == null)
	{
		return null;
	}

	return globalOpenWindow({windowName});
}