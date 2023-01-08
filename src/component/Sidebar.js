import React from 'react';
import {
  HomeIcon,
  ClipboardDocumentCheckIcon,
  UserIcon,
  PlusIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const menus = [
  {
    name: 'Home',
    to: '/',
    icon: <HomeIcon width="20" />,
  },
  {
    name: 'My Tasks',
    to: '/my-task',
    icon: <ClipboardDocumentCheckIcon width="20" />,
  },
  {
    name: 'Add Tasks',
    to: '/add-task',
    icon: <PlusIcon width="20" />,
  },
  {
    name: 'Users',
    to: '/users',
    icon: <UserIcon width="20" />,
  },
];

const Sidebar = () => {
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
          <NavLink end to={menu.to} key={i} className="navlink text-gray-500">
            <span className="mr-4 inline-block ">{menu.icon}</span>
            <h1>{menu.name}</h1>
          </NavLink>
        ))}
        <div className="navlink text-gray-500">
          <span className="mr-4 inline-block">
            <ArrowLeftOnRectangleIcon width="20" />
          </span>
          <h1>Logout</h1>
        </div>
        <div className="px-6 mt-3 mb-3">
          <h1 className="text-sm font-bold text-gray-500">Users Online</h1>
        </div>
        <div className="px-6 text-sm py-1 text-gray-500 flex items-center">
          <span className="mr-4 w-2 h-2 bg-green-500 inline-block rounded-full"></span>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
            alt="avatar-user"
            className="avatar mr-2"
          />
          <h1>Nama User</h1>
        </div>
        <div className="px-6 text-sm py-1 text-gray-500 flex items-center">
          <span className="mr-4 w-2 h-2 bg-green-500 inline-block rounded-full"></span>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
            alt="avatar-user"
            className="avatar mr-2"
          />
          <h1>Nama User</h1>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
