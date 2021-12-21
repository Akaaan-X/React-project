import { fromJS } from 'immutable';

const defaultState = fromJS({    
    title: '',
    content:''
})

export default (state = defaultState, action) => {
    switch(action.type){
        case 'add_detail_info':
            return state.merge({
                title: action.title,
                content: action.content
            })
    }
    return state;
  
}