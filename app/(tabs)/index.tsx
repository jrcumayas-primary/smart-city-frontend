import { Text, View, StyleSheet, Image, Dimensions } from "react-native"
import { Link } from "expo-router"

export default function Home(){
    return(
        <View style={styles.container}> 
            <Image 
                source={require("../../assets/images/phi.png")}
                style={styles.image}
            />
        </View>
    );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    text: {
        color: "#000000"
    },
    image: {
        width: width * 0.9,
        height: height * 0.5,
        resizeMode: "contain",
        marginTop: "1cm"
    },
})

