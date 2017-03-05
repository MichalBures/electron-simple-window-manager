import {CLOSE_DEVTOOLS} from '../constants'

import { WindowName, WindowId, WindowNameOrId, WindowConfig } from '../../types';
import {Action} from "../../types";


export function closeDevTools({ windowName, windowId }: WindowNameOrId): Action
{
	return {
		type: CLOSE_DEVTOOLS,
		payload: {
			windowName,
			windowId,
		}
	}
}