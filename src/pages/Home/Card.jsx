const Card = ({data}) => {
    const {title, published_date, image_url} = data;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{published_date}</p>
            </div>
        </div>
    );
};

export default Card;