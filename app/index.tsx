import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StyledInput from '../component/styled-input';
import StyledButton from '../component/styled-button';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StyledInput
      placeholder='Digite seu login'
      onChangeText={(texto)=> console.log(texto)}
      />
      <StyledInput
      placeholder='Digite sua senha'
      onChangeText={(texto)=> console.log(texto)}
      />
      <StyledButton 
      text='Login'
      color='green'
      onClick={()=> console.log('batata')}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
