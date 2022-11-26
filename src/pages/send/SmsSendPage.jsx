import "./SmsForm.scss"
import Navbar from "../../components/navbar/Navbar"
import { useState } from "react"
import SendDatatable from "../../components/datatable/SendDatatable"
import SmsSendForm from "./SmsSendForm"

const SmsSendPage = () => {
  const [user, setUser] = useState('s');

  return (
    <div className="list">
      <div className="listContainer">
        <Navbar />
        <SmsSendForm /> 
        <SendDatatable />
      </div>
    </div>
  )
}

export default SmsSendPage;