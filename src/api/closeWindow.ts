import { getGlobalVar } from '../utils/getGlobalVar';

import { WindowName, WindowId, WindowNameOrId, WindowConfig } from '../../types';
import { ICloseWindow } from '../utils/closeWindow';

export function closeWindow(target?: WindowNameOrId | undefined) {
	const { windowName, windowId } = target;


	let globalCloseWindow:ICloseWindow = getGlobalVar('closeWindow');

	if (globalCloseWindow == null) {
		return null;
	}

	globalCloseWindow({ windowName, windowId });
}