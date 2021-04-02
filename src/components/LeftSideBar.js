import React, { useState} from 'react'

  import { IoLogoTwitter, IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoTwitch } from "react-icons/io";
  import { RiInstagramFill, RiTwitchLine } from "react-icons/ri";
  import { CgShapeHexagon } from "react-icons/cg";
  import { GrFormClose } from "react-icons/gr";
import NavContent from "./NavContent";



  const tags = [
    "react",
    "graphql",
    "nodejs",
    "sass",
    "javascript",
    "html",
    "css",
    "webdev",
    "opensource",
    "beginners",
    "python",
    "git",
    "vscode",
    "npm",
    "sql",
    "ubuntu",
    "aws",
  ];

const LeftSideBar = (props) => {
    const [more, setmore] = useState(false);
    const toggleMore = () => {
        setmore(!more)
    }
    return (
        <>
            <aside className="leftBar">
                <NavContent more={more} toggleMore={toggleMore} />
                
                <nav className="leftBar-taglist">
                    <header>
                        <h3>My Tags</h3>
                        <i>
                            <CgShapeHexagon />
                        </i>
                    </header>
                    <ul>
                        {
                            tags.map((tag, id) => {
                                return (
                                    <li key={id}>
                                        <a href="#">#{tag}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </aside>

            {props.buggerMenu && 
            <div className="hamburger">
                <div className="hamburger-content">
                    <header>
                        <h2>DEV Community</h2>
                        <button onClick={() => props.closeMenu()}>
                            <GrFormClose />    
                        </button>    
                    </header>    

                    <div className="hambuger-content-items">
                        <NavContent more={more} toggleMore={toggleMore} />

                    </div>
                </div>    
            </div>}
        </>
    )
}

export default LeftSideBar
