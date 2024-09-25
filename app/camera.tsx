import { CameraView, useCameraPermissions } from "expo-camera";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function Camera(){
    const [perm, reqPerm] = useCameraPermissions()
    let camera: CameraView | null
    const takePicture = async () => {
        if(perm){
            const photo = await camera?.takePictureAsync()
            console.log(photo)
        }
    }

    if(!perm) return <></>

    return (
        <View style={styles.container}>
            <CameraView facing="back"
            style={{width: 300, height: 300}}
            />
            <Button style={{backgroundColor: 'black', padding: 20}} onPress={takePicture}>
                Tirar foto
            </Button>
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