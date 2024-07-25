import DownloadPDF from '../components/Download'

export default function Resume() {
    return (

        
        <div className="is-flex flex-direction row">
<h2 className="is-size-2 pb-5">Technical Skills</h2>
            <div><DownloadPDF /></div>

            <div className="is-flex is-flex-direction-row is-align-content-space-evenly is-flex-desktop-only is-justify-content-center">
            <div className="container">
                <h3 className="is-size-4 pb-3">Front-end</h3>
                <ul>
                    <li className="pb-1">Html</li>
                    <li className="pb-1">CSS, BULMA, Bootstrap, Tailwind</li>
                    <li className="pb-1">Javascript</li>
                    <li className="pb-1">Web APIs</li>
                    <li className="pb-1">JSON</li>
                    <li className="pb-1">JQuery</li>
                    <li className="pb-1">Responsive design and progressive applications</li>
                    <li className="pb-1">React.js</li>
                    <li className="pb-1">Handlebars</li>
                </ul>
            </div>
            
            <div className="container has-text-right">
            <h3 className="is-size-4 pb-3">Back-end</h3>
                <ul>
                    <li className="pb-1">Node.js</li>
                    <li className="pb-1">Express.js</li>
                    <li className="pb-1">SQL, postgreSQL</li>
                    <li className="pb-1">Sequelize.js ORM</li>
                    <li className="pb-1">REST API Development</li>
                    <li className="pb-1">Computer Science and Data Structures</li>
                    <li className="pb-1">NoSQL, MongoDB</li>
                    <li className="pb-1">MVC Architecture</li>
                    <li className="pb-1">GraphQL</li>
            </ul>
            </div>
            </div>
        </div>
    )
}