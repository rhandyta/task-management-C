import React from "react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../features/userSlice";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { menus } from "../utils/constant";
import useGetUsers from "../hooks/useGetUsers";

const Sidebar = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const { users } = useGetUsers();

    const handlerLogout = async () => {
        await updateDoc(doc(db, "users", user.userId), {
            online: false,
        });
        dispatch(userLogout());
    };
    return (
        <aside className="basis-2/12 sidebar">
            <div>
                <div className="p-3 mb-3">
                    <h1 className="text-xl font-bold text-center text-blue-700">
                        E-Task
                    </h1>
                </div>
                {/* Lists Menu */}
                {menus.map((menu, i) => (
                    <NavLink
                        end
                        to={menu.to}
                        key={i}
                        className="navlink text-gray-500"
                    >
                        <span className="mr-4 inline-block ">{menu.icon}</span>
                        <h1>{menu.name}</h1>
                    </NavLink>
                ))}
                <div className="navlink text-gray-500" onClick={handlerLogout}>
                    <span className="mr-4 inline-block">
                        <ArrowLeftOnRectangleIcon width="20" />
                    </span>
                    <h1>Logout</h1>
                </div>
                <div className="px-6 mt-3 mb-3">
                    <h1 className="text-sm font-bold text-gray-500">
                        Users Online
                    </h1>
                </div>
                {users
                    .filter((user) => user.online)
                    .map((user) => (
                        <div
                            className="px-6 text-sm py-1 text-gray-500 flex items-center"
                            key={user.id}
                        >
                            <span className="mr-4 w-2 h-2 bg-green-500 inline-block rounded-full"></span>
                            <img
                                src={user.photoURL}
                                alt="avatar-user"
                                className="avatar mr-2"
                            />
                            <h1>{user.displayName}</h1>
                        </div>
                    ))}
            </div>
        </aside>
    );
};

export default Sidebar;
