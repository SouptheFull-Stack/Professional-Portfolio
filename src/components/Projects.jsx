// export default function Projects(props) {
//     return (
//             <div className="grid-container">
//             {projectList.map(() => {
//                 <div className="">

//                 </div>
//             })}
                
//             </div>
//     );
// }

import React from "react";

export default function Projects({ projectList }) {
    return (
        <div className="grid-container">
            {projectList.map((project) => (
                <div key={project.id} className="project-card">
                    <img src={project.image} alt={project.name} className="project-image" />
                    <h3>{project.name}</h3>
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        View Repo
                    </a>
                </div>
            ))}
        </div>
    );
}