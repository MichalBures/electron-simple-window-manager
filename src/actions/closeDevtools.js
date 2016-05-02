import {CLOSE_DEVTOOLS} from '../constants'

export function closeDevTools({windowName, windowId} = {})
{
	return {
		type: CLOSE_DEVTOOLS,
		payload: {
			windowName,
			windowId,
		}
	}
}