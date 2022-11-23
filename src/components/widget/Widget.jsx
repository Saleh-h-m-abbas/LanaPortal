import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";

const Widget = ({ type }) => {
  const [amount, setAmount] = useState(null);
  const [diff, setDiff] = useState(null);
  let data;

  switch (type) {
    case "user":
      data = {
        title: "Last Month",
        isMoney: false,
        link: "See all users",
        query:"users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
      case "allUser":
        data = {
          title: "Total Users",
          loginType:"all",
          isMoney: false,
          query:"users",
        };
        break;
    case "facebook":
      data = {
        title: "Facebook",
        isMoney: false,
        loginType:"facebook.com",
        query:"users",
      };
      break;

      case "google":
        data = {
          title: "Google",
          isMoney: false,
          loginType:"google.com",
          query:"users",
        };
        break;

        case "twitter":
          data = {
            title: "Twitter",
            isMoney: false,
            loginType:"twitter.com",
            query:"users",
          };
          break;

        case "phone":
          data = {
            title: "Phone",
            isMoney: false,
            loginType:"phone",
            query:"users",
          };
          break;
 
    default:
      break;
  }

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));
      // const whereType= data.loginType? where("authType", "==", data.loginType):"";
      var lastMonthQuery = query(
        collection(db, data.query),
        where("created", "<=", today),
        where("created", ">", lastMonth)
      );
      var prevMonthQuery = query(
        collection(db, data.query),
        where("created", "<=", lastMonth),
        where("created", ">", prevMonth)
      );
      if(data.loginType){
        if(data.loginType==="all"){
          lastMonthQuery = query(
            collection(db, data.query)
          );
        }else{
          lastMonthQuery = query(
            collection(db, data.query),
            where("authType", "==", data.loginType),
          );
           prevMonthQuery = query(
            collection(db, data.query),
            where("authType", "==", data.loginType),
          );
        }
        
      }
     

      const lastMonthData = await getDocs(lastMonthQuery);
      setAmount(lastMonthData.docs.length);

     if(!data.loginType){
      const prevMonthData = await getDocs(prevMonthQuery);
      console.log(lastMonthData.docs.length);
      console.log(prevMonthData.docs.length);
      setDiff(
        ((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) *
          100
      );
     }
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <Link to={"/users"}>
        <span className="link">{data.link}</span>
        </Link>
      </div>
      <div className="right">
      {!data.loginType&&  <div className={`percentage ${diff < 0 ? "negative" : "positive"}`}>
          {diff < 0 ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/> }
          {diff} %
        </div>}
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
