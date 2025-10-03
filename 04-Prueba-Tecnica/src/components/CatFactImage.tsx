type CatFactImageProps = {
    refreshFact: () => void;
    fact: string;
    imageURL: string | undefined;
}

export const CatFactImage = (props: CatFactImageProps) => {
    const {refreshFact,fact,imageURL} = props;
    return (
        <>
            <h1>App de gatos</h1>
            <button onClick={refreshFact}>Get new fact</button>
            <section>
                {fact && <p>{fact}</p>}
                {imageURL && <img src={imageURL} alt={`Image extracted using the first word obtained: ${fact}`} />} 
            </section>
        </>
    )
}