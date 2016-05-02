import process from 'process';

export function isBrowserProcess():boolean
{
	return process.type === 'browser';
}