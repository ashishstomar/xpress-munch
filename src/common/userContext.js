import { createContext } from 'react'

const userContext = createContext({
    signedInUser : 'User',
});

export default userContext