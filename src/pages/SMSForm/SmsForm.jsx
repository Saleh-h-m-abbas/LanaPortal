import "./SmsForm.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import SmsFormPage from "./SmsFormPage"

const SmsForm = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <SmsFormPage />
      </div>
    </div>
  )
}

export default SmsForm