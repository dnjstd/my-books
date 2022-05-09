//여러개의 리듀서 모듈을 하나로 합침
import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import auth from "./auth";
import { History } from "history";

const reducer = (history: History) =>
  combineReducers({
    auth,
    router: connectRouter(history),
  });

export default reducer;
