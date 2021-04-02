import React, { useState} from 'react';
import { FaDev } from "react-icons/fa";
import { BiMessageRoundedCheck } from "react-icons/bi";
import { RiNotificationLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

const Navigation = (props) => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleShowMenu = () =>  {
        setShowMenu(!showMenu)
    }
    return (
        <header className="header">
            <div className="headerContainer">
                <div className="headerContainer-hamburgerMenu" onClick={props.openMenu}></div>
                <a href="https://dev.to" className="headercontainer-logo">
                    <FaDev size="3.125rem" />
                </a>
                <div className="headerContainer-searchBox">
                    <form>
                        <input type="text" placeholder="Search ..." aria-label="search" />
                    </form>
                </div>
                <div className="headerContainer-right">
                    <button>Write a Post</button>
                    <i className="hidden-search">
                        <FiSearch />
                    </i>
                    <i>
                        <BiMessageRoundedCheck />
                    </i>
                    <i>
                        <RiNotificationLine />
                    </i>

                    <span onClick={toggleShowMenu}>
                        <img src="https://picsum.photos/200" alt="Profile picture" />
                    </span>
                </div>
            </div>
            <div className={showMenu? "dropdown-menu": "dropdown-menu-close"}>
                <ul>
                    <li>
                        <a href="/profile">
                            <div className="u.name">Ibraheem</div>
                            <small className="u.name.id">@senior-ib</small>
                        </a>
                    </li>
                    <li>
                        <a href="/dashboard">Dashboard</a>
                    </li>
                    <li>
                        <a href="/post">Writing a post</a>
                    </li>
                    <li>
                        <a href="/list">Reading list</a>
                    </li>
                    <li>
                        <a href="/settings">Settings</a>
                    </li>
                    <li>
                        <a href="/signout">Signout</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navigation
