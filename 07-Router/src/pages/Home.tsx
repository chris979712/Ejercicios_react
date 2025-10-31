import {Link} from "../components/Link"

export default function HomePage(){
    return(
        <>
            <h1>Home</h1>
            <p>Esto es una página de ejemplo para crear un React Router desde cero</p>
            <Link to='/about' text="Ir a about"></Link>
        </>
    )
}