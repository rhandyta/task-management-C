import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import {
  CalendarIcon,
  ChatBubbleBottomCenterTextIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/solid';

const MyTask = () => {
  return (
    <div className="flex gap-4">
      {/* Taks */}
      <div className="basis-4/12 ">
        <header className="uppercase border-blue-500 border-b-4 py-3 font-bold">
          Tasks
          <span className="text-gray-400 border-[1px] rounded-full px-1 ml-2">
            30
          </span>
        </header>
        <div className="pt-7 flex flex-col gap-6">
          <div className="border-[1px] rounded-md">
            <div className="p-4">
              <h1 className="font-medium text-lg capitalize mb-2">Judul</h1>
              <p className="text-sm text-gray-500 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <div className="flex justify-between pt-5 items-center">
                <label className="bg-green-100 px-3 py-1 rounded-full font-medium text-green-500 text-sm">
                  Ux Designer
                </label>
                <div className="flex rounded-md">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                    alt="avatar-user"
                    className="w-8 rounded-full border-2 border-white ml-[-.5rem]"
                  />
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                    alt="avatar-user"
                    className="w-8 rounded-full border-2 border-white ml-[-.5rem]"
                  />
                  <div className="w-8 text-white rounded-full border-2 bg-gray-400 border-white ml-[-.5rem] grid place-items-center text-xs">
                    3+
                  </div>
                </div>
              </div>
            </div>
            <footer className="flex px-4 justify-between py-3 border-t-[1px]">
              <div className="flex items-start">
                <ChatBubbleBottomCenterTextIcon
                  width="20"
                  className="text-gray-400"
                />
                <span className="block text-sm mt-[-3px] ml-1 text-gray-400">
                  8
                </span>
              </div>
              <div className="flex items-start">
                <CalendarIcon width="20" className="text-gray-400" />
                <span className="block text-sm ml-1 text-gray-400">
                  12 Jan 2022
                </span>
              </div>
            </footer>
          </div>
          <div className="border-[1px] rounded-md">
            <div className="p-4">
              <h1 className="font-medium text-lg capitalize mb-2">Judul</h1>
              <p className="text-sm text-gray-500 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <div className="flex justify-between pt-5 items-center">
                <label className="bg-green-100 px-3 py-1 rounded-full font-medium text-green-500 text-sm">
                  Ux Designer
                </label>
                <div className="flex rounded-md">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                    alt="avatar-user"
                    className="w-8 rounded-full border-2 border-white ml-[-.5rem]"
                  />
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                    alt="avatar-user"
                    className="w-8 rounded-full border-2 border-white ml-[-.5rem]"
                  />
                  <div className="w-8 text-white rounded-full border-2 bg-gray-400 border-white ml-[-.5rem] grid place-items-center text-xs">
                    3+
                  </div>
                </div>
              </div>
            </div>
            <footer className="flex px-4 justify-between py-3 border-t-[1px]">
              <div className="flex items-start">
                <ChatBubbleBottomCenterTextIcon
                  width="20"
                  className="text-gray-400"
                />
                <span className="block text-sm mt-[-3px] ml-1 text-gray-400">
                  8
                </span>
              </div>
              <div className="flex items-start">
                <CalendarIcon width="20" className="text-gray-400" />
                <span className="block text-sm ml-1 text-gray-400">
                  12 Jan 2022
                </span>
              </div>
            </footer>
          </div>
        </div>
      </div>
      {/* Completed Tasks */}
      <div className="basis-4/12 ">
        <header className="uppercase border-green-500 border-b-4 py-3 font-bold">
          Completed Tasks
          <span className="text-gray-400 border-[1px] rounded-full px-1 ml-2">
            30
          </span>
        </header>
        <div className="pt-7 flex flex-col gap-6">
          <div className="border-[1px] rounded-md">
            <div className="p-4">
              <h1 className="font-medium text-lg capitalize mb-2">Judul</h1>
              <p className="text-sm text-gray-500 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex justify-between pt-5 items-center">
                <label className="bg-blue-100 px-3 py-1 rounded-full font-medium text-blue-500 text-sm">
                  Front End
                </label>
                <div className="flex rounded-md">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                    alt="avatar-user"
                    className="w-8 rounded-full border-2 border-white ml-[-.5rem]"
                  />
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                    alt="avatar-user"
                    className="w-8 rounded-full border-2 border-white ml-[-.5rem]"
                  />
                  <div className="w-8 text-white rounded-full border-2 bg-gray-400 border-white ml-[-.5rem] grid place-items-center text-xs">
                    3+
                  </div>
                </div>
              </div>
            </div>
            <footer className="flex px-4 justify-between py-3 border-t-[1px]">
              <div className="flex items-start">
                <ChatBubbleBottomCenterTextIcon
                  width="20"
                  className="text-gray-400"
                />
                <span className="block text-sm mt-[-3px] ml-1 text-gray-400">
                  8
                </span>
              </div>
              <div className="flex items-start">
                <CheckIcon width="20" className="text-green-400" />
                <span className="block text-sm ml-1 text-green-400">Done</span>
              </div>
            </footer>
          </div>
          <div className="border-[1px] rounded-md">
            <div className="p-4">
              <h1 className="font-medium text-lg capitalize mb-2">Judul</h1>
              <p className="text-sm text-gray-500 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <div className="flex justify-between pt-5 items-center">
                <label className="bg-green-100 px-3 py-1 rounded-full font-medium text-green-500 text-sm">
                  Ux Designer
                </label>
                <div className="flex rounded-md">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                    alt="avatar-user"
                    className="w-8 rounded-full border-2 border-white ml-[-.5rem]"
                  />
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                    alt="avatar-user"
                    className="w-8 rounded-full border-2 border-white ml-[-.5rem]"
                  />
                  <div className="w-8 text-white rounded-full border-2 bg-gray-400 border-white ml-[-.5rem] grid place-items-center text-xs">
                    3+
                  </div>
                </div>
              </div>
            </div>
            <footer className="flex px-4 justify-between py-3 border-t-[1px]">
              <div className="flex items-start">
                <ChatBubbleBottomCenterTextIcon
                  width="20"
                  className="text-gray-400"
                />
                <span className="block text-sm mt-[-3px] ml-1 text-gray-400">
                  8
                </span>
              </div>
              <div className="flex items-start">
                <CheckIcon width="20" className="text-green-400" />
                <span className="block text-sm ml-1 text-green-400">Done</span>
              </div>
            </footer>
          </div>
        </div>
      </div>
      {/* Due Date */}
      <div className="basis-4/12 ">
        <header className="uppercase border-red-500 border-b-4 py-3 font-bold">
          Due Date
          <span className="text-gray-400 border-[1px] rounded-full px-1 ml-2">
            30
          </span>
        </header>
        <div className="pt-7 flex flex-col gap-6">
          <div className="border-[1px] rounded-md">
            <div className="p-4">
              <h1 className="font-medium text-lg capitalize mb-2">Judul</h1>
              <p className="text-sm text-gray-500 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <div className="flex justify-between pt-5 items-center">
                <label className="bg-yellow-100 px-3 py-1 rounded-full font-medium text-yellow-500 text-sm">
                  UI Designer
                </label>
                <div className="flex rounded-md">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                    alt="avatar-user"
                    className="w-8 rounded-full border-2 border-white ml-[-.5rem]"
                  />
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                    alt="avatar-user"
                    className="w-8 rounded-full border-2 border-white ml-[-.5rem]"
                  />
                  <div className="w-8 text-white rounded-full border-2 bg-gray-400 border-white ml-[-.5rem] grid place-items-center text-xs">
                    3+
                  </div>
                </div>
              </div>
            </div>
            <footer className="flex px-4 justify-between py-3 border-t-[1px]">
              <div className="flex items-start">
                <ChatBubbleBottomCenterTextIcon
                  width="20"
                  className="text-gray-400"
                />
                <span className="block text-sm mt-[-3px] ml-1 text-gray-400">
                  8
                </span>
              </div>
              <div className="flex items-start">
                <ExclamationTriangleIcon width="20" className="text-red-400" />
                <span className="block text-sm ml-1 text-red-400">
                  Due Date
                </span>
              </div>
            </footer>
          </div>
          <div className="border-[1px] rounded-md">
            <div className="p-4">
              <h1 className="font-medium text-lg capitalize mb-2">Judul</h1>
              <p className="text-sm text-gray-500 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex justify-between pt-5 items-center">
                <label className="bg-green-100 px-3 py-1 rounded-full font-medium text-green-500 text-sm">
                  Ux Designer
                </label>
                <div className="flex rounded-md">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                    alt="avatar-user"
                    className="w-8 rounded-full border-2 border-white ml-[-.5rem]"
                  />
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                    alt="avatar-user"
                    className="w-8 rounded-full border-2 border-white ml-[-.5rem]"
                  />
                  <div className="w-8 text-white rounded-full border-2 bg-gray-400 border-white ml-[-.5rem] grid place-items-center text-xs">
                    3+
                  </div>
                </div>
              </div>
            </div>
            <footer className="flex px-4 justify-between py-3 border-t-[1px]">
              <div className="flex items-start">
                <ChatBubbleBottomCenterTextIcon
                  width="20"
                  className="text-gray-400"
                />
                <span className="block text-sm mt-[-3px] ml-1 text-gray-400">
                  8
                </span>
              </div>
              <div className="flex items-start">
                <ExclamationTriangleIcon width="20" className="text-red-400" />
                <span className="block text-sm ml-1 text-red-400">
                  Due Date
                </span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTask;
