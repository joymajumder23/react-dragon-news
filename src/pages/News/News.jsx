import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const News = () => {
    return (
        <div>
            <Header></Header>
            
            <h3>News Details</h3>
            <div className="grid md:grid-cols-4 gap-3">
                <div className="col-span-3 border rounded">
                    <h2>News coming soon...</h2>
                </div>
                <div>
                <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;