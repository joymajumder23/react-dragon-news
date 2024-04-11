const Card = ({data}) => {
    const {title, image_url, author, total_view} = data;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl mb-3">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex items-center justify-between">
                <p>{total_view} Views</p>
                <p>{author.published_date}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;