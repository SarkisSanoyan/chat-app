import React from 'react'
import OtherUser from './OtherUser';
import useGetOtherUsers from '../hooks/useGetOtherUsers';
import { useSelector } from "react-redux";


const OtherUsers = () => {
    useGetOtherUsers();

    const { onlineUsers, otherUsers } = useSelector(store => store.user);
    if (!otherUsers) return;

    const onlineOnlyUsers = otherUsers.filter(user => onlineUsers?.includes(user._id));
    if (onlineOnlyUsers.length === 0) {
        return <div className="text-center text-slate-200">No online users available</div>;
    }

    return (
        <div className='flex-1 overflow-auto'>
            {
                onlineOnlyUsers?.map((user) => {
                    return (
                        <OtherUser key={user._id} user={user} />
                    )
                })
            }
        </div>
    )
}

export default OtherUsers;


