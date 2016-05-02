import {addWindowConfig} from '../variables/windows'

/**
 * [
 *   {name: 'window', config: {}}
 * ]
 * @param windows List of window names and configs
 */
export function processWindows(windows) {
	windows.map((window) => {
		addWindowConfig(window.name, window.config)
	})
}