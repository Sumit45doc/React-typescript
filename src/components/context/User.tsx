import React, { useContext } from 'react'
import { UserContext } from './UserContext'

function User() {
    const userContext = useContext(UserContext);
    const handleLogin = () => {
        userContext.setUser({
            name: "sumit kumar sharma",
            email: 'ss8559283@gmail.com'
        })
     }
    const handleLogout = () => {
        userContext.setUser({
            name: '',
            email: ''
        })
     }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext.user?.name}</div>
            <div>User email is {userContext.user?.email} </div>
        </div>
    )
}

export default User