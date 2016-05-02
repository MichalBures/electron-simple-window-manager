import * as fs from 'fs';
import * as process from 'process';
import {isBrowserProcess} from './isBrowserProcess';

export function logToFile(data)
{
	if (process.env.NODE_ENV === 'production' || !isBrowserProcess())
	{
		return;
	}

	try
	{
		fs.appendFileSync('BrowserProcessLog.txt', JSON.stringify(data) + '\n');
	}
	catch (e)
	{
		// Who cares
	}
}