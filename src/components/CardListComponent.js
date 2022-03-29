import React, { useState, useEffect } from 'react'
import UserComponent from './UserComponent'
import axios from 'axios'

const CardListComponent = () => {

    const [users, setUsers] = useState([])


    useEffect( () => {
    axios('https://api.github.com/users')
    .then(res => setUsers(res.data))
    }, [])



    return (
    <div>
        {users.map( (user) => {
            return(
                <div key={user.id}>
                    <UserComponent data={user}/>
                </div>
            );
        })}

    </div>
    )
}

export default CardListComponent