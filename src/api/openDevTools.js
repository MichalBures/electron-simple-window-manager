import {getWindow} from './getWindow';
import {isBrowserProcess} from '../utils/isBrowserProcess';
import {getCurrentWindow} from './getCurrentWindow';

export function openDevTools({windowName, windowId} = {}, options)
{
	let window;
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

	if (window != null)
	{
		window.openDevTools(options);
	}
}