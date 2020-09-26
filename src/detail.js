import React, {Component} from 'react';
import {View,Text,Button,TouchableOpacity} from 'react-native';
import {styles} from './styles/styles';


class Detail extends Component {

    render(){
        console.log(this.props);
        return(
            <View style={styles.center}>
                <Text style={styles.title}>{this.props.route.params.screenName}</Text>
                <TouchableOpacity
                style={styles.button}
                onPress={()=>this.props.navigation.navigate('Bottom Tabs',{name:"param 1"})}>
<Text style={styles.buttonLable}>View Bottom Tabs</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                style={styles.button}
                onPress={()=>this.props.navigation.navigate('Top Tabs',{name:"param 2"})}>
                    <Text style={styles.buttonLable}>View Top Tabs</Text>
                </TouchableOpacity>

                 <TouchableOpacity
                   style={styles.button}
                onPress={()=>this.props.navigation.navigate('Feed',{data:"Hello"})}>
                    <Text style={styles.buttonLable}>Pass Data Back</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default Detail;