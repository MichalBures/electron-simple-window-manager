import {isWindow, removeWindowById} from '../variables/windows';
import {getWindowByName, getWindowById} from '../api/getWindow';

export function closeWindow({windowName, windowId} = {}) {
	
	let window:?Electron.BrowserWindow;
	
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