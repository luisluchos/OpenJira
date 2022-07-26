import { UIState } from './';

type UIActionType =
| {type:'UI - Open Sidebar'}
| {type:'UI - Close Sidebar'}
| {type:'UI - Open Entry Form', payload:boolean}
| {type:'UI - Start Dragging'}
| {type:'UI - End Dragging'}

export const uiReducer =(state:UIState, action:UIActionType):UIState => {

    switch (action.type) {
        case 'UI - Open Sidebar':
            return {...state, sidemenuOpen: true};
        case 'UI - Close Sidebar':
            return {...state, sidemenuOpen: false};
        case 'UI - Open Entry Form':
            return {...state, entryFormOpen: action.payload};
        case 'UI - Start Dragging':
            return {...state, isDragging: true};
        case 'UI - End Dragging':
            return {...state, isDragging: false};
        default:
            return state;
    }

}