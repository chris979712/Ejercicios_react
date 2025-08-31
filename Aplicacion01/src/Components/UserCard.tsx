import "./UserCard.Component.css";
import { useState } from "react";

type UserCardProps = {
    username?: string,
    name?: string,
    isFollowing: boolean,
    profilePhoto: string
}

export function UserCard(props: UserCardProps){
    const [isFollowing, setIsFollowing] = useState(false);
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
    const addAt = `@${props.username}`;
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing 
        ? 'tw-follower-card-button is-following'
        : 'tw-follower-card-button'
    return (
        <article className="tw-follower-card">
            <header className="tw-follower-card-header">
                <img 
                className="tw-follower-card-avatar"
                src={props.profilePhoto} alt="Imagen de foto de perfil" />
                <div className="tw-follower-card-infousername">
                    <strong
                    className="tw-follower-card-info"
                    >
                        {props.name}
                    </strong>
                    <span
                    className="tw-follower-card-infousername"
                    >
                        {addAt}
                    </span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-follower-card-text">{text}</span>
                    <span className="tw-follower-card-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}
