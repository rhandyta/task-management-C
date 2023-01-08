import React from 'react';

const Users = () => {
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Email
            </th>
            <th scope="col" className="py-3 px-6">
              Task
            </th>
            <th scope="col" className="py-3 px-6">
              Avatar
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Agustian
            </th>
            <td className="py-4 px-6">agustian@gmail.com</td>
            <td className="py-4 px-6">36</td>
            <td className="py-4 px-6">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                alt="avatar-user"
                className="avatar"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
