import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'));
        console.log(form.get('pass'));
    }
    return (
        <div>
            <Navbar></Navbar>
        <div className="text-center">
        <h1 className="text-center text-4xl font-semibold mb-12">Login your account</h1>
        <hr />
            <form onSubmit={handleLogin} className="mx-auto md:w-3/4 lg:w-1/2 mb-6 mt-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Enter your email" className="input input-bordered" name="email" required />
                </div>
                <div className="form-control mt-6">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter your password" className="input input-bordered" name="pass" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-neutral">Login</button>
                </div>
            </form>
            <p>Do not have an account? <Link to="/register" className="text-red-500 font-bold">Register</Link></p>
        </div>
        </div>
    );
};

export default Login;