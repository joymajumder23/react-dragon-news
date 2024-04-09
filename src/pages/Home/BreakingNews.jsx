import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex bg-slate-300 p-4">
            <button className="btn btn-error">Breaking News</button>
            <Marquee pauseOnHover={true}>
                <Link to="/" className="mr-3">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link to="/" className="mr-3">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link to="/" className="mr-3">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>

        </div>
    );
};

export default BreakingNews;