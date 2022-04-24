import { Link } from "react-router-dom";

export default function Navbar() {
    return (
    <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="character">Character Search</Link> | {" "}
        <Link to="saved_characters">Saved Characters</Link>
    </nav>);
}
