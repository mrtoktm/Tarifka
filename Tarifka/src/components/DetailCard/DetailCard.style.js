import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'darkgray',
        borderColor:'black',
        borderWidth:2,
        margin: 8,
        padding: 6,
        alignItems: 'flex-start',
    },
    image:{
        width: 400,
        minHeight: 200,
        borderRadius: 10,
        position: 'relative',
    },
    text:{
        color: "#A62C2C",
        fontWeight:'bold',
        fontSize: 22,
        paddingLeft: 2,
    },
    area:{
        color: "#A62C2C",
        paddingLeft: 2,
        fontWeight: 'bold',
        fontSize: 17,
    },
    desc:{
        fontSize: 16,
        padding: 10,
        textAlign:'justify',
    },
    button:{
        width: 360,
        height: 50,
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center',
        margin: 20,
        backgroundColor: 'orange',
        borderRadius: 10,
    },
    button_text:{
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
