import "./SmsForm.scss"
import Navbar from "../../components/navbar/Navbar"
import { useState } from "react"
import SmsAddForm from "./SmsAddForm";
import SmsDatatable from "../../components/datatable/AddDatatable";

const SmsAddPage = () => {
  const [user, setUser] = useState('s');

  return (
    <div className="list">
      <div className="listContainer">
        <Navbar />
        <SmsAddForm />
        <SmsDatatable />
      </div>
    </div>
  )
}

export default SmsAddPage;