import Projects from "../components/Projects";
import MTKTutor from "../../public/MTKTutor.png";
import EmpTrack from "../../public/EmpTrack.png";
import DNDBuild from "../../public/DNDBuild.png";
import SVGLogo from "../../public/SVGLogo.png";
import CookTube from "../../public/CookTube.png";
import TechBlog from "../../public/TechBlog.png";

const projectList = [
    {
        id: 1,
        name: "MTK Tutoring",
        image: MTKTutor, 
        repoLink: "https://github.com/KiranRoss1999/mtk-tutoring",
    },
    {   
        id: 2,
        name: "Employee Tracker CMS System",
        image: EmpTrack, 
        repoLink: "https://github.com/SouptheFull-Stack/CMS-Employee-Tracker",
    },
    {
        id: 3,
        name: "DnD Character Builder",
        image: DNDBuild, 
        repoLink: "https://github.com/SouptheFull-Stack/DND-Character-Builder-and-Database",
    },
    {
        id: 4,
        name: "An SVG Logo Generator",
        image: SVGLogo, 
        repoLink: "https://github.com/SouptheFull-Stack/A-Personal-Logo-Generator",
    },
    {
        id: 5,
        name: "CookTube: A Recipe Helper",
        image: CookTube, 
        repoLink: "https://github.com/KiranRoss1999/Recipe-Recommendation-Platform",
    },
    {
        id: 6,
        name: "Tech Blog",
        image: TechBlog, 
        repoLink: "https://github.com/SouptheFull-Stack/A-CMS-Content-Management-System-Tech-Blog",
    }
]


export default function Portfolio() {
    return (
        <Projects projectList={projectList} />
        // id={projectList.id} name={projectList.name} image={projectList.image} repoLink={projectList.repoLink}
        
    );
}