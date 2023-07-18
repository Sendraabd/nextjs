import {
  GetRegionReq,
  deleteRegionRequest,
} from "@/redux-saga/action/regionAction";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RegionCreate from "./RegionCreate";
import RegionEdit from "./RegionEdit";

export default function RegionSaga() {
  const dispatch = useDispatch();
  const { regions } = useSelector((state: any) => state.regionState);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState();
  const [val, setVal] = useState("");

  useEffect(() => {
    dispatch(GetRegionReq());
  }, [dispatch, refresh]);

  const onDelete = (id: any) => {
    dispatch(deleteRegionRequest(id));
    window.alert("Data Successfully Deleted");
    setRefresh(true);
    setDisplay(false);
  };

  return (
    <div>
      <h2>List Region</h2>
      {display ? (
        <RegionCreate setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : edit ? (
        <RegionEdit
          setEdit={setEdit}
          setRefresh={setRefresh}
          setVal={val}
          setId={id}
        />
      ) : (
        <>
          <button onClick={() => setDisplay(true)}>Add Regions</button>
          <table>
            <thead>
              <tr>
                <th>Region ID</th>
                <th>Region Name</th>
                <th>Region Photo</th>
              </tr>
            </thead>
            <tbody>
              {regions &&
                regions.map((item: any) => {
                  return (
                    <>
                      <tr>
                        <th>{item.regionId}</th>
                        <td>{item.regionName}</td>
                        <td>{item.photo}</td>
                        <td>
                          <button
                            onClick={() => {
                              setEdit(true);
                              setVal(item.regionName);
                              setId(item.regionId);
                            }}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button onClick={() => onDelete(item.regionId)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
