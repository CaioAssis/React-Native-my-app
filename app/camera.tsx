import { CameraView, useCameraPermissions } from "expo-camera";
import { View, StyleSheet } from "react-native";
import { Avatar, Button } from "react-native-paper";
import * as FileSystem from 'expo-file-system'
import { useEffect, useState } from "react";

export default function Camera(){

    const [perm, reqPerm] = useCameraPermissions()
    const [photo, setPhoto] = useState<string | null>(null)

    const photoFileName = FileSystem.documentDirectory + 'photo.jpg'

    let camera: CameraView | null

    const takePicture = async () => {
        if(perm){
            const photo = await camera?.takePictureAsync()
            //console.log(photo)
            if(photo?.uri) {
                setPhoto(photo.uri)
                await FileSystem.deleteAsync(photoFileName)
                await FileSystem.copyAsync({
                    from: photo.uri,
                    to: photoFileName
                })
            }
        }
    }

    useEffect(()=>{
        verificarFoto()
    },[])

    const verificarFoto = async () => {
        const file = await FileSystem.getInfoAsync(photoFileName)
        if(file.exists){
            setPhoto(file.uri)
        }
    }

    if(!perm) return <></>

    return (
        <View style={styles.container}>
            <CameraView facing="back"
            ref={(ref) => {camera = ref}}
            style={{width: 300, height: 300}}
            />
            <Button style={{backgroundColor: 'black', padding: 20}} onPress={takePicture}>
                Tirar foto
            </Button>
            {photo && <Avatar.Image size={250} source={{uri: photo}} />}
            <Button onPress={verificarFoto}>Verificar foto</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
})