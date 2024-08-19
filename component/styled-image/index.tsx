import { Image, StyleSheet, Dimensions, ImageSourcePropType } from 'react-native'

interface StyledImageBoxProps{
    source: ImageSourcePropType
}
const {width, height} = Dimensions.get('window')
const size = Math.min(width, height)*0.3

const styles = StyleSheet.create({
    logo:{
        width: 50,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 10,   
    },
    box:{
        width: size,
        height: size,
    }
})

export function Logo(){
    return (
        <Image 
        style={styles.logo}
        source={require('../../assets/pepelogoo.png')}
        />
    )
}

export function BoxImg({ source }: StyledImageBoxProps){
    return(
        <Image
        style={styles.box}
        source={source}
        />
    )
}