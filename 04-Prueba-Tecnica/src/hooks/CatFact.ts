import { useState, useEffect} from "react";
import { getRandomFact } from "../services/facts";

export function useCatFact(){
    const [fact, setFact] = useState<string>('lorem ipsum cat fact whatever');

    useEffect(() => {
        getRandomFact().then(setFact);
    },[])

    const refreshFact = async () => {
        const newFact = await getRandomFact();
        setFact(newFact);
    }

    return {
        fact,
        refreshFact
    }
}