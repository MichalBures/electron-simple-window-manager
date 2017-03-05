import {OPEN_WINDOW} from '../constants'

import { WindowName, WindowId, WindowNameOrId, WindowConfig } from '../../types';
import {Action} from "../../types";

export function openWindow({windowName} : WindowName):Action
{
	return {
		type: OPEN_WINDOW,
		payload: {
			windowName,
		}
	}
}