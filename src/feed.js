import React, {Component} from 'react';
import {View,Text,Button,TouchableOpacity,StyleSheet} from 'react-native';
import {styles} from './styles/styles';

class Feed extends Component {
    render(){
        console.log(this.props);
        return(
            <View style={styles.center}>
                <Text style={styles.title}>Navigation Drawer</Text>
                <TouchableOpacity
                style={styles.button}
                onPress={()=>this.props.navigation.navigate('Detail',{screenName:"My Detail Screen"})}>
                <Text style={styles.buttonLable}>Go to Feed Item</Text>
                </TouchableOpacity>
            </View>
        );
    }
}




export default Feed;