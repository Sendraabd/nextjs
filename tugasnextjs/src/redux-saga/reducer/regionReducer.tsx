import * as ActionType from "../constant/regionConstant";

const INIT_STATE = {
  regions: [],
};

const RegionReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_DATA_REQ:
      return { ...state };
    case ActionType.GET_DATA_OK:
      return GetRegion(state, action);
    case ActionType.ADD_DATA_REQ:
      return { ...state };
    case ActionType.ADD_DATA_OK:
      return AddRegion(state, action);
    case ActionType.UPDATE_DATA_REQ:
      return { ...state };
    case ActionType.UPDATE_DATA_OK:
      return UpdateRegion(state, action);
    case ActionType.DELETE_DATA_REQ:
      return { ...state };
    case ActionType.DELETE_DATA_OK:
      return deleteRegion(state, action);
    default:
      return { ...state };
  }
};

const GetRegion = (state: any, action: any) => {
  return {
    ...state,
    regions: action.payload,
  };
};
const AddRegion = (state: any, action: any) => {
  return {
    ...state,
    regions: [...state.regions, action.payload],
  };
};

const deleteRegion = (state: any, action: any) => {
  const updatedRegions = state.regions.filter(
    (region: any) => region.id !== action.payload
  );
  return {
    ...state,
    regions: updatedRegions,
  };
};

const UpdateRegion = (state: any, action: any) => {
  const updatedRegions = state.regions.map((region: any) => {
    if (region.id === action.payload.id) {
      return action.payload; // Menggantikan wilayah yang ada dengan wilayah baru
    }
    return region;
  });

  return {
    ...state,
    regions: updatedRegions,
  };
};

export default RegionReducer;
