'use client'

import { useSocket } from "./SocketManager"


export const SocketIndicator = () => {
 const {isConnected} = useSocket()
 console.log(isConnected
    ? 'Connected'
    : 'Not connected')


 return (
    <>
        {isConnected
         ? <p>Socket Connected</p>
         : <p> Socket not working</p>
        }
    </>
 )
}