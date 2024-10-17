import { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {Text} from "react-native-paper"
import { useAuth } from "../context/auth";
import { Link } from "expo-router";
import * as SecureStore from 'expo-secure-store'

interface IPost {
    id: number
    title: string
    status: string
}

export default function Home() {
    const auth = useAuth()
    const [posts, setPosts] = useState<IPost[]>([])

    const [token, setToken] = useState('')

    useEffect(() => {
        async function getToken(){
            const token = await SecureStore.getItemAsync('token')
            if(token) setToken(token)
        }

        // fetch('https://jsonplaceholder.org/posts')
        // .then(response => response.json())
        // .then(json => setPosts(json))
    },[])
//  <View style={styles.container}>
    return (
        <ScrollView >

        <Link style={{marginTop: 30}} href={'/sensors'}>Sensores</Link>
        <Link style={{marginTop: 30}} href={'/camera'}>Camera</Link>
        <Link style={{marginTop: 30}} href={'/profile'}>Perfil</Link>

        <Text>Olá {auth.user.email}!</Text>
        <Text>TOKEN: {token}</Text>
        {/* {
            posts.map((post) => (
                <Text>
                    {post.id} - {post.title}
                </Text>
            ))
        } */}

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
})