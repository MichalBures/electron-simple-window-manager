import {getBrowserWindow} from '../utils/getBrowserWindow';
import {getGlobalVar} from '../utils/getGlobalVar';
import {getCurrentWindow} from './getCurrentWindow';

const BrowserWindow = getBrowserWindow();

export function getWindow({windowName, windowId} = {}):?Electron.BrowserWindow {
	if (windowName != null) {
		return getWindowByName(windowName);
	}

	if (windowId != null)
	{
		return getWindowById(windowId);
	}
	
	if (windowName == null && windowId == null) {
		return getCurrentWindow();
	}
}


export function getWindowById(windowId):?Electron.BrowserWindow {
	return BrowserWindow.fromId(windowId);
}

export function getWindowByName(windowName):?Electron.BrowserWindow
{
	let globalGetWindowIdByName = getGlobalVar('getWindowIdByName');
	
	if (globalGetWindowIdByName == null) {
		return;
	}
	
	const id = globalGetWindowIdByName(windowName);
	
	if (id == null) {
		return null;
	}
	
	return BrowserWindow.fromId(id);
}