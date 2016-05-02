import {isBrowserProcess} from '../utils/isBrowserProcess';
import {isRendererProcess} from '../utils/isRendererProcess';

export function getCurrentWindow():?Electron.BrowserWindow {
	if (isBrowserProcess())
	{
		return null;
	}

	if (isRendererProcess())
	{
		return require('electron').remote.getCurrentWindow();
	}
}