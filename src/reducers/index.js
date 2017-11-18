import { combineReducers } from 'redux';
import PostsReducers from './posts_reducer' ;
import { reducer as formRecucer } from 'redux-form' ;

const rootReducer = combineReducers({
  posts : PostsReducers,
  form : formRecucer
});

export default rootReducer;
