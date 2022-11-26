import "./navbar.scss";
import { useContext } from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { AuthContext } from "../../context/AuthContext";
import AddBoxIcon from '@mui/icons-material/AddBox';
import SendIcon from '@mui/icons-material/Send';
const Navbar = () => {
  const { dispatch } = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="navbar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">LanaLine</span>
        </Link>
      </div>
      <div class="vl"></div>
      <div className="center">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/send" style={{ textDecoration: "none" }}>
            <li>
              <SendIcon className="icon" />
              <span>Send SMS</span>
            </li>
          </Link>

          {user.email === "admin@lanaline.ps" && <Link to="/add" style={{ textDecoration: "none" }}>
            <li>
              <AddBoxIcon className="icon" />
              <span>Add SMS</span>
            </li>
          </Link>}


          <li onClick={() => dispatch({ type: "LOGOUT" })}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
