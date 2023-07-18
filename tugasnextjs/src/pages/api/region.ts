import axios from "axios";
import config from "@/config/config";

const GetData = async () => {
  try {
    const result = await axios.get(`${config.domain}/regions`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const CreateData = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/regions/upload`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const GetDeleted = async (id: any) => {
  try {
    const result = await axios.delete(`${config.domain}/regions/${id}`);
    return result;
  } catch (error) {
    return error;
  }
};

const GetUpdate = async (payload: any, id: any) => {
  try {
    const result = await axios.put(`${config.domain}/regions/${id}`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

export default {
  GetData,
  CreateData,
  GetDeleted,
  GetUpdate,
};
