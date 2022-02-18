import * as React from 'react';
import { View, Text,Button } from 'react-native';

export default function HomeScreen(props) {
    React.useEffect(()=>{
        if(props.route.params?.post){
            console.log(props.route.params?.post);
        }
    },[props.route.params?.post])
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text style={{margin:10}}>Post : {props.route.params?.post}</Text>
        <Button title="Go to details" onPress={()=>props.navigation.navigate('Details', {itemId : 90,description : 'hey param here.'})}></Button>
        <Button title="Post something" onPress={()=>props.navigation.navigate('Post')}></Button>
      </View>
    );
  }