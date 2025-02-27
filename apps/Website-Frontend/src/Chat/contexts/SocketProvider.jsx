import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'
import { useUser } from './UserProvider'
import useLocalStorage from '../hooks/useLocalStorage'
import { isEmpty } from 'lodash'
import { useRecoilState } from 'recoil'
import { authState } from '../../recoil/Authuser'

const SocketContext = React.createContext()

export function useSocket() {
    return useContext(SocketContext)
}

export function SocketProvider({ children }) {
    const [chatSocket, setChatSocket] = useState()
    const [userSocket, setUserSocket] = useState();
    const { setUser, setChatList } = useUser();
    const [token, setToken] = useLocalStorage("accessToken", "")
    const [auth, setAuth] = useRecoilState(authState);
    useEffect(() => {
        // userSocket is used for auth and login 
        // chatSocket is used for chat events
        let userSocket, chatSocket;
        console.log('hi');
        userSocket = io('http://localhost:8080/user');
        userSocket.on("connect", () => {
            if (!isEmpty(token)) {
                const user = auth.user;
                console.log('hi');
                console.log(user._id);
                chatSocket.on("connect", () => {
                    if (isEmpty(user)) return;
                    chatSocket.emit("join-room", user._id);
                    chatSocket.emit("get-chats");
                    chatSocket.on("chat-list", (chats) => {
                        console.log("chats", chats);
                        setChatList(chats);
                    })
                    chatSocket.on("new-chat", () => {
                        chatSocket.emit("get-chats");
                    })
                })
                setChatSocket(chatSocket)
                setUser(user);
                userSocket.on("auth-error", (err) => {
                    console.log(err);
                    window.localStorage.removeItem("token");
                })
            }
        })
        setUserSocket(userSocket);
        return () => {
            chatSocket?.close()
            userSocket?.close();
        }
    }, [])

    return (
        <SocketContext.Provider value={{ chatSocket, userSocket }}>
            {children}
        </SocketContext.Provider>
    )
}
