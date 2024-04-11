import { FaBookmark } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    console.log(news);
    const { author, title, image_url, details, total_view, rating, _id } = news;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl mb-6">
            <div className="flex justify-between items-center p-4 bg-slate-100">
                <div className="flex gap-3 items-center">
                    <div className="avatar">
                        <div className="w-10 mask mask-squircle">
                            <img src={author.img} />
                        </div>
                    </div>
                    <div>
                        <h3>{author.name}</h3>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <FaBookmark></FaBookmark>
                    <IoMdShare></IoMdShare>
                </div>
            </div>
            <h2 className="card-title p-4">{title}</h2>
            <figure className="p-4"><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                {
                    details.length > 200? 
                    <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-blue-700 font-bold">Read More</Link></p> : 
                    <p>{details}</p>
                }
                <hr />
                <div className="card-actions justify-start">
                    <div>
                        <div className="flex justify-between items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p>{rating?.number}</p>
                                <div className="badge badge-ghost">{rating.badge}</div>
                            </div>
                            <p className="flex items-center gap-2"><FaEye></FaEye> {total_view}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;