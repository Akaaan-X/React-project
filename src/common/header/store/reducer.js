import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({    //通过immutable把state变为不可更改
    focus: false,
    mouseEnter: false,
    list: [],  //数组也被变为immutable
    page: 1,
    totalPage: 1
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            // const newState = JSON.parse(JSON.stringify(state)); 使用immutable就不能这样深拷贝
            // newState.focus = action.focus;
            return state.set('focus', true); //immutable对象的set方法，返回一个新对象
        case constants.NOT_FOCUS:
            return state.set('focus', false);
        case constants.CHANGE_LIST:
            return state.set('list', action.data).set('totalPage', action.totalPage);
        case constants.MOUSE_ENTER:
            return state.set('mouseEnter', true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseEnter', false);
        case constants.CHANGE_PAGE:
            return state.set('page', action.page)
        default:
            return state;
    }
  
}