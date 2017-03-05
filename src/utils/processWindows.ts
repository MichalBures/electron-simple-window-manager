import {addWindowConfig} from '../variables/windows'

import { WindowName, WindowDefinition } from '../../types';


export function processWindows(windows:Array<WindowDefinition>):void {
	windows.map((window) => {
		addWindowConfig(window.name, window.config)
	})
}