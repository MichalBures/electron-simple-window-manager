import {type} from 'process';

export function isBrowserProcess():boolean
{
	return type === 'browser';
}