import { takeEvery, all } from "redux-saga/effects";
import * as ActionRegion from "../constant/regionConstant";
import {
  handleGetRegion,
  handleAddRegion,
  handledeleteRegion,
  handleupdateRegion,
} from "./regionSaga";
function* watchAll() {
  yield all([
    takeEvery(ActionRegion.GET_DATA_REQ, handleGetRegion),
    takeEvery(ActionRegion.ADD_DATA_REQ, handleAddRegion),
    takeEvery(ActionRegion.UPDATE_DATA_REQ, handleupdateRegion),
    takeEvery(ActionRegion.DELETE_DATA_REQ, handledeleteRegion),
  ]);
}

export default watchAll;
