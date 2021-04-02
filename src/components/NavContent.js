import React, { useState} from 'react'
import PropTypes from 'prop-types';
import { IoLogoTwitter, IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoTwitch } from "react-icons/io";
import { RiInstagramFill, RiTwitchLine } from "react-icons/ri";
import {
    FcHome,
    FcReading,
    FcTodoList,
    FcVideoCall,
    FcAbout,
    FcIdea,
    FcShop,
    FcLike,
    FcBriefcase,
    FcDisclaimer,
    FcBusinessContact,
  } from "react-icons/fc";
  import { AiFillAudio } from "react-icons/ai";
  import { FaTags, FaDev } from "react-icons/fa";

const NavContent = props => {
    
    return (
        <div>
           <nav className="leftBar-menu">
                    <ul>
                        <li>
                            <a href="/home">
                                <i>
                                    <FcHome />
                                    Home
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="/list">
                                <i>
                                    <FcReading />
                                    Reading List
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="/home">
                                <i>
                                    <FcTodoList />
                                    Home
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="/podcast">
                                <i>
                                    <AiFillAudio />
                                    Podcasts
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="/videos">
                                <i>
                                    <FcVideoCall />
                                    Videos
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="/tags">
                                <i>
                                    <FaTags />
                                    Tags
                                </i>
                            </a>
                        </li>

                        <li className={props.more? "more hidden": "more"}>
                            <i></i>
                            <a href="#" onClick={props.toggleMore}>More...</a>
                        </li>

                        <div className={props.more? "list": "list hidden"}>
                        <li>
                            <a href="/code">
                                <i>
                                    <FcAbout />
                                    Code of Conduct
                                </i>
                            </a>
                        </li> 
                        <li>
                            <a href="/FAQ">
                                <i>
                                    <FcIdea />
                                    FAQ
                                </i>
                            </a>
                        </li> 
                        <li>
                            <a href="/DEV">
                                <i>
                                    <FcShop />
                                    DEV Shop
                                </i>
                            </a>
                        </li> 
                        <li>
                            <a href="/sponsers">
                                <i>
                                    <FcLike />
                                    Sponsers
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="/about">
                                <i>
                                    <FaDev />
                                    About
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="/privacy">
                                <i>
                                    <FcBriefcase />
                                    Privacy Policy
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="/terms">
                                <i>
                                    <FcDisclaimer />
                                    Terms of use
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="/contacts">
                                <i>
                                    <FcBusinessContact />
                                    Contacts
                                </i>
                            </a>
                        </li>
                        </div>
                    </ul>
                </nav> 
                <div className={props.more? "leftBar-social": "leftBar-social hidden"}>
                   <a href="/twitter">
                        <i>
                            <IoLogoTwitter />    
                        </i>   
                    </a> 
                    <a href="/facebook">
                        <i>
                            <IoLogoFacebook />    
                        </i>   
                    </a> 
                    <a href="/github">
                        <i>
                            <IoLogoGithub />    
                        </i>   
                    </a> 
                    <a href="/instagram">
                        <i>
                            <RiInstagramFill />    
                        </i>   
                    </a> 
                    <a href="/twitch">
                        <i>
                            <IoLogoTwitch />    
                        </i>   
                    </a> 
                    
                </div>
        </div>
    )
}

// NavContent.PropTypes = {
//     more: PropTypes.bool
// }

export default NavContent
