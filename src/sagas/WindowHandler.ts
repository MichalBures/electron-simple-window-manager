import { takeEvery } from 'redux-saga/effects';
import {
    OPEN_DEVTOOLS,
    CLOSE_DEVTOOLS,
    OPEN_WINDOW,
    CLOSE_WINDOW,
    SHOW_WINDOW,
    HIDE_WINDOW,
    SET_BOUNDS,
} from '../constants';
import { getCurrentWindowName } from '../api/getCurrentWindowName';
import { isBrowserProcess } from '../utils/isBrowserProcess';
import { openDevTools } from '../api/openDevTools';
import { closeDevTools } from '../api/closeDevTools';
import { openWindow } from '../api/openWindow';
import { closeWindow } from '../api/closeWindow';
import { showWindow } from '../api/showWindow';
import { setBounds } from '../api/setBounds';
import { hideWindow } from '../api/hideWindow';

export function* WindowHandler(): IterableIterator<any> {
    const task = yield takeEvery(
        [OPEN_DEVTOOLS, CLOSE_DEVTOOLS, OPEN_WINDOW, CLOSE_WINDOW, SHOW_WINDOW, HIDE_WINDOW, SET_BOUNDS],
        handleAction
    );
}

function* handleAction(action) {
    let { windowName, windowId } = action.payload;

    if (windowName == null) {
        if (isBrowserProcess()) {
            return;
        }
        windowName = yield getCurrentWindowName();
    }

    switch (action.type) {
        case OPEN_WINDOW:
            {
                yield openWindow({ windowName });
                break;
            }
        case CLOSE_WINDOW:
            {
                yield closeWindow({
                    windowName,
                    windowId
                });
                break;
            }
        case SHOW_WINDOW:
            {
                yield showWindow({
                    windowName,
                    windowId
                });
                break;
            }
        case HIDE_WINDOW:
            {
                yield hideWindow({
                    windowName,
                    windowId
                });
                break;
            }
        case OPEN_DEVTOOLS:
            {
                yield openDevTools({
                    windowName,
                    windowId
                }, action.payload.options);
                break;
            }
        case CLOSE_DEVTOOLS:
            {
                yield closeDevTools({
                    windowName,
                    windowId
                });
                break;
            }
        case SET_BOUNDS:
            {
                yield setBounds(
                    {
                        windowName,
                        windowId
                    },
                    action.payload.options,
                    action.payload.animate,
                );
                break;
            }
    }
}