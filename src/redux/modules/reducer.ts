//여러개의 리듀서 모듈을 하나로 합침
import { combineReducers } from "redux";
import auth from "./auth";

const reducer = combineReducers({
  auth,
});

export default reducer;
