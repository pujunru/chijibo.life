import { Module, CHANGE_MODULE } from "../constants"

interface UiState {
    currentModule: Module;
}

const initialState: UiState = {
    currentModule: Module.OTHERS,
}

export interface ChangeModuleAction {
    type: typeof CHANGE_MODULE;
    targetModule: Module;
}

// actionType as a collection of action interfaces with different 'payload' structure
type actionType = ChangeModuleAction

const uiReducers = (state = initialState, action: actionType) => {
    switch (action.type) {
        case CHANGE_MODULE:
            return {
                ...state,
                currentModule: action.targetModule,
            }
        default:
            return state
    }
}

export default uiReducers