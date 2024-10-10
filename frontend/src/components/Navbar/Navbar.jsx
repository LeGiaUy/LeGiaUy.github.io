import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from 'react-icons/io';
import DarkMode from './DarkMode';

const MenuLinks = [ //MenuLinks là một mảng (array) chứa các đối tượng hoặc giá trị. 
                    // Mỗi phần tử trong mảng đại diện cho một liên kết trong menu.
    {
       id: 1,
       name: "Trang Chủ",
       link: "/#", 
    },
    {
        id: 2,
        name: "Sản Phẩm",
        link: "/#shop", 
    },
    {
        id: 3,
        name: "Giới Thiệu",
        link: "/#about",
    },
    {
        id: 4,
        name: "Liên Hệ",
        link: "/#contact",
    }
]

const DropdownLinks = [
    {
        id: 1,
        name: "Sản Phẩm Mới",
        link: "/#",
    },
    {
        id: 2,
        name: "Sản Phẩm Bán Chạy",
        link: "/#best-sellers",
    },
    {
        id: 3,
        name: "Sản Phẩm Giảm Giá",
        link: "/#sale-product",
    }
]

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full top-0 left-0 
                    dark:bg-gray-900 dark:text-white
                    duration-200 z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
            {/* Logo and Links section */}
            <div className="flex items-center gap-4">
                <a href="#"
                className="text-primary font-semibold
                            tracking-widest text-2xl 
                            uppercase sm:text-3xl">
                    SPShop
                </a>
                {/* Menu Items */}
                <div className="hidden lg:block">
                    <ul className="flex items-center gap-4">
                        {
                            MenuLinks.map((data, index) => (
                                <li key={index}>
                                   <a href={data.link}
                                   className="inline-block px-4 
                                   font-semibold text-gray-500 hover:text-black 
                                   dark:hover:text-white duration-200">{data.name}</a>
                                </li>
                            ))
                        }
                        {/* Dropdown */}
                        <li className="relative cursor-pointer group">
                            <a href="#" className="flex items-center gap-[2px] 
                                                   font-semibold text-gray-500
                                                 hover:text-black dark:hover:text-white 
                                                   py-2">Khám Phá
                                <span>
                                    <FaCaretDown className="group-hover:rotate-180 duration-300"></FaCaretDown>
                                </span> 
                                {/* Dropdown Links */}
                            </a>
                            <div className="absolute z-[9999] hidden group-hover:block
                                            w-[200px] rounded-md bg-white 
                                            shadow-md dark:bg-gray-900 p-2 ">
                                <ul className="space-y-2">
                                    {
                                        DropdownLinks.map((data, index) => (
                                            <li key={index}>
                                            <a
                                            className="text-gray-500 hover:text-black 
                                                        dark:hover:text-white duration-200 p-2 
                                                        hover:bg-primary/20 inline-block w-full 
                                                        rounded-md font-semibold" 
                                            href={data.link}>{data.name}</a>
                                            </li>  
                                        ))
                                    }
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Navbar right section */}
            <div className="flex justify-between items-center gap-4">
                {/* Search Bar section */}
                <div className="relative group hidden 
                sm:block">
                    <input 
                        type="text" 
                        placeholder="Search"
                        className="search-bar"
                        id="navbar-search"
                        name="navbar-search"
                    ></input>
                    <IoMdSearch
                    className="text-xl text-gray-600
                    group-hover:text-primary dark:text-gray-400 
                    absolute top-1/2 -translate-y-1/2 right-3 duration-200"></IoMdSearch>
                </div>
                {/* Order-button section */}
                    <button className="relative p-3">
                        <FaCartShopping className="text-xl text-gray-600
                        dark:text-gray-400"/>
                        <div className="w-4 h-4 bg-red-500
                        text-white rounded-full absolute top-0 right-0 
                        flex items-center justify-center text-xs">0</div>
                    </button>
                {/* Dark Mode section */}
                <div>
                    <DarkMode></DarkMode>
                </div>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
