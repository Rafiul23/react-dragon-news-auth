import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div>
            <h2 className="text-3xl p-2 font-bold">All Categories</h2>

            {
                categories.map(category => <Link 
                    to={`/category/${category.id}`}
                    className="p-4 block text-xl font-semibold"
                    key={category.id}>
                        {category.name}
                        </Link>)
            }
        </div>
    );
};

export default LeftSideNav;