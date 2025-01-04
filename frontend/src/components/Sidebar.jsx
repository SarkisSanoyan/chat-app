import React, { useState } from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from './OtherUsers';
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAuthUser, setOtherUsers, setSelectedUser } from '../redux/userSlice';
import { setMessages } from '../redux/messageSlice';
import { BASE_URL } from '..';

const Sidebar = () => {
    const [search, setSearch] = useState("");
    const { otherUsers } = useSelector(store => store.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/v1/user/logout`);
            navigate("/login");
            toast.success(res.data.message);
            dispatch(setAuthUser(null));
            dispatch(setMessages(null));
            dispatch(setOtherUsers(null));
            dispatch(setSelectedUser(null));
        } catch (error) {
            console.log(error);
        }
    }
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        const conversationUser = otherUsers?.find((user) => user.fullName.toLowerCase().includes(search.toLowerCase()));
        if (conversationUser) {
            dispatch(setOtherUsers([conversationUser]));
        } else {
            toast.error("User not found!");
        }
    }

    return (
        <div id='sidebar' className='flex flex-col w-[25%] h-full p-4'>
            <form onSubmit={searchSubmitHandler} action="" className='flex items-center gap-2'>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='rounded-md input input-bordered w-full sm:w-[40%] md:w-[80%] lg:w-full' type="text"
                    placeholder='Search user...'
                />
                <button type='submit' className='text-white btn bg-zinc-700 hover:bg-green-500'>
                    <BiSearchAlt2 className='w-6 h-6 outline-none' />
                </button>
            </form>

            {/* <div className="my-2 border-t border-t-slate-800"></div> */}
            <h2 className="my-2 text-lg font-semibold text-slate-900">Active Users</h2>
            <OtherUsers />

            <div className='mt-auto'>
                <button onClick={logoutHandler} className='w-full btn btn-sm text-white hover:bg-red-600'>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar;