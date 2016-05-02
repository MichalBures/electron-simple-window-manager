import {OPEN_DEVTOOLS} from '../constants'

export function openDevTools({windowName, windowId} = {}, options)
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