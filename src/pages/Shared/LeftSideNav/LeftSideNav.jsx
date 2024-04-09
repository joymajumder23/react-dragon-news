import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('./categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);
    return (
        <div>
            <h3 className="text-xl font-semibold mb-5">All Category{categories.length}</h3>
            {
                categories.map(category => <Link
                    to={`/category/${category.id}`}
                    className="block text-xl px-12 py-4"
                    key={category.id}>
                    {category.name}
                </Link>)
            }
        </div>
    );
};

export default LeftSideNav;