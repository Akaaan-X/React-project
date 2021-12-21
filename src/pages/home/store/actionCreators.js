import axios from "axios";
import { fromJS } from "immutable";

const changeHomeData = (result) => ({
    type: 'change_home_data',
    topicList: result.topicList,
    listItem: result.listItem
})

const changeWriterList = (result) => ({
    type: 'change_writer_list',
    writeName: fromJS(result)
}) 

const addMoreInfo = (result) => ({
    type: 'add_more_info',
    list: fromJS(result)
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        })
    }
}

export const getWriterList = () => {
    return (dispatch) => {
        axios.get('/api/writerList.json').then((res) => {
            const result = res.data.data;
            dispatch(changeWriterList(result))
        })
    }
}

export const getMoreList = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json').then((res) => {
            const result = res.data.data;
            dispatch(addMoreInfo(result))
        })
    }
}

export const getScrollTop = (show) => ({
        type: 'change_scroll_top',
        show
    })
