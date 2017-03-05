import {BrowserWindow} from 'electron';

import {WindowName, WindowId, WindowNameOrId} from './types';
export {WindowName, WindowId, WindowNameOrId};

/**
 * Close the current window.
 * 
 * @export
 */
export function closeWindow():void;
export function openWindow(target:WindowName):void;
export function closeWindow(target:WindowName):void;
export function closeWindow(target:WindowId):void;
/**
 * Show the current window.
 * 
 * @export
 */
export function showWindow():void;
export function showWindow(target:WindowName):void;
export function showWindow(target:WindowId):void;
/**
 * Hide the current window.
 * 
 * @export
 */
export function hideWindow():void;
export function hideWindow(target:WindowName):void;
export function hideWindow(target:WindowId):void;

/**
 * Open Dev Tools in the current window.
 * 
 * @export
 * @param {object} options 
 */
export function openDevTools(options:object):void;
export function openDevTools(target:WindowName, options:object):void;
export function openDevTools(target:WindowId, options:object):void;
/**
 * Close Dev Tools in the current window.
 * 
 * @export
 */
export function closeDevTools():void;
export function closeDevTools(target:WindowName):void;
export function closeDevTools(target:WindowId):void;
/**
 * Set bounds of the current window.
 * 
 * @export
 * @param {object} options 
 * @param {boolean} [animate] 
 */
export function setBounds(options:object, animate?:boolean):void;
export function setBounds(target:WindowName, options:object, animate?:boolean):void;
export function setBounds(target:WindowId, options:object, animate?:boolean):void;

export function getCurrentWindow():Electron.BrowserWindow|null;
export function getCurrentWindowName():string|null;
/**
 * Get the current window.
 */
export function getWindow():Electron.BrowserWindow|null;
export function getWindow(target:WindowName):Electron.BrowserWindow|null;
export function getWindow(target:WindowId):Electron.BrowserWindow|null;
export function getWindowNames():Array<string>;

