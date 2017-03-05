import {getWindow} from '../api/getWindow';

export function isWindow(windowName:string):boolean {
	let window = getWindow({windowName})
	
	return window != null;
}