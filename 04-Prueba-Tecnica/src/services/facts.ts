const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

let factCat = 'lorem ipsum dolor sit amet';
let urlCat = 'unavailable to obtain cat image';

export async function getRandomFact() {
    try
    {
        const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
        const json = await res.json();
        const {fact} = json;
        factCat = fact;
    }
    catch(error)
    {
        console.error(error);
        factCat = 'error at obtaining fact cat';
    }
    return factCat;
}

export async function getFirstWordImage() {
    try{
        const firstWord = factCat.split(' ',1);
        const resImage = await fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`);
        const {url} = await resImage.json();
        urlCat = url;
    }catch(error){
        console.log(error);
        urlCat = 'Error at obtaining cat image';
    }
    return urlCat;
}