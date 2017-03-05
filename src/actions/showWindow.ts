import {SHOW_WINDOW} from '../constants'

import { WindowName, WindowId, WindowNameOrId, WindowConfig } from '../../types';
import {Action} from "../../types";

export function showWindow({ windowName, windowId }: WindowNameOrId): Action
{
	return {
		type: SHOW_WINDOW,
		payload: {
			windowName,
			windowId,
		}
	}
}