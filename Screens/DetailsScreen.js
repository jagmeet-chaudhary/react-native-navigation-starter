import * as React from 'react';
import { View, Text,Button } from 'react-native';

export default function DetailsScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>{props.route.params.itemId}</Text>
        <Text>{props.route.params.description}</Text>
        <Button title="Go to details...again" onPress={()=>props.navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })}></Button>
        <Button title="Go back" onPress={()=>props.navigation.goBack('Back')}></Button>
        <Button title="Go Home" onPress={()=>props.navigation.popToTop()}></Button>
      </View>
    );
  }