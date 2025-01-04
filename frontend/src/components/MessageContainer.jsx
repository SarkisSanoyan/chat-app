import SendInput from './SendInput';
import Messages from './Messages';
import { useSelector, useDispatch } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const MessageContainer = () => {
    const dispatch = useDispatch();
    const { selectedUser, authUser, onlineUsers } = useSelector(store => store.user);
    const isOnline = onlineUsers?.includes(selectedUser?._id);

    const exitChatHandler = () => {
        dispatch(setSelectedUser(null));
    };

    return (
        <>
            {selectedUser !== null ? (
                <div id='message-container' className="md:min-w-[550px] flex flex-col w-[75%] h-full p-4">
                    <div className="flex items-center gap-2 px-4 py-2 mb-2 text-white rounded-md bg-zinc-800">
                        <div className={`avatar ${isOnline ? "online" : ""}`}>
                            <div className="w-12 rounded-full">
                                <img src={selectedUser?.profilePhoto} alt="user-profile" />
                            </div>
                        </div>
                        <div className="flex flex-col flex-1">
                            <div className="flex justify-between gap-2">
                                <p>{selectedUser?.fullName}</p>
                            </div>
                        </div>
                        <button
                            onClick={exitChatHandler}
                            className="px-2 py-1 text-sm text-white bg-red-600 rounded-md hover:bg-red-800"
                        >
                            Exit
                        </button>
                    </div>
                    <Messages />
                    <SendInput />
                </div>
            ) : (
                <div
                    id="welcome"
                    className="flex flex-col justify-center items-center text-center w-[75%] h-full md:min-w-[550px]"
                >
                    <h1 className="font-bold text-white sm:text-4xl">
                        Hi, {authUser?.fullName}
                    </h1>
                    <h1 className="font-semibold text-white sm:text-2xl">
                        Let's start conversation
                    </h1>
                </div>
            )}
        </>
    );
};

export default MessageContainer;
