import { use } from 'react'
import './App.css'
import { TwiterFollowCard } from './TwiterFollowCard'

    const user = [
        
            {
                userName: 'rodrigoGB',
                name: 'Rodrigogo',
                isFollowing: true
            },
            {
                userName: 'Enoocdev',
                name: 'Enooc Dominguez Quiroga',
                isFollowing: true
            },
            {
                userName: 'Vxnder',
                name: 'VanderHart',
                isFollowing: true
            }
        
        ]


export function App (){
    return (
        <section className='App'>
            {

                user.map(user => {

                    const { userName , name , isFollowing } = user

                    return (
                        <TwiterFollowCard userName={userName} initialIsFollowing={isFollowing} key={userName}>
                                {name}
                            </TwiterFollowCard> 

                    )

                })

            }

        </section>


    )




}