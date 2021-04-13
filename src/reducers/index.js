const { CentralReducer } = require("./centrals");



const allReducers = combineReducers({
  centrals: CentralReducer,
  devices: devicesReducer,
})