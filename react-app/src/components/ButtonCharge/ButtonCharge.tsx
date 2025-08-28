import { Fragment, ReactNode } from "react";
import styles from "./ButtonCharge.module.css"
import styled from "styled-components";

const btn = styled.button;

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
    const className = [
        textButton === 'Agregar minion' 
        ? styles.ButtonSubmitStyles
        : styles.ButtonCancelStyles
    ];
    return (
        <Fragment>
            <button type="button" 
            className={className.join(" ")}
            onClick={onClick}>
                {textButton}</button>
        </Fragment>
    );
}

export function ButtonChargeBody(props: ButtonChargeBodyProps){
    const {disabled = false, onClick} = props;
    return (
        <Fragment>
            <button type="button" 
            className={styles.ButtonChargeStyle} disabled={disabled}
            onClick={onClick}
            >Enviar</button>
        </Fragment>
    )
}

export function ButtonChargingBody(props: ButtonChargeBodyProps){
    const {disabled = false} = props;
    return (
        <Fragment>
            <button type="button" 
            className={styles.ButtonChargingStyle} 
            disabled={disabled}
            >Cargando...</button>
        </Fragment>
    )
}

export default Button;