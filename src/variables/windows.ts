import { WindowName, WindowConfig } from '../../types';


interface IWindowIds {
	[name: number]: string;
}
let windowIds: IWindowIds = {};


interface IWindowNames {
	[name: string]: number;
}
let windowNames: IWindowNames = {};

interface IStoredWindows {
	[name: string]: WindowConfig;
}
let storedWindows: IStoredWindows = {};



export function addWindow(name: string, id: number): void {
	windowNames[name] = id;
	windowIds[id] = name;
}

export function addWindowConfig(name: string, config: WindowConfig): void {
	storedWindows[name] = config;
}

export function removeWindowConfig(name: string): void {
	delete storedWindows[name];
}

export function removeWindowByName(name: string): void {
	delete windowIds[windowNames[name]];
	delete windowNames[name];
}

export function removeWindowById(id: number): void {
	delete windowNames[windowIds[id]];
	delete windowIds[id];
}

export type IGetWindowNameById = (id: number) => string;
export function getWindowNameById(id: number) {
	return windowIds[id];
}

export type IGetWindowIdByName = (name: string) => number;
export function getWindowIdByName(name:string) {
	return windowNames[name];
}

export function getWindowConfig({ windowName }: WindowName) {
	return storedWindows[windowName];
}

export type IGetWindowNames = () => Array<string>;
export function getWindowNames(): Array<string> {
	return Object.keys(storedWindows);
}

export function isWindow(name): boolean {
	return getWindowIdByName(name) > 0;
}