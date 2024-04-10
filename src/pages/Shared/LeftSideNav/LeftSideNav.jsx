import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../Home/Card";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    const [card, setCard] = useState([]);
    
    useEffect(() => {
        fetch('./categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    useEffect(() => {
        fetch('/news.json')
        .then(res => res.json())
        .then(data => setCard(data))
    },[]);

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

            <div>
                {
                    card.map(data => <Card key={data.id} data={data}></Card>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;