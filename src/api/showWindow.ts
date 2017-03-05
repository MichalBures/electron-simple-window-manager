import {getWindow} from './getWindow';

import { WindowName, WindowId, WindowNameOrId, WindowConfig } from '../../types';


export function showWindow(target?: WindowNameOrId | undefined)
{
	const { windowName, windowId } = target;
	
	let window = getWindow({windowName, windowId});
	
	if (window != null) {
		window.show();
	}
}