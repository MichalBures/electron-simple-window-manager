import {HIDE_WINDOW} from '../constants'

export function hideWindow({windowName, windowId} = {})
{
	return {
		type: HIDE_WINDOW,
		payload: {
			windowName,
			windowId,
		}
	}
}