import { useEffect, useState } from "react";
import {getFirstWordImage } from "../services/facts";

export function useCatImage({fact} : {fact: string}) {
    
    const [imageURL, setImageURL] = useState<string>();

    useEffect(() => {
        if(fact){
            getFirstWordImage().then(setImageURL);
        }
    },[fact])

    return {
        imageURL
    }
}   