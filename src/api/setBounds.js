import {getWindow} from './getWindow';
import {isBrowserProcess} from '../utils/isBrowserProcess';
import {getCurrentWindow} from './getCurrentWindow';

export function setBounds({windowName, windowId} = {}, options, animate = false)
{
	let window:?Electron.BrowserWindow;
	if (windowName == null && windowId == null)
	{
		if (isBrowserProcess())
		{
			return;
		}

		window = getCurrentWindow();
	}
	else
	{

		window = getWindow({
			windowName,
			windowId
		});
	}
	
	if (window != null) {
		let bounds = window.getBounds();
		window.setBounds({...bounds, ...options}, animate);
	}
}