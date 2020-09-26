import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    center:{
        flex:1,
        justifyContent :'center',
        alignItems: 'center',
        backgroundColor:'#faeee7',

    },
    title: { 
        fontSize:36,
        marginBottom:16,
        color: '#17706e',
    },
    button:{
        borderWidth:1, 
        height:45,
        width:"35%" ,
        alignItems:'center',
        borderRadius: 15,
        marginBottom:10, 
        alignItems: 'center',
        paddingBottom:1,
        backgroundColor:'#a6dcef',
        justifyContent: 'center',
        flexDirection: 'row'
        
    },
    buttonLable:{
        fontSize: 15
      , color:'#17706e'
    }
});