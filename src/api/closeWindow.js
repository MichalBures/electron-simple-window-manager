import {getGlobalVar} from '../utils/getGlobalVar';

export function closeWindow({windowName, windowId} = {})
{
	let globalCloseWindow = getGlobalVar('closeWindow');

	if (globalCloseWindow == null)
	{
		return null;
	}

	globalCloseWindow({windowName, windowId});
}