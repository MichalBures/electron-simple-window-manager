import {SHOW_WINDOW} from '../constants'

export function showWindow({windowName, windowId} = {})
{
	return {
		type: SHOW_WINDOW,
		payload: {
			windowName,
			windowId,
		}
	}
}