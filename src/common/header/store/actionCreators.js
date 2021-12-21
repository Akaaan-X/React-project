import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from "axios";

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data), //将接口传输的data变为统一的immutable，防止系统出错
    totalPage: Math.ceil(data.length / 10)
});

export const handleStateFocus = () => ({
    type: constants.SEARCH_FOCUS,
});

export const handleStateBlurs = () => ({
    type: constants.NOT_FOCUS,
});

export const handleMouseEnter = () => ({
    type: constants.MOUSE_ENTER,
});

export const handleMouseLeave = () => ({
    type: constants.MOUSE_LEAVE,
})

export const handleChangePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data)); //创建一个action并dispatch给store
        }).catch(() => {
            console.log('error');
        })
    }
};