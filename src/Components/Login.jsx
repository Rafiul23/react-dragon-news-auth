import { Link } from "react-router-dom";
import Navbar from "./Navbar";


const Login = () => {

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        
    }

    return (
        <div>
            <Navbar></Navbar>

           <div className="mx-auto lg:w-1/2 md:w-3/4">
            <h2 className="text-3xl text-center">Please Login</h2>
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p>New to here? Please, <Link to='/register' className="text-blue-500 hover:underline">Register</Link></p>
           </div>

        </div>

    );
};

export default Login;