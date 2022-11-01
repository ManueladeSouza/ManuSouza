import { Button, Text, View } from "react-native";

export const Home = ({ navigation }) => (
    <View>
        <Text>Aqui é a Home</Text>
        <Button
            title="Vamos para Sobre?"
            onPress={() => navigation.navigate("Sobre")}
        />
        <Button
            title="Vamos para Contato?"
            onPress={() => navigation.navigate("Album")}
        />
        <Button
            title="Vamos para Registro?"
            onPress={() => navigation.navigate("Notícias")}
        />
    </View>
)