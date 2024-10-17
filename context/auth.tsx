import { router } from "expo-router"
import { ReactNode, createContext, useContext, useState } from "react"
import { initializeAuth, signInWithEmailAndPassword } from 'firebase/auth'
import firebaseApp from "../app/services/firebase"
import * as SecureStore from 'expo-secure-store'

interface IUserLogin {
    email: string
    password: string
}

interface IAuthContext {
    user: IUserLogin
    setUser: (user: IUserLogin) => void
    handleLogin: () => void
}

interface IAuthProviderProps {
    children: ReactNode
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

//FC = function component
export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {

    const [user, setUser] = useState<IUserLogin>({ email: '', password: '' })
    const handleLogin = () => {
        console.log(user)
        if (!user || user.email == '' || user.password == '') {
            alert('Digite o seu e-mail e senha!')
            return
        }

        const auth = initializeAuth(firebaseApp)
        signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential)=> {
            SecureStore.setItemAsync('token', userCredential.user?.uid || '')
            setUser(user)
            router.push('/home')
        })
    }

    return (
        <AuthContext.Provider value={{ user, setUser, handleLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    return context
}