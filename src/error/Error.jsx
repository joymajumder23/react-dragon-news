import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center">
            <h1 className="text-6xl font-poppins font-bold">404</h1>
            <h1 className="text-6xl font-poppins font-bold">error!</h1>
            <Link to="/"><button className="btn">Go back to home</button></Link>
        </div>
    );
};

export default Error;