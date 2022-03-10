
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerInput: {
      padding: 25,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center'
    },
    containerList:{
        paddingHorizontal: 25,
        justifyContent: 'space-between',
        height: '100%',
    },
    TextInput:{
      borderColor:'black',
      borderBottomWidth:1,
      marginBottom: 10 ,
      width: '80%',
      height: 40,
      fontSize: 14,
      color: '#212121'
  
    },
    textList:{
        fontSize:14,
        color: '#212121',
        marginBottom: 10,
    },
    modalContainerContent: {
      width: '80%',
      height: '30%',
      elevation: 4,
      justifyContent: 'center',
      borderRadius: 4,
      marginLeft: 40,
      marginTop: 200,
      shadowOffset: {width: 1, height: 1,},
      shadowColor: 'black',
      shadowOpacity: 0.2,
    },
    modalTitle: {
      fontSize: 14,
      color:'#212121',
      padding: 25,
    },
    modalContent: {
      paddingHorizontal: 25,
    },
    modalContentText:{
      fontSize: 14,
      color: '#212121',
      fontWeight: 'bold',
      marginVertical: 10,
    },
    modalButton: {
      marginVertical: 10,
      paddingHorizontal: 25,
    },
    buttonContainer: {
      marginBottom: 12,
    },
    icon: {
      width: 32,
      height: 32,
      marginLeft: 12,
    },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    itemButtonsContainer: {
      flexDirection: 'row'
    }
  })