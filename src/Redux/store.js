import { createStore, combineReducers} from 'redux';
import DateCount from './reducers/DateCount';
 
const rootReducer = combineReducers({
    fromDate: DateCount,
    
});
 
export const store = createStore(rootReducer);