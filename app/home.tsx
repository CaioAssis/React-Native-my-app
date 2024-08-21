import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import Ex1Box from '../components/ex1-box';
export default function Home() {
    return (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <View style={{ alignSelf: 'flex-start' }}>
                <Text
                    style={{ textAlign: 'center', marginBottom: 20 }}
                >Login com sucesso!
                </Text>
                <Ex1Box
                    image={require('../assets/booster2.png')}
                    text='Isso é um teste. Isso é um teste. Isso é um teste. Isso é um teste. Isso é um teste. Isso é um teste. Isso é um teste. Isso é um teste. Isso é um teste. Isso é um teste. Isso é um teste. Isso é um teste. Isso é um teste. Isso é um teste. Isso é um teste. Isso é um teste. '
                />
                <Ex1Box
                    image={require('../assets/pepelogoo.png')}
                    text='Teste 2. Teste 2. Teste 2. Teste 2. Teste 2. Teste 2. Teste 2. Teste 2. Teste 2. Teste 2. Teste 2. Teste 2. Teste 2. '
                />
                <Ex1Box
                    image={require('../assets/icon.png')}
                    text='Teste 3.'
                />
            </View>
            <View style={{ justifyContent: 'flex-end' }}>
                <Link href='/'
                    style={{ textAlign: 'center', fontSize: 20, backgroundColor: 'green', color: 'white', borderRadius: 10 }}>
                    Voltar para Login
                </Link>
            </View>
        </View>
    );
}
