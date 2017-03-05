import {isBrowserProcess} from './isBrowserProcess';
import {isRendererProcess} from './isRendererProcess';

export function getBrowserWindow():typeof Electron.BrowserWindow {
	if (isBrowserProcess())
	{
		return require('electron').BrowserWindow;
	}

	if (isRendererProcess())
	{
		return require('electron').remote.BrowserWindow as any;
	}
}