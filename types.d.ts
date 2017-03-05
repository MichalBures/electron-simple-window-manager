export interface WindowConfig {
    url:string;
    options:Electron.BrowserWindowOptions;
    setup?:(window:Electron.BrowserWindow) => void;
    onClosed?:(window:Electron.BrowserWindow) => void;
}

export interface Action {
    type: any;
    payload: any;
    meta?: any;
    error?:any;
}

export interface WindowDefinition {
    name:string;
    config:WindowConfig;
}

export interface WindowName {
   windowName:string;
}
export interface WindowId {
   windowId:number;
}

export type WindowNameOrId = WindowName & WindowId;