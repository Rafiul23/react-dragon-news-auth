import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone1 from '../assets/qZone1.png';
import Qzone2 from '../assets/qZone2.png';
import Qzone3 from '../assets/qZone3.png';



const RightSideNav = () => {
    return (
        <div>

            <div className='space-y-2 p-4 mb-6'>
            <h2 className="text-3xl font-bold">Login With</h2>
            <button className="btn btn-outline w-full">
                <FaGoogle></FaGoogle>
                Login with Google</button>
            <button className="btn btn-outline w-full">
                <FaGithub></FaGithub>
                Login with Github</button>
            </div>

            <div className=' p-4 mb-6'>
            <h2 className="text-3xl font-bold mb-4">Find us on</h2>

                <a href="https://www.facebook.com" className='p-4 flex text-lg items-center border rounded-t-lg'>
                    <FaFacebook className='mr-3'></FaFacebook>
                    Facebook
                </a>
           
                <a href="https://www.twitter.com" className='p-4 flex text-lg items-center border-x '>
                    <FaTwitter className='mr-3'></FaTwitter>
                    Twitter
                </a>
           
                <a href="https://www.instagram.com" className='p-4 flex text-lg items-center border rounded-b-lg'>
                    <FaInstagram className='mr-3'></FaInstagram>
                    Instagram
                </a>
            </div>

            <div className='space-y-2 p-4 mb-6'>
            <h2 className="text-3xl font-bold">Q-Zone</h2>
                <img src={Qzone1}  />
                <img src={Qzone2}  />
                <img src={Qzone3}  />
            </div>
        </div>
    );
};

export default RightSideNav;