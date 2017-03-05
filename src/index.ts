import {getWindowNames} from './variables/windows';
import {isBrowserProcess} from './utils/isBrowserProcess';
import {processWindows} from './utils/processWindows';
import {openWindow} from './utils/openWindow';
import {closeWindow} from './utils/closeWindow';
import {GLOBAL_VAR_NAME} from './constants';
import {
	getWindowIdByName,
	getWindowNameById,
} from './variables/windows';

if (isBrowserProcess()) {
	global[GLOBAL_VAR_NAME] = {
		getWindowIdByName,
		getWindowNameById,
		openWindow,
		closeWindow,
		getWindowNames,
	}
}

export default processWindows;
export {WindowHandler as SimpleWindowManagerSaga} from './sagas/WindowHandler';