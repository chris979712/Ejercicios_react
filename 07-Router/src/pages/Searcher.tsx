import { useEffect } from "react";
import { Link } from "../components/Link";

type SearcherProps = {
    routeParams: {
        query: string,
    };
}

export default function Searcher({routeParams}: SearcherProps) {
    useEffect(()=> {
        document.title = 'Buscador en react';
        //fetching de datos
    },[]);
    return (
        <>
            <h1>Buscador</h1>
            <p>Has buscado: <strong>{routeParams.query}</strong></p>
            <Link to="/" text="Volver a página principal"></Link>
        </>
    );
}