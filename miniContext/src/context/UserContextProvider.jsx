import React from 'react'
import UserContext from "./UserContext"

//creating the userContext Provider
//send the data/component/ or the prop
//make the state for sending the data through the UserContextProvider

const UserContextProvider = ({children}) => {
    const [user,setUser] = React.useState(null)
return(

    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>

)
}




export default UserContextProvider;