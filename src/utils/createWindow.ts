import {getBrowserWindow} from './getBrowserWindow';
import { WindowName, WindowConfig } from '../../types';


const BrowserWindow = getBrowserWindow();

export function createWindow(config:WindowConfig):Electron.BrowserWindow {
	let window:Electron.BrowserWindow = new BrowserWindow(config.options);
	
	window.loadURL(config.url);
	
	if (config.setup != null && typeof config.setup === 'function') {
		config.setup(window);
	}
	

	window.on('closed', function ()
	{
		if (config.onClosed != null && typeof config.onClosed === 'function') {
			config.onClosed(window);
		}
		
		window = null;
	});
	
	return window;
}