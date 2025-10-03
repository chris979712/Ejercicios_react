import { useEffect, useState} from "react";

export function FollowMouseUsability(){
    const [enabled, setEnabled] = useState(false);
    const [position, setPosition] = useState({x:0,y:0})

    useEffect(() => {
        const handleMove = (event: MouseEvent) => {
            const {clientX, clientY} = event;
            console.log('handle move',{clientX,clientY})
            setPosition({x:clientX,y:clientY})
        }
        if(enabled){
            window.addEventListener('pointermove',handleMove);
        }
        return() => {
            window.removeEventListener('pointermove', handleMove);
        };
    }, [enabled])


    const ChangeEnabledState = () => setEnabled(!enabled);

    return {
        ChangeEnabledState,
        position,
        enabled
    }
}