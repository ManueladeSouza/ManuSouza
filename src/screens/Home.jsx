import { Image, Text, View } from "react-native";
import { styles  } from "../lib/styles";

export const Paginicial = ({ navigation }) => (
    <View>
       
        <Image style={styles.imagem}source={{ uri:
        'https://wallpaperaccess.com/full/1107552.jpg'}} />
         <Text><center><h1>Bem vindos a Nike</h1></center></Text>
   
    </View>
)