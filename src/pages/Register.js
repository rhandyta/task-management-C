import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="grid place-items-center mt-10 w-full">
      <div className="p-5 border-[1px] border-gray-400 rounded-md w-4/12">
        <h1 className="font-bold text-3xl text-center text-blue-700">
          Register
        </h1>
        <form className="mt-5 flex flex-col gap-4">
          <div>
            <input
              type="text"
              placeholder="Display Name"
              className="w-full input-auth"
            />
          </div>
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
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input-auth"
            />
          </div>
          <div>
            <h1 className="font-medium mb-2">Photo Profile</h1>
            <input type="file" accept="image/png, image/jpg, image/jpeg" />
          </div>
          <span>
            Sudah punya akun?{' '}
            <Link to={'/login'} className="text-blue-500">
              Login
            </Link>
          </span>
          <button className="btn bg-blue-700">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
