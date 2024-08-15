import mitraImg from "../../public/portrait.jpg"

export default function About() {
    return (
        <div className="about mx-6 is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-space-evenly">
            <div>
            <figure class="image">
                <img id="portrait" className="py-1 mb-5 is-rounded" src={mitraImg}></img>
            </figure>
           
            </div>
            <p className="has-text-left px-6 py-4">
            I am a violin teacher seeking a career change to full-stack web development, bringing a diverse skillset
            from tenures in HR, the public sector, administration, and the music industry.
            After a long tenure in multiple career paths, I have found my passion in programming.
            Being close to the completion of the Full-Stack Flex Certificate with the University of Sydney, I am very
            excited to showcase my skills with my own business and personal projects.
            </p>
        </div>
    );
}