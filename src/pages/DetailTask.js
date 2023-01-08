import {
  CalendarIcon,
  PaperAirplaneIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

const DetailTask = () => {
  return (
    <div className="flex">
      <div className="basis-8/12">
        <div className="border-[1px] rounded-md p-4">
          <h1 className="text-xl font-medium mb-3">Judul</h1>
          <div className="text-gray-500 flex gap-2 mb-3 items-center">
            <CalendarIcon width="20" />
            <span>12 Jan 2022</span>
            <label className="bg-red-100 px-3 py-1 rounded-full font-medium text-red-500 text-sm">
              Due Date
            </label>
          </div>
          <p className="text-justify text-gray-700 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className="flex gap-3">
            <button className="bg-green-600 hover:bg-green-700 btn">
              Mark As Completed
            </button>
            <button className="bg-red-600 hover:bg-red-700 btn">
              <TrashIcon width="20" />
            </button>
          </div>
        </div>
        {/* Comment */}
        <div className="p-4 mt-4 border-[1px] rounded-md">
          <h1 className="text-xl font-medium mb-3">Comments</h1>
          <div className="mb-4">
            <div className="mb-3 w-fit flex gap-1">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                alt="avatar-user"
                className="avatar mr-1 self-start"
              />
              <div className="bg-gray-100 p-1 px-4 rounded-lg">
                <h1 className="font-medium">Nama User</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
          <form className="flex gap-2">
            <textarea
              type="text"
              className="basis-10/12 outline-none border-[1px] rounded-lg p-2"
            />
            <button
              type="submit"
              className="btn self-start bg-blue-700 hover:bg-blue-800"
            >
              <PaperAirplaneIcon width="20" />
            </button>
          </form>
        </div>
      </div>
      <div className="basis-4/12 px-3">
        <div className="border-[1px] rounded-md p-3">
          <h1 className="text-xl font-medium mb-3">Users</h1>
          <div>
            <div className="text-sm py-1 text-gray-500 flex items-center">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                alt="avatar-user"
                className="avatar mr-2"
              />
              <h1>Nama User</h1>
            </div>
            <div className="text-sm py-1 text-gray-500 flex items-center">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                alt="avatar-user"
                className="avatar mr-2"
              />
              <h1>Nama User</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTask;
