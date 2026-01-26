import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaYoutube, FaInstagram} from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path: 'https://github.com/siwanthaka'},
    {icon: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/siwanthaka-savinda-de-silva-379107283/'},
    {icon: <FaYoutube/>, path: 'https://www.youtube.com/@ColdWavesStudios'},
    {icon: <FaInstagram/>, path: 'https://www.instagram.com/savinda_desilva?igsh=MTFncng2a3AybGlzbA%3D%3D&utm_source=qr'},
]

const Social = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
        {socials.map((item,index) => {
            return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        })}
    </div>;
};

export default Social;