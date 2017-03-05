import {WindowName, WindowId, WindowNameOrId, Action} from './types';
export {WindowName, WindowId, WindowNameOrId, Action};

/**
 * Test test test xxx
 * 
 * @export
 * @param {WindowName} target AAAa aaa
 * @param {string} xxx BBBB   bbb
 */
export function openWindow(target:WindowName):Action;
export function closeWindow(target:WindowName):Action;
export function closeWindow(target:WindowId):Action;
export function showWindow(target:WindowName):Action;
export function showWindow(target:WindowId):Action;
export function hideWindow(target:WindowName):Action;
export function hideWindow(target:WindowId):Action;
export function openDevTools(target:WindowName, options:object):Action;
export function openDevTools(target:WindowId, options:object):Action;
export function closeDevTools(target:WindowName):Action;
export function closeDevTools(target:WindowId):Action;
export function setBounds(target:WindowName, options:object, animate?:boolean):Action;
export function setBounds(target:WindowId, options:object, animate?:boolean):Action;
