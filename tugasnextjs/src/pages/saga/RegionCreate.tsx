import React, { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { AddRegionReq } from "@/redux-saga/action/regionAction";

interface FormValues {
  name: string;
  file: File | null;
}

interface Props {
  setDisplay: (value: boolean) => void;
  setRefresh: (value: boolean) => void;
}

export default function RegionCreate(props: Props) {
  const dispatch = useDispatch();
  const [previewImg, setPreviewImage] = useState<string | undefined>(undefined);
  const [upload, setUpload] = useState(false);
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      file: null,
    },
    onSubmit: async (values) => {
      if (values.file) {
        const payload = new FormData();
        payload.append("name", values.name);
        payload.append("file", values.file);
        dispatch(AddRegionReq(payload));
        props.setDisplay(false);
        window.alert("Data Successfully Insert");
        props.setRefresh(true);
      }
    },
  });

  const uploadConfig =
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          formik.setFieldValue("file", file);
          setPreviewImage(reader.result as string);
        };
        reader.readAsDataURL(file);
        setUpload(true);
      }
    };

  const onClear = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.preventDefault();
    formik.setFieldValue("file", null);
    setPreviewImage(undefined);
    setUpload(false);
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <h2>Add Regions</h2>
          <label>Region Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label>Photo</label>
          <div>
            {upload === false ? (
              <span>Kosong</span>
            ) : (
              <>
                <img src={previewImg} alt="img" />
                <span onClick={onClear}>Remove</span>
              </>
            )}
          </div>
          <div>
            <label>
              <span>upload a file</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                onChange={uploadConfig("file")}
              />
            </label>
          </div>
          <div>
            <button type="submit">Simpan</button>
            <button type="button" onClick={() => props.setDisplay(false)}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
