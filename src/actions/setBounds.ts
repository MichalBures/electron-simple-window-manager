import {SET_BOUNDS} from '../constants'

import { WindowName, WindowId, WindowNameOrId, WindowConfig } from '../../types';
import {Action} from "../../types";

export function setBounds({ windowName, windowId }: WindowNameOrId, options, animate = false)
{
	return {
		type: SET_BOUNDS,
		payload: {
			windowName,
			windowId,
			options,
			animate,
		}
	}
}