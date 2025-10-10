import { useEffect, useState, useRef} from 'react';

export function useSearch() {
    const [query, setQuery] = useState('');
    const [error, setError] = useState('');
    const isFirstInput = useRef(true);

    useEffect(() => {
        if(isFirstInput.current){
            isFirstInput.current = query === '';
        }else{
            if(query === ''){
                setError('No se puede realizar una consulta a un nombre vacío')
                return;
            }
            if (query === '') {
                setError('No se puede buscar una película vacía')
                return
            }

            if (query.match(/^\d+$/)) {
                setError('No se puede buscar una película con un número')
                return
            }

            if (query.length < 3) {
                setError('La búsqueda debe tener al menos 3 caracteres')
                return
            }

            setError(' ')
        }
        
    },[query])
    return {error, query, setQuery}
}