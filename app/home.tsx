import { View, StyleSheet } from "react-native";
import {Text} from "react-native-paper"

export default function Home() {
    return (
        <View style={styles.container}>

        <Text>Olá usuário!</Text>
        </View>
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