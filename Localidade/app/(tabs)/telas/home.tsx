import { View,ImageBackground, StyleSheet, Platform, Text, TouchableOpacity, ImageComponent } from 'react-native';
import { useRouter } from 'expo-router';

export default function Localidade(){
    const router = useRouter();

    return(
        <ImageBackground source={require('./img/imagem.png')} style={styles.background}>
            </ImageBackground>
    )
}
const styles = StyleSheet.create({
    
    background:{
        flex: 1,
        width: '100%',
        height: '100%',
    },

})