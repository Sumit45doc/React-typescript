import { useState } from "react"

type UserProps = {
    name: string
    email: string
}

const User = (props: UserProps) => {
    const [user, setUser] = useState<UserProps | null>(null);

    const handleLogin = () => {
        setUser({
            name: props.name,
            email: props.email
        })
    }

    const handleLogout = () => {
        setUser(null);
    }

    return (
        <div>
            <button onClick={handleLogin} >Login</button>
            <button onClick={handleLogout}>Log out</button>
            <h2>{user?.name}</h2>
            <h2>{user?.email}</h2>
        </div>
    )
}

export default User
