import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import RootNavigation from './../navigations/RootNavigation';
import reducerHome from './../screens/home/reducerHome';

const reducerRouter = createNavigationReducer(RootNavigation);

const appReducer = combineReducers({
  router: reducerRouter,
  home: reducerHome
})

export default appReducer
