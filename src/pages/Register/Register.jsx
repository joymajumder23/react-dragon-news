import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoUrl = form.get('photoUrl');
        const email = form.get('email');
        const pass = form.get('pass');
        console.log(name, photoUrl, email, pass);

        // create user 
        createUser(email, pass)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center">
                <h1 className="text-center text-4xl font-semibold mb-12">Register your account</h1>
                <hr />
                <form onSubmit={handleRegister} className="mx-auto md:w-3/4 lg:w-1/2 mb-6 mt-12">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" className="input input-bordered" name="name" required />
                    </div>
                    <div className="form-control mt-6">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Enter your photo url" className="input input-bordered" name="photoUrl" required />
                    </div>
                    <div className="form-control mt-6">
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
                    <div className="text-start flex gap-2 mt-6">
                        <input type="checkbox" name="Checked" id="" />
                        <Link>Terms & Conditions</Link>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Register</button>
                    </div>
                </form>
                <p>Already have an account? <Link to="/login" className="text-red-500 font-bold">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;