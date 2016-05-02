import {getWindow} from '../api/getWindow';

export function isWindow(windowName) {
	let window = getWindow({windowName})
	
	return window != null;
}