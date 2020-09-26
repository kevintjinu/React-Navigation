import React, { Component } from 'react';
import Feed from './src/feed';
import Detail from './src/detail';

import Screen1 from './src/screens/drawer/screen1';
import Screen2 from './src/screens/drawer/screen2';
import Screen3 from './src/screens/drawer/screen3';

import Tab1 from './src/screens/tabs/Tab1';
import Tab2 from './src/screens/tabs/Tab2';
import Tab3 from './src/screens/tabs/Tab3';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

export default class App extends Component {
  
  
  render(){

    createHomeStack =()=>
  <Stack.Navigator>
    <Stack.Screen 
    name ="Feed"
    component={Feed}
    options={{
      title:"My Feed",
      headerStyle:{backgroundColor:"#a6dcef"},
      headerTintColor:'#17706e'
  }}
    />
     <Stack.Screen 
     name ="Detail" 
     component={Detail}
     options={{
      title:"Detail Screen",
      headerStyle:{backgroundColor:"#a6dcef"},
      headerTintColor:'#17706e'
     }}
     />
     <Stack.Screen
      name ="Bottom Tabs" 
      children={createBottomTabs}
      options={{
        title:"Bottom Navigation",
        headerStyle:{backgroundColor:"#a6dcef"},
        headerTintColor:'#17706e'
       }}
      />
     <Stack.Screen 
     name ="Top Tabs" 
     children={createTopTabs}
     options={{
      title:"Top Navigation",
      headerStyle:{backgroundColor:"#a6dcef"},
      headerTintColor:'#17706e'
     }}
     />

   </Stack.Navigator>

   createTopTabs =(props)=>{
     console.log(props);
return <MaterialTopTabs.Navigator>
<MaterialTopTabs.Screen 
name="Tab 1"
 component={Tab1}
 
 />
<MaterialTopTabs.Screen name="Tab 2" component={Tab2}/>
<MaterialTopTabs.Screen name="Tab 3" component={Tab3}/>
</MaterialTopTabs.Navigator>

   }

   createBottomTabs =()=>{
    return <MaterialBottomTabs.Navigator>
    <MaterialBottomTabs.Screen name="Tab 1" component={Tab1}/>
    <MaterialBottomTabs.Screen name="Tab 2" component={Tab2}/>
    <MaterialBottomTabs.Screen name="Tab 3" component={Tab3}/>
    </MaterialBottomTabs.Navigator>
    
       }

    return(
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name = "Home" children={createHomeStack}  />
          <Drawer.Screen name ="Contacts" component={Screen1}/>
          <Drawer.Screen name ="Favorites" component={Screen2}/>
          <Drawer.Screen name ="Settings" component={Screen3}/>
        </Drawer.Navigator>

      </NavigationContainer>
    );
  }
}