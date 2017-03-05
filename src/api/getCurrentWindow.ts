import {isBrowserProcess} from '../utils/isBrowserProcess';
import {isRendererProcess} from '../utils/isRendererProcess';


export function getCurrentWindow():Electron.BrowserWindow|null {
	if (isBrowserProcess())
	{
		return null;
	}

	if (isRendererProcess())
	{
		return require('electron').remote.getCurrentWindow();
	}
}