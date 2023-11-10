import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import moment from 'moment';
const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">WelCome</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12" to="/">Welcome to a World of Knowledge and Possibilities!...<p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p></Link>
                <Link className="mr-12" to="/">Welcome to a World of Knowledge and Possibilities!...<p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p></Link>
                <Link className="mr-12" to="/">Welcome to a World of Knowledge and Possibilities!...<p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p></Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;