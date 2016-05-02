import process from 'process';

export function isRendererProcess():boolean
{
	return process.type === 'renderer';
}