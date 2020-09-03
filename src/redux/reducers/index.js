// import external libraries
import {combineReducers} from 'redux';
// import reducers
import authReducer from './auth';

const rootReducer = combineReducers({
  auth: authReducer,
});
export default rootReducer;
