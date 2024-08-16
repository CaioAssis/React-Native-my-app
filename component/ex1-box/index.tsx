import { View, StyleSheet, ImageSourcePropType, Text, Dimensions } from "react-native";
import { BoxImg } from "../styled-image";

interface BoxProps{
    image: ImageSourcePropType
    text: string
}

const styles = StyleSheet.create({
    box:{
        flexDirection:'row',
        marginBottom: 5,
        paddingBottom: 5,
        paddingTop: 5,
        alignItems: 'center',
        backgroundColor: 'lightgray',
        borderRadius: 10,
        
    },
    text:{
        fontSize: 15,
        maxWidth: Dimensions.get('window').width*0.7,
        alignItems: 'flex-start'
    },
})

export default function Ex1Box({ image, text }: BoxProps){
    return(
        <View
        style={styles.box}>
            <BoxImg
            source={image}
            />
            <Text
            style={styles.text}>
                {text}
            </Text>
        </View>
    )
}


