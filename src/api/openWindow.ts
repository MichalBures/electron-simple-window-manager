import {getGlobalVar} from '../utils/getGlobalVar';

import { WindowName, WindowId, WindowNameOrId, WindowConfig } from '../../types';
import { IOpenWindow } from '../utils/openWindow';


export function openWindow({windowName}:WindowName):Electron.BrowserWindow
{
	let globalOpenWindow:IOpenWindow = getGlobalVar('openWindow');

	if (globalOpenWindow == null)
	{
		return null;
	}

	return globalOpenWindow({windowName});
}