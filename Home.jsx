import { useLocation } from "react-router";
import Header from "./header";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import "./Home.css"


const Homepage=() => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}


export default Homepage;