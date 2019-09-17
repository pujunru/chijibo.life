import { CHANGE_MODULE, Module } from './../constants';
import { ChangeModuleAction } from '../reducers/uiReducers';

export const changeModule = (module: Module): ChangeModuleAction => {
    return {
        type: CHANGE_MODULE,
        targetModule: module
    }
}