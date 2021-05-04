import React from 'react'

// Hooks
import { useContext, useState } from 'react';

// custom things
import { UserContext } from './UserContext';
import Tabs from './Tabs';


const RouterSystem: React.FC = () => {
    const [user, setUser] = useState(UserContext)
    
    return (
        <UserContext.Provider value={{user, setUser}}>
            <Tabs />
        </UserContext.Provider>
    )
}

export default RouterSystem
