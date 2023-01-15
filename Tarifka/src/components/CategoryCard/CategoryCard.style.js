import { StyleSheet } from "react-native";

export default StyleSheet.create({
    main_container:{
        backgroundColor: 'orange',
    },
    container:{
        backgroundColor:'white',
        borderColor:'black',
        borderWidth:2,
        borderRadius: 36,
        margin: 8,
        padding: 6,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{
        width: 100,
        minHeight: 100,
        borderRadius: 10,
        position: 'relative',
    },
    text:{
        fontWeight:'bold',
        fontSize: 20,
        paddingLeft: 20,
    },
});
