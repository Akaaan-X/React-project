import { fromJS } from 'immutable';

const defaultState = fromJS({    
    topicList:[],
    listItem: [],
    scrollTop: false,
    writeName:[]
})

export default (state = defaultState, action) => {
    switch(action.type){
        case 'change_home_data':
            return state.merge({
                topicList: fromJS(action.topicList),
                listItem: fromJS(action.listItem)
            })
        case 'add_more_info':
            return state.set('listItem', state.get('listItem').concat(action.list));
        case 'change_scroll_top':
            return state.set('scrollTop', action.show);
        case 'change_writer_list':
            return state.set('writeName', fromJS(action.writeName))
    }
    return state;
  
}