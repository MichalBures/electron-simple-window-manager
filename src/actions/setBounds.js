import {SET_BOUNDS} from '../constants'

export function setBounds({windowName, windowId} = {}, options, animate)
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