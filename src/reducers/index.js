import { combineReducers } from 'redux';
import PostsReducers from './posts_reducer' ;

const rootReducer = combineReducers({
  posts : PostsReducers
});

export default rootReducer;
