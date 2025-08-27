import { Fragment, ReactNode } from "react";


interface ButtonChargePropsChildren{
    children: ReactNode;
}

interface ButtonChargeBodyProps{
    disabled?: boolean;
    onClick?: () => void; 
}

interface ButtonAdditionSubstractionProps{
    textButton: string;
    onClick?: ()=> void;
}

function Button(props: ButtonChargePropsChildren){
    const body = props.children;
    return (
        <div className="buttonCharge" style={{
            width: '200px'
        }}>
            <div className="buttoncharge-body">
                {body}
            </div>
        </div>
    )
}

export function ButtonAdditionSubstraction(props: ButtonAdditionSubstractionProps){
    const {textButton, onClick} = props;
    return (
        <Fragment>
            <button type="button" className="btn btn-primary"
            onClick={onClick}
            style={{
                backgroundColor: textButton === 'Agregar minion' ? 'green' : 'red',
                borderBlockColor: 'black',
                height: '40px', 
                width: '140px', 
                fontSize: '0.9rem',
                whiteSpace: 'normal'
            }}>{textButton}</button>
        </Fragment>
    );
}

export function ButtonChargeBody(props: ButtonChargeBodyProps){
    const {disabled = false, onClick} = props;
    return (
        <Fragment>
            <button type="button" className="btn btn-primary" disabled={disabled}
            onClick={onClick}
            style={{
                backgroundColor: 'green',
                borderBlockColor: 'black'
            }}>Enviar</button>
        </Fragment>
    )
}

export function ButtonChargingBody(props: ButtonChargeBodyProps){
    const {disabled = false} = props;
    return (
        <Fragment>
            <button type="button" className="btn btn-secondary" disabled={disabled}
            style={{
                    backgroundColor: 'gray',
                    borderBlockColor: 'black',
                    
                }}>Cargando...</button>
        </Fragment>
    )
}

export default Button;