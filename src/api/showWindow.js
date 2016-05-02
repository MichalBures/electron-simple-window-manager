import {getWindow} from './getWindow';

export function showWindow({windowName, windowId} = {})
{
	let window = getWindow({windowName, windowId});
	
	if (window != null) {
		window.show();
	}
}