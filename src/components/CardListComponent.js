import React, { useState, useEffect } from 'react'
import UserComponent from './UserComponent'
import axios from 'axios'

const CardListComponent = () => {

    const [users, setUsers] = useState([])


    console.log(users)

    useEffect( () => {

    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // // .then(json => console.log(json))
    // .then(json => setUsers(json))

    axios('https://jsonplaceholder.typicode.com/users')
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