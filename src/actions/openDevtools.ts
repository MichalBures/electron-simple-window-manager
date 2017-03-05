import {OPEN_DEVTOOLS} from '../constants'

import { WindowName, WindowId, WindowNameOrId, WindowConfig } from '../../types';
import {Action} from "../../types";

export function openDevTools({ windowName, windowId }: WindowNameOrId, options?):Action
{
	return {
		type: OPEN_DEVTOOLS,
		payload: {
			windowName,
			windowId,
			options,
		}
	}
}