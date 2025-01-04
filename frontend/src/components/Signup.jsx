import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { BASE_URL } from '..';

const Signup = () => {
  const [user, setUser] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const navigate = useNavigate();

  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/register`, user, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate('/login');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
      console.error(error);
    }

    setUser({
      fullName: '',
      username: '',
      password: '',
      confirmPassword: '',
      gender: '',
    });
  };

  return (
    <div className="mx-auto min-w-96">
      <div className="w-full p-6 border border-gray-100 rounded-lg shadow-md bg-slate-900">
        <h1 className="text-3xl font-bold text-center text-white">Signup</h1>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label className="p-2 label">
              <span className="text-base text-white label-text">Full Name</span>
            </label>
            <input
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              className="w-full h-10 input input-bordered"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
          <div>
            <label className="p-2 label">
              <span className="text-base text-white label-text">Username</span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-full h-10 input input-bordered"
              type="text"
              placeholder="Username"
              required
            />
          </div>
          <div>
            <label className="p-2 label">
              <span className="text-base text-white label-text">Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full h-10 input input-bordered"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div>
            <label className="p-2 label">
              <span className="text-base text-white label-text">Confirm Password</span>
            </label>
            <input
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              className="w-full h-10 input input-bordered"
              type="password"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="flex items-center justify-around my-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={user.gender === 'male'}
                onChange={() => handleCheckbox('male')}
                className="mx-2 checkbox bg-slate-300"
              />
              <p className="text-white">Male</p>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={user.gender === 'female'}
                onChange={() => handleCheckbox('female')}
                className="mx-2 checkbox bg-slate-300"
              />
              <p className="text-white">Female</p>
            </div>
          </div>
          <p className="my-2 text-center text-white">
            Already have an account? <Link to="/login" className="text-green-500">Login</Link>
          </p>
          <div>
            <button
              type="submit"
              className="mt-2 text-xl border btn btn-block btn-sm border-slate-700 hover:bg-green-500 hover:text-white"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
