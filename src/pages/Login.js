import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="grid place-items-center mt-32 w-full">
      <div className="p-5 border-[1px] border-gray-400 rounded-md w-4/12">
        <h1 className="font-bold text-3xl text-center text-blue-700">Login</h1>
        <form className="mt-5 flex flex-col gap-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full input-auth"
            />
            {/* <span className="error-message">Error</span> */}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full input-auth"
            />
          </div>
          <span>
            Belum punya akun?{' '}
            <Link to={'/register'} className="text-blue-500">
              Register
            </Link>
          </span>
          <button className="btn bg-blue-700">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
