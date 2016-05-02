import {OPEN_WINDOW} from '../constants'

export function openWindow({windowName} = {})
{
	return {
		type: OPEN_WINDOW,
		payload: {
			windowName,
		}
	}
}