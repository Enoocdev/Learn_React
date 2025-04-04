import './App.css'
import { useState } from 'react'

export function TwiterFollowCard( {children, userName}) {
    const [isFollowing, setIsFollowing ] = useState(false)

    const text = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing ? ` tw-follow-asside-button --following` : `tw-follow-asside-button`;

    const handleClick = () => {
        return setIsFollowing(!isFollowing)
    }

    return ( 
        <article className='tw-follow-card'>
            <header className='tw-follow-header'>
                <img className='tw-follow-header-img' src={`https://unavatar.io/${userName}`} alt="El avatar de midudev" />
                <div className='tw-follow-header-div'>
                    <strong>{children}</strong>
                    <span>@{userName}</span>
                </div>
            </header>
            <aside className='tw-follow-asside' >
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}