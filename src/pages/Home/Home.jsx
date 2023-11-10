
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";

import BreakingNews from "./BreakingNews";

import Footer from "../Footer/Footer";
import Slide from "./Slide/Slide";


const Home = () => {
   
    return (
        <div>
            <BreakingNews></BreakingNews>
            <Header></Header>           
            <Navbar></Navbar>
            <Slide></Slide>
            <LeftSideNav></LeftSideNav>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;