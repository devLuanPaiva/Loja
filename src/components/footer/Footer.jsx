import React from "react";
import "./Footer.css"
import {FaLinkedinIn, FaGoogle,FaGithubAlt} from "react-icons/fa"
import { IoHeartSharp } from "react-icons/io5";
const Footer = () => {
    return(

        <React.Fragment>
            <footer>
                <span>
                    Desenvolvido com <i>
                        <IoHeartSharp />
                    </i> por <strong>dev <span className='text'>L</span>uan</strong>
                </span>
                <div className="redes">
                    <a href="https://www.linkedin.com/in/luan-alves-tech/"><FaLinkedinIn className="iconColor" /></a>
                    <a href="mailto:devluanpaiva@gmail.com"><FaGoogle className="iconColor" /></a>
                    <a href="https://github.com/Luan029"><FaGithubAlt className="iconColor" /></a>
                </div>
            </footer>
        </React.Fragment>
    )
}
export default Footer