import { combineReducers } from 'redux'
import transReducer from '../containers/App/reducer'
import homeReducer from '../containers/Home/reducers'
import listViewReducer from '../containers/ListView/reducer'

const rootReducer = combineReducers({
  transReducer,
  homeReducer,
  listViewReducer,
})

export default rootReducer
