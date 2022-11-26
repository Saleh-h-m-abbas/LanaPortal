export const userColumns = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "number", headerName: "Phone Number", width: 150 },
  { field: "sms", headerName: "SMS", width: 600 },
  { field: "sender", headerName: "SMS Header", width: 150 },
  { field: "email", headerName: "Sender Email", width: 150 },

 
  {
    field: "createdAt",
    headerName: "Created At",
    width: 140,
    renderCell: (params) => {

      return (
          <div>{`${params.row.createdAt?params.row.createdAt.toDate().toDateString(): ''}`}</div>
      );
    },
    
  },

];

export const smsColumns = [
  { field: "id", headerName: "ID", width: 400 },
  { field: "sms", headerName: "SMS Message", width: 700 },
  { field: "email", headerName: "Added User", width: 250 },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 750,
    renderCell: (params) => {
      return (
          <div>{`${params.row.createdAt? params.row.createdAt?.toDate().toDateString() : ''}`}</div>
      );
    },
    
  },

];
