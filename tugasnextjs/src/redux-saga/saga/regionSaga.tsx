import { call, put } from "redux-saga/effects";
import region from "@/pages/api/region";
import {
  AddRegionFail,
  AddRegionSuccess,
  GetRegionFail,
  GetRegionSuccess,
  UpdateRegionFailed,
  UpdateRegionSuccess,
  deleteRegionFailed,
  deleteRegionSuccess,
} from "../action/regionAction";

function* handleGetRegion(): any {
  try {
    const result = yield call(region.GetData);
    yield put(GetRegionSuccess(result));
  } catch (error) {
    yield put(GetRegionFail(error));
  }
}

function* handleAddRegion(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(region.CreateData, payload);
    yield put(AddRegionSuccess(result.data));
  } catch (error) {
    yield put(AddRegionFail(error));
  }
}

function* handledeleteRegion(action: any): any {
  const { id } = action;
  try {
    yield call(region.GetDeleted, id);
    yield put(deleteRegionSuccess(id));
  } catch (error) {
    yield put(deleteRegionFailed(error));
  }
}

function* handleupdateRegion(action: any): any {
  const { payload, id } = action;
  try {
    const result = yield call(region.GetUpdate, payload, id);
    yield put(UpdateRegionSuccess(result));
  } catch (error) {
    yield put(UpdateRegionFailed(error));
  }
}

export {
  handleGetRegion,
  handleAddRegion,
  handledeleteRegion,
  handleupdateRegion,
};
