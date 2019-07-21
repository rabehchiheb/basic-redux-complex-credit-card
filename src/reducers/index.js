import {combineReducers} from 'redux';
import CardReducer from '../reducers/CardReducers';

export default combineReducers({
    card: CardReducer,
})