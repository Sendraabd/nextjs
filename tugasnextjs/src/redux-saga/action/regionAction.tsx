import * as ActionRegion from "../constant/regionConstant";

export const GetRegionReq = () => ({
  type: ActionRegion.GET_DATA_REQ,
});

export const GetRegionSuccess = (payload: any) => ({
  type: ActionRegion.GET_DATA_OK,
  payload,
});

export const GetRegionFail = (payload: any) => ({
  type: ActionRegion.GET_DATA_FAIL,
  payload,
});

export const AddRegionReq = (payload: any) => ({
  type: ActionRegion.ADD_DATA_REQ,
  payload,
});

export const AddRegionSuccess = (payload: any) => ({
  type: ActionRegion.ADD_DATA_OK,
  payload,
});

export const AddRegionFail = (payload: any) => ({
  type: ActionRegion.ADD_DATA_FAIL,
  payload,
});

export const deleteRegionRequest = (id: any) => ({
  type: ActionRegion.DELETE_DATA_REQ,
  id,
});

export const deleteRegionSuccess = (id: any) => ({
  type: ActionRegion.DELETE_DATA_OK,
  id,
});

export const deleteRegionFailed = (id: any) => ({
  type: ActionRegion.DELETE_DATA_FAIL,
  id,
});

export const UpdateRegionRequest = (payload: any, id: any) => ({
  type: ActionRegion.UPDATE_DATA_REQ,
  payload,
  id,
});

export const UpdateRegionSuccess = (payload: any) => ({
  type: ActionRegion.UPDATE_DATA_OK,
  payload,
});

export const UpdateRegionFailed = (payload: any) => ({
  type: ActionRegion.UPDATE_DATA_FAIL,
  payload,
});
