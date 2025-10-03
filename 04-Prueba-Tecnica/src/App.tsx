import { useCatImage } from "./hooks/CatImage.ts";
import { useCatFact } from "./hooks/CatFact.ts";
import {CatFactImage} from "./components/CatFactImage.tsx";
import './App.css'


export function App() {
    const {fact,refreshFact} = useCatFact();
    const {imageURL} = useCatImage({fact: fact});

    return (
        <main>
            <CatFactImage refreshFact={refreshFact} fact={fact} imageURL={imageURL} />
        </main>
    )
} 