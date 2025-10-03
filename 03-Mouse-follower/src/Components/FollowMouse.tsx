type FollowMouseProps = {
    ChangeEnabledState: () => void;
    positionX: number;
    positionY: number;
    enabled: boolean;
}

export const FollowMouse = (props: FollowMouseProps) => {
    const {ChangeEnabledState, positionX, positionY, enabled} = props;
    return (
        <>
            <div className="bolita" style={{
                transform: `translate(${positionX}px, ${positionY}px)`
                }}/>
            <h1>Seguimiento de puntero</h1>
            <button onClick={ChangeEnabledState}>
                {enabled ? 'Desactivar' : 'Activar'} seguir puntero
            </button>
        </>
    );
}