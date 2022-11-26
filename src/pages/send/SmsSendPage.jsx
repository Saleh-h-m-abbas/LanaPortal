import "./SmsForm.scss"
import Navbar from "../../components/navbar/Navbar"
import SendDatatable from "../../components/datatable/SendDatatable"
import SmsSendForm from "./SmsSendForm"

const SmsSendPage = () => {
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