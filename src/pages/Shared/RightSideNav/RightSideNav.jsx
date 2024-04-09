import { FcGoogle} from "react-icons/fc";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Qzone1 from "../../../assets/qZone1.png"
import Qzone2 from "../../../assets/qZone2.png"
import Qzone3 from "../../../assets/qZone3.png"
const RightSideNav = () => {
    return (
        <div>
            {/* Login With */}
            <div className="space-y-4 mb-6">
                <h3 className="text-xl font-semibold">Login With</h3>
                <div>
                    <button className="btn btn-block">
                        <FcGoogle></FcGoogle>
                        Login with Google
                    </button>
                </div>
                <div>
                    <button className="btn btn-block">
                        <FaGithub></FaGithub>
                        Login with Github
                    </button>
                </div>
            </div>

            {/* Follow Us On */}
            <div className="mb-5">
                <h2 className="text-xl font-semibold mb-5">Find Us On</h2>
                <a className="flex items-center gap-2 p-4 border rounded-t-lg" href="">
                    <FaFacebook></FaFacebook>
                    Facebook
                </a>
                <a className="flex items-center gap-2 p-4 border-x" href="">
                    <FaXTwitter></FaXTwitter>
                    Twitter
                </a>
                <a className="flex items-center gap-2 p-4 border rounded-b-lg" href="">
                    <FaInstagram></FaInstagram>
                    Facebook
                </a>
            </div>

            {/* Q-Zone */}
            <div>
                <h2 className="text-xl font-semibold mb-5">Q-Zone</h2>
                <img src={Qzone1} alt="" />
                <img src={Qzone2} alt="" />
                <img src={Qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;