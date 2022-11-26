import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { smsColumns } from "../../datatablesource";
import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";

const AddDatatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // LISTEN (REALTIME)
    const sub = onSnapshot(
      collection(db, "sms"),
      (snapShot) => {
             let list = snapShot.docs.map(doc=>{
          return {...doc.data(),id: doc.id}
        })
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return sub;
  }, []);

  return (
    <div className="datatable">
      <div className="datatableTitle">
        SMS Messages List
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={smsColumns}
        pageSize={100}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};

export default AddDatatable;
