import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import SendDatatable from "../../components/datatable/SendDatatable";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="allUser" />
        </div>
        <div className="listContainer">
          <SendDatatable/>
        </div>
      </div>
    </div>
  );
};

export default Home;
