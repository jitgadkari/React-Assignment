import "./Home.css"

export default function Home(props) {
    return (
        <div>
            <div className="structure">
                <h2 className="Title">{props.title}</h2>
                <button type="button" className="message">Message</button>
            </div>
        </div>
    )
}