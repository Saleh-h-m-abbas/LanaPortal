import "./list.scss"
import Navbar from "../../components/navbar/Navbar"
import SendDatatable from "../../components/datatable/SendDatatable"

const List = () => {
  return (
    <div className="list">
      <div className="listContainer">
        <Navbar />
        <SendDatatable />
      </div>
    </div>
  )
}

export default List;