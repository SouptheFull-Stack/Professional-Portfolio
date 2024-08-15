import errorImg from "../../public/error.jpeg"

export default function Error() {
    return (
        <div>
            <h1>Oopsie! Something went wrong</h1>
            <img src={errorImg}></img>
        </div>
    );
}