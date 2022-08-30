import { combineReducers, configureStore } from '@reduxjs/toolkit';
import homeReducer from './home/home';
import firstLayerReducer from './firstLayer/firstLayer';
import secondLayerReducer from './secondLayer/secondLayer';

const rootReducer = combineReducers({
  home: homeReducer,
  firstLayer: firstLayerReducer,
  secondLayer: secondLayerReducer,
});
const store = configureStore({ reducer: rootReducer });

export default store;
