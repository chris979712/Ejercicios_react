import "./UserCard.Component.css";

type UserCardProps = {
    username?: string,
    name?: string,
    isFollowing: boolean,
    profilePhoto: string
}

type ButtonFollow = {
    text?: string
}

export function UserCard(props: UserCardProps){
    const addAt = `@${props.username}`;
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
                {
                    props.isFollowing 
                    ? <ButtonFollow text="Dejar de seguir"/>
                    : <ButtonFollow text="Seguir"/>
                }
            </aside>
        </article>
    );
}

const ButtonFollow = (props: ButtonFollow) => {
    return (
        <button className="tw-follower-card-button">
            {props.text}
        </button>
    );
}