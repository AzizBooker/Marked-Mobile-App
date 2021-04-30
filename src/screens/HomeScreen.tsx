
import React from 'react'
import { View , Text ,StatusBar, StyleSheet} from 'react-native';
import { Colors } from '../theme/Colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Alone!</Text>
      <StatusBar  />
    </View>
  );
}

const styles = StyleSheet.create({
        container: {
        flex:1,
        height: 600,
        backgroundColor: Colors.primary,


    }
})