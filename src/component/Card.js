import {
    CalendarIcon,
    ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import LabelCategory from "./LabelCategory";

function Card({ task }) {
    return (
        <div className="border-[1px] rounded-md">
            <div className="p-4">
                <h1 className="font-medium text-lg capitalize mb-2">
                    {task.title}
                </h1>
                <p className="text-sm text-gray-500 text-justify">
                    {task.description}
                </p>
                <div className="flex justify-between pt-5 items-center">
                    <LabelCategory title={task.categories} />
                    <div className="flex rounded-md">
                        {task.users.slice(0, 3).map((user) => (
                            <img
                                key={user.id}
                                src={user.photoURL}
                                alt="avatar-user"
                                className={`avatar ${
                                    task.users.length > 3 && "ml-[-.5rem]"
                                }`}
                            />
                        ))}
                        {task.users.length > 3 ? (
                            <div className="w-8 text-white rounded-full border-2 bg-gray-400 border-white ml-[-.5rem] grid place-items-center text-xs">
                                {task.users.length % 3} +
                            </div>
                        ) : null}
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
                        {task.comments.length}
                    </span>
                </div>
                <div className="flex items-start">
                    <CalendarIcon width="20" className="text-gray-400" />
                    <span className="block text-sm ml-1 text-gray-400">
                        {task.duedate}
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default Card;
