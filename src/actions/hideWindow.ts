import {HIDE_WINDOW} from '../constants'

import { WindowName, WindowId, WindowNameOrId, WindowConfig } from '../../types';
import {Action} from "../../types";


export function hideWindow({ windowName, windowId }: WindowNameOrId): Action
{
	return {
		type: HIDE_WINDOW,
		payload: {
			windowName,
			windowId,
		}
	}
}