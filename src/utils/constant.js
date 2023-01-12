import {
    ClipboardDocumentCheckIcon,
    DocumentCheckIcon,
    DocumentDuplicateIcon,
    DocumentIcon,
    ExclamationTriangleIcon,
    HomeIcon,
    PlusIcon,
    UserIcon,
} from "@heroicons/react/24/outline";

export const tasksCount = [
    {
        title: "All Tasks",
        count: 30,
        color: "text-blue-500",
        icon: <DocumentDuplicateIcon width="50" className="text-blue-500" />,
    },
    {
        title: "My Tasks",
        count: 30,
        color: "text-purple-500",
        icon: <DocumentIcon width="50" className="text-purple-500" />,
    },
    {
        title: "Completed Tasks",
        count: 30,
        color: "text-green-400",
        icon: <DocumentCheckIcon width="50" className="text-green-400" />,
    },
    {
        title: "Due Date",
        count: 30,
        color: "text-red-500",
        icon: <ExclamationTriangleIcon width="50" className="text-red-500" />,
    },
];

export const menus = [
    {
        name: "Home",
        to: "/",
        icon: <HomeIcon width="20" />,
    },
    {
        name: "My Tasks",
        to: "/my-task",
        icon: <ClipboardDocumentCheckIcon width="20" />,
    },
    {
        name: "Add Tasks",
        to: "/add-task",
        icon: <PlusIcon width="20" />,
    },
    {
        name: "Users",
        to: "/users",
        icon: <UserIcon width="20" />,
    },
];
