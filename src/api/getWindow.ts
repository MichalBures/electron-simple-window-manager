import { getBrowserWindow } from '../utils/getBrowserWindow';
import { getGlobalVar } from '../utils/getGlobalVar';
import { getCurrentWindow } from './getCurrentWindow';

import { WindowName, WindowId, WindowNameOrId, WindowConfig } from '../../types';


const BrowserWindow = getBrowserWindow();

export function getWindow(target: WindowName): Electron.BrowserWindow;
export function getWindow(target: WindowId): Electron.BrowserWindow;
export function getWindow(target?: WindowNameOrId): Electron.BrowserWindow;
export function getWindow(target?: WindowNameOrId): Electron.BrowserWindow {
	const { windowName, windowId } = target;


	if (windowName != null) {
		return getWindowByName(windowName);
	}

	if (windowId != null) {
		return getWindowById(windowId);
	}

	if (windowName == null && windowId == null) {
		return getCurrentWindow();
	}
}


export function getWindowById(windowId: number): Electron.BrowserWindow {
	return BrowserWindow.fromId(windowId);
}

import { IGetWindowIdByName } from '../variables/windows';
export function getWindowByName(windowName: string): Electron.BrowserWindow {
	let globalGetWindowIdByName: IGetWindowIdByName = getGlobalVar('getWindowIdByName');

	if (globalGetWindowIdByName == null) {
		return;
	}

	const id = globalGetWindowIdByName(windowName);

	if (id == null) {
		return null;
	}

	return BrowserWindow.fromId(id);
}