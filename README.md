# electron-simple-window-manager

Easily manage (open, hide, move, ...) your [Electron](https://github.com/electron/electron) windows.


## Getting Started

### Installation

`npm install electron-simple-window-manager --save`

### Usage

The idea behind this library is that you declare all your windows in the electron's browser process and then you can access and manage those windows just by their name


```javascript
import initSimpleWindowManager from 'electron-simple-window-manager'

let windows = [
  {
    name: 'window1',
    config: {
      options: {
        width: 100,
        height: 100,
        show: false,
      },
      url: 'https://github.com',
      setup: function(window) {
        window.openDevTools();
      },
      onClosed: function(window) {
        console.log('Window is closing');
      }
    }
  }
]

// windows is an array or a map of {name, config}
initSimpleWindowManager(windows)
```
*Add window configurations in the browser process*



#### Direct use

```javascript
import {openWindow} from 'electron-simple-window-manager/utils'

openWindow({windowName: 'window1'})
```

#### Use with redux and redux-saga

First you need to add and run the `SimpleWindowManagerSaga`
```javascript
import {SimpleWindowManagerSaga} from 'electron-simple-window-manager'
```
*If you are not familiar with `redux-saga` go [see its documentation](https://github.com/yelouafi/redux-saga#mainjs)*

Now that our helper saga is up and running you can `dispatch` one of the available actions and the saga will process it.

```javascript
import {openWindow} from 'electron-simple-window-manager/actions'

dispatch(openWindow({windowName: 'window1'}))
```

## Config

* **options**: (*object*) - Same as [`BrowserWindow` options](https://github.com/electron/electron/blob/master/docs/api/browser-window.md#new-browserwindowoptions)
* **url**: (*url*) - Url to load with [`loadUrl`](https://github.com/electron/electron/blob/master/docs/api/browser-window.md#winloadurlurl-options)
* **setup**: (*function*) - After the window is created and the url loaded this setup function will receive the newly created window as its argument
* **onClosed**: (*function*) - Called during the `closed` window event with the closing window as its argument

```javascript
import initSimpleWindowManager from 'electron-simple-window-manager'

let config = {
  name: 'window1',
  config: {
    options: {
      width: 100,
      height: 100,
      show: false,
    },
    url: 'https://github.com',
    setup: function(window) {
      window.openDevTools();
    },
    onClosed: function(window) {
      console.log('Window is closing');
    }
  }
}
```

## Utils

* **openWindow**: Open window by name
	* **windowName**
* **closeWindow**: Close window by name or id
	* **{windowName, windowId}**
* **showWindow**: Show window by name or id
	* **{windowName, windowId}**
* **hideWindow**: Hide window by name or id
	* **{windowName, windowId}**
* **openDevTools**: Open DevTools in given window
	* **{windowName, windowId}** - if no name or id is given the current window will be used
	* **options** - same as in the [Electron documentation](https://github.com/electron/electron/blob/master/docs/api/web-contents.md#webcontentsopendevtoolsoptions)
* **closeDevTools**: Close DevTools in given window
	* **{windowName, windowId}** - if no name or id is given the current window will be used
* **setBounds**: Move or resize given window ([see documentation](https://github.com/electron/electron/blob/master/docs/api/browser-window.md#winsetboundsoptions-animate))
	* **{windowName, windowId}** - if no name or id is given the current window will be used
	* **options** - You don't have to provide all the arguments as in the official function. Using `{x: 0}` will move the window along the x axis and keep the rest unchanged. 
		* x
		* y
		* width
		* height
	* **animate**: true/false
* **getCurrentWindow**: Returns current `BrowserWindow`
* **getCurrentWindowName**: Returns name of the current window
* **getWindow**:
	* **{windowName, windowId}** - if no name or id is given the current window will be used
* **getWindowNames**: Returns list of all known window names

## Actions

* **openWindow**: Open window by name
	* **windowName**
* **closeWindow**: Close window by name or id
	* **{windowName, windowId}**
* **showWindow**: Show window by name or id
	* **{windowName, windowId}**
* **hideWindow**: Hide window by name or id
	* **{windowName, windowId}**
* **openDevTools**: Open DevTools in given window
	* **{windowName, windowId}** - if no name or id is given the current window will be used
	* **options** - same as in the [Electron documentation](https://github.com/electron/electron/blob/master/docs/api/web-contents.md#webcontentsopendevtoolsoptions)
* **closeDevTools**: Close DevTools in given window
	* **{windowName, windowId}** - if no name or id is given the current window will be used
* **setBounds**: Move or resize given window ([see documentation](https://github.com/electron/electron/blob/master/docs/api/browser-window.md#winsetboundsoptions-animate))
	* **{windowName, windowId}** - if no name or id is given the current window will be used
	* **options** - You don't have to provide all the arguments as in the official function. Using `{x: 0}` will move the window along the x axis and keep the rest unchanged. 
		* x
		* y
		* width
		* height
	* **animate**: true/false

## License

MIT