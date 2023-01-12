import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const Header = () => {
    const auth = useSelector((state) => state.user);
    const isLoading = true;
    return (
        <div className="h-12 flex justify-between relative items-center px-5 shadow-sm">
            <div
                className={`container-searchba hidden ${
                    isLoading && "w-[15rem] p-10 flex justify-center"
                }`}
            >
                {!isLoading ? (
                    <>
                        <Link className="result-search">Hasil Search 1</Link>
                        <Link className="result-search">Hasil Search 2</Link>
                        <Link className="result-search">Hasil Search 3</Link>
                    </>
                ) : (
                    <Spinner />
                )}
            </div>
            <div className="flex items-center gap-2 border-[1px] rounded-full py-1 px-2">
                <MagnifyingGlassIcon width="20" className="text-blue-700" />
                <input
                    type="text"
                    className="outline-none"
                    placeholder="Search..."
                />
            </div>
            <div className="flex items-center gap-2">
                <img
                    src={auth.photoURL}
                    alt="avatar"
                    className="w-8 rounded-full"
                />
                <h1 className="text-sm font-medium">{auth.displayName}</h1>
            </div>
        </div>
    );
};

export default Header;
