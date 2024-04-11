import { useParams, useLoaderData, Link } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { IoMdArrowBack } from "react-icons/io";

const News = () => {
    const news = useLoaderData();
    console.log(news);
    const { id } = useParams();
    console.log(id);

    const aNews = news.find(newNews => newNews._id === id);
    console.log(aNews);
    const { image_url, title, details } = aNews;
    return (
        <div>
            <Header></Header>

            <div className="grid md:grid-cols-4 gap-3 mt-6">
                <div className="col-span-3 border rounded">
                    <div className="card card-compact w-full bg-base-100 shadow-xl p-6">
                        <figure><img src={image_url} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                            <div className="card-actions justify-start">
                                <Link to="/"><button className="btn btn-error rounded-none text-white">
                                    <IoMdArrowBack></IoMdArrowBack> All news in this category</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;