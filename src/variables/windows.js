/**
 * {
 *  id: name
 * }
 */
let windowIds     = {};
/**
 * {
 *  name: id
 * }
 */
let windowNames   = {};
/**
 * {
 *  name: config
 * }
 */
let storedWindows = {};

export function addWindow(name, id) {
	windowNames[name] = id;
	windowIds[id] = name;
}

export function addWindowConfig(name, config)
{
// 	logToFile('LOCAL ADD CONFIG 111')
// 	logToFile(storedWindows)
	storedWindows[name] = config;
// 	logToFile('LOCAL ADD CONFIG 222')
// 	logToFile(storedWindows)
}

export function removeWindowConfig(name)
{
	delete storedWindows[name];
}

export function removeWindowByName(name)
{
	delete windowIds[windowNames[name]];
	delete windowNames[name];
}

export function removeWindowById(id)
{
	delete windowNames[windowIds[id]];
	delete windowIds[id];
}

export function getWindowNameById(id) {
	return windowIds[id];
}

export function getWindowIdByName(name)
{
	return windowNames[name];
}

export function getWindowConfig({windowName, windowId} = {})
{
	return storedWindows[windowName];
}

export function getWindowNames():Array<string> {
	return Object.keys(storedWindows);
}

export function isWindow(name):boolean {
	return getWindowIdByName(name) > 0;
}