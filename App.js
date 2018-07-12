import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';
import PickerGG  from './src/components/google-map/PickerGG';
const styles = StyleSheet.create({
  box_center:{
    ...StyleSheet.absoluteFillObject,
   
    alignItems: 'center',
  }
});
RADIUS = 500;
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { region } = this.props;
    return (
      <View style={styles.box_center}>
       <PickerGG />
    

      </View>

    );
  }
}