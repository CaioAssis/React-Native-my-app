import { Button, ButtonText } from '@/components/ui/button'
import { Text, View } from 'react-native'

export default function Login() {
    return (
        <View className='flex-1'>
            <Text>Hello World!</Text>
            <Button size="md" variant="solid" action="primary">
                <ButtonText>Testestesteste</ButtonText>
            </Button>
        </View>
    )
}