import {addWindow, getWindowConfig} from '../variables/windows';
import {createWindow} from './createWindow';
import {isWindow} from './isWindow';

import { WindowName, WindowId, WindowNameOrId, WindowConfig } from '../../types';


export type IOpenWindow = (target: WindowName) => Electron.BrowserWindow;

export function openWindow({windowName}:WindowName):Electron.BrowserWindow {
	if (isWindow(windowName)) {
		return;
	}
	let config = getWindowConfig({windowName});
	if (config == null) {
		return null;
	}
	let window = createWindow(config);
	if (window == null) {
		return null;
	}
	addWindow(windowName, window.id);
	return window;
}