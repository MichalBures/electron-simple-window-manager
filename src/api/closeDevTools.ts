import { getWindow } from './getWindow';
import { isBrowserProcess } from '../utils/isBrowserProcess';
import { getCurrentWindow } from './getCurrentWindow';

import { WindowName, WindowId, WindowNameOrId, WindowConfig } from '../../types';


export function closeDevTools(target?: WindowNameOrId | undefined) {
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
		window.webContents.closeDevTools();
	}
}