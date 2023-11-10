import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
//import NewsCard from "../../Home/NewsCard";


//import RightSideNav from "../RightSideNav/RightSideNav";

const LeftSideNav = () => {
    
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
         
        <div >
            <div className="text-center text-3xl font-semibold my-2">All catagories</div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 my-3 " >
            
            {
                categories.map(category => <Link 
                    className="block ml-4 text-xl font-semibold" 
                    key={category.id}
                    to={`/category/${category.id}`}
                    >  
                         <Link
                        
                         to={`/newsdetail/${category.id}`}
                         >
             
                        <div   className="card w-56 bg-base-100 shadow-xl">
                    <figure><img className="w-3/4 h-48" src={category.img} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{category.name}</h2>                    
                    </div>
                    
                  </div></Link></Link> )
            }
            </div>
        </div>
    );
};

export default LeftSideNav;
