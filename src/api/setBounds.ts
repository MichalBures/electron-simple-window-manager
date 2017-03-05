import { getWindow } from './getWindow';
import { isBrowserProcess } from '../utils/isBrowserProcess';
import { getCurrentWindow } from './getCurrentWindow';

import { WindowName, WindowId, WindowNameOrId, WindowConfig } from '../../types';


export function setBounds(target?: WindowNameOrId | undefined, options = {}, animate = false) {
	const { windowName, windowId } = target;

	let window: Electron.BrowserWindow;
	if (windowName == null && windowId == null) {
		if (isBrowserProcess()) {
			return;
		}

		window = getCurrentWindow();
	}
	else {

		window = getWindow({
			windowName,
			windowId
		});
	}

	if (window != null) {
		let bounds = window.getBounds();
		window.setBounds({ ...bounds, ...options }, animate);
	}
}