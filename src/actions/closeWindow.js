import {CLOSE_WINDOW} from '../constants'

export function closeWindow({windowName, windowId} = {})
{
	return {
		type: CLOSE_WINDOW,
		payload: {
			windowName,
			windowId,
		}
	}
}