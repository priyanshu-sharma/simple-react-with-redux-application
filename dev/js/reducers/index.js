import {combineReducers} from 'redux';
import UserReducer from './reducers-user';
import MusicReducer from './reducers-music';
import ActiveUserReducer from './reducer-active-user';
import ActiveMusicReducer from './reducer-active-music';

//One Big JavaScript object
const allReducers = combineReducers({
  user: UserReducer,
  activeUser: ActiveUserReducer,
  music: MusicReducer,
  activeMusic: ActiveMusicReducer
});

export default allReducers;
