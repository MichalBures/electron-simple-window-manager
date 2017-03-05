import {CLOSE_WINDOW} from '../constants'

import { WindowName, WindowId, WindowNameOrId, WindowConfig } from '../../types';
import {Action} from "../../types";

export function closeWindow({ windowName, windowId }: WindowNameOrId): Action
{
	return {
		type: CLOSE_WINDOW,
		payload: {
			windowName,
			windowId,
		}
	}
}