export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "authType",
    headerName: "Type",
    width: 120,
  },
  {
    field: "username",
    headerName: "User",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {!params.row.userPhoto?  <div></div>:<img className="cellImg" src={params.row.userPhoto} alt="" />}
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 210,
  },
  {
    field: "phoneNumber",
    headerName: "Phone",
    width: 135,
  },


  {
    field: "user_ip",
    headerName: "User IP",
    width: 120,
  },
  {
    field: "user_mac",
    headerName: "User Mac",
    width: 140,
  },
  {
    field: "ssid",
    headerName: "SSID",
    width: 140,
  },
  {
    field: "ap_ip",
    headerName: "AP IP",
    width: 140,
  },
  {
    field: "ap_mac",
    headerName: "AP MAC",
    width: 140,
  },
  {
    field: "loginStatus",
    headerName: "Status",
    width: 80,
    renderCell: (params) => {
      const status= params.row.loginStatus;
      return (
          <div>{status==="1"?"Login":""}</div>
      );
    },
  },
  {
    field: "created",
    headerName: "Created At",
    width: 140,
    renderCell: (params) => {
      const date= params.row.created;
      return (
          <div>{`${date.toDate().toDateString()}`}</div>
      );
    },
    
  },

];
