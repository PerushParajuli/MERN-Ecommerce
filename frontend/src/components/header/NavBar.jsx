import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = (props) => {
    const { onSendData, sidebar } = props;

    return (
        <div className="bg-transparent text-black text-[20px] h-14 py-6 px-16 flex justify-center items-center">
            <div className="">
                <IoSearch className="hover:cursor-pointer" />
            </div>
            <div className="logo"></div>
            <div className="flex gap-x-4 ml-auto">
                <FaRegUser className="hover:cursor-pointer" />
                <RxHamburgerMenu
                    className="hover:cursor-pointer"
                    onClick={() => {
                        onSendData(!sidebar); // Toggle sidebar visibility
                    }}
                />
            </div>
        </div>
    );
};

export default NavBar;
