import { ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";

interface CardProps {
    children: ReactNode;
}

interface CardBodyProps {
    title?: string,
    text?: string,
    buttontext?: string
}

function Card(props: CardProps){
    const body = props.children;
    return (
    <div className="card" style={{
        width: '350px',
    }}>
    <div className="card-body">
        {body}
    </div>
    </div>
    );
}

export function CardBody(props: CardBodyProps){
    const {title, text, buttontext} = props;
    return (
        <Fragment>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <a href="#" className="btn btn-primary">{buttontext}</a>
        </Fragment>
    );
}


export default Card;