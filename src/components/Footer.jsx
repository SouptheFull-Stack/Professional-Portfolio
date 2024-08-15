import Github from "../../public/github.svg";
import Linkedin from "../../public/linkedin.svg"
import Steam from "../../public/steam.svg"


export default function Footer() {
    return (
        <div className='is-flex is-flex-direction-row is-justify-content-center mt-4'>
            <a className ="img-box" href="https://github.com/SouptheFull-Stack" target="_blank"><img src={Github} alt="logo icon for github" className='mx-5'></img></a>
            <a className ="img-box" href='https://www.linkedin.com/in/mitraap/' target='_blank'><img src={Linkedin} alt="logo icon for linkedin" className='mx-5'></img></a>
            <a className ="img-box" href='https://steamcommunity.com/profiles/76561198095130761/' target='_blank'><img src={Steam} alt="logo icon for steam" className='mx-5'></img></a>
        </div>
    );
}