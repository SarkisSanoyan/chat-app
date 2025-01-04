import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from '../redux/userSlice';
import { BASE_URL } from '..';

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/login`, user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      navigate("/");
      console.log(res);
      dispatch(setAuthUser(res.data));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      username: "",
      password: ""
    })
  }
  return (
    <div className="mx-auto min-w-96">
      <div className='w-full p-6 border border-gray-100 rounded-lg shadow-m bg-slate-900'>
        <h1 className='text-3xl font-bold text-center'>Login</h1>
        <form onSubmit={onSubmitHandler} action="">

          <div>
            <label className='p-2 label'>
              <span className='text-base text-white label-text'>Username</span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className='w-full h-10 input input-bordered'
              type="text"
              placeholder='Enter Username' />
          </div>
          <div>
            <label className='p-2 label'>
              <span className='text-base text-white label-text'>Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className='w-full h-10 input input-bordered'
              type="password"
              placeholder='Enter Password' />
          </div>

          <p className='my-2 text-center'>Don't have an account? <Link to="/signup" className="text-green-500"> Signup </Link></p>
          <div>
            <button type="submit" className='mt-2 text-xl border btn btn-block btn-sm border-slate-700 hover:bg-green-500 hover:text-white'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login