import {addWindow, getWindowConfig} from '../variables/windows';
import {createWindow} from './createWindow';
import {isWindow} from './isWindow';

export function openWindow({windowName} = {}) {
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