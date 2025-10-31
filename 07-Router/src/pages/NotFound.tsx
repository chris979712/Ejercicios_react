import { Link } from "../components/Link"

export function PageNotFound(){
    return (
        <>
            <div>
                <h1>Recurso no encontrado</h1>
                <p>La pagina a la que desea ingresar, no se ha encontrado</p>
                <Link to="/" text="Volver a la pantalla principal"/>
            </div>
        </>
    )
}