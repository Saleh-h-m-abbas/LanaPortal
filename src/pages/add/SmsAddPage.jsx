import "./SmsForm.scss"
import Navbar from "../../components/navbar/Navbar"
import SmsAddForm from "./SmsAddForm";
import SmsDatatable from "../../components/datatable/AddDatatable";

const SmsAddPage = () => {
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