import store from './store';
import  { bugAdded, bugResolved,bugRemoved } from './actions'



store.dispatch(bugAdded('loxmax'));
store.dispatch(bugAdded('maxmax'));
store.dispatch(bugResolved(1));
store.dispatch(bugRemoved(1));


console.log(store.getState())