import {isWindow, removeWindowById} from '../variables/windows';
import {getWindowByName, getWindowById} from '../api/getWindow';

import { WindowName, WindowId, WindowNameOrId, WindowConfig } from '../../types';

export type ICloseWindow = (target?: WindowNameOrId | undefined) => void;

export function closeWindow(target?: WindowNameOrId | undefined) {
		const { windowName, windowId } = target;

	let window:Electron.BrowserWindow;
	
	if (windowName != null) {
		window = getWindowByName(windowName);
		
	}

	if (windowId != null)
	{
		window = getWindowById(windowId);

	}
	
	if (window == null) {
		return;
	}

	removeWindowById(window.id);
	
	window.close();
}