import { Link } from 'expo-router';
import { Text, View } from 'react-native';
export default function Home() {
    return (
        <View>
            <Text>Login com sucesso!</Text>
            <Link href='/'> Voltar para Login </Link>
        </View>
    );
}
