import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer} from '../pages/home/store';
import { reducer as detailReducer} from '../pages/detail/store';
import { reducer as loginReducer} from '../pages/login/store';

export default combineReducers ({     //将每个组件的reducer拆分开来，用combineReducers进行整合
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
})