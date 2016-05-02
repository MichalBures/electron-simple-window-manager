import {getWindow} from './../api/getWindow';

export function hideWindow({windowName, windowId} = {})
{
	let window = getWindow({windowName, windowId});
	
	if (window != null) {
		window.hide();
	}
}