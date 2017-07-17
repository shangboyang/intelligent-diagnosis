import { combineReducers } from 'redux'
import transReducer from '../containers/App/reducer'
import intelligentReducer from '../containers/Main/reducer'
import listViewReducer from '../containers/ListView/reducer'

const rootReducer = combineReducers({
  transReducer,
  intelligentReducer,
  listViewReducer,
})

export default rootReducer
