import React, { Component } from 'react';
import { Dimensions, View, Text, Picker, StyleSheet } from 'react-native'
import GMap from './GMap';

const dimensions = Dimensions.get('window');
const fullHeight = Math.round(dimensions.width * 9 / 16);
const fullWidth = dimensions.width;
const styles = StyleSheet.create({
    text: {
        fontSize: 70,
        alignSelf: 'center',
        color: 'red'
    },
    box_center: {
        ...StyleSheet.absoluteFillObject,

        alignItems: 'center',
    },
})
class PickerGG extends Component {
    state = {
        latlng: {
            latitude: 13.727833,
            longitude: 100.522568,
            latitudeDelta: 0.030,
            longitudeDelta: 0.030,
        },
        condo: '0', markers: [

            {
                latlng: {
                    latitude: 13.727833,
                    longitude: 100.522568,
                    latitudeDelta: 0.030,
                    longitudeDelta: 0.030,
                }, title: 'Bang rak',
                price: '178000'
            },
            {
                latlng: {
                    latitude: 13.734856,
                    longitude: 100.581400,
                    latitudeDelta: 0.080,
                    longitudeDelta: 0.080
                }, title: 'Watthana',
                price: '139000'
            },
            // {
            //     latlng: {
            //         latitude: 13.723176,
            //         longitude: 100.521976,
            //         latitudeDelta: 0.030,
            //         longitudeDelta: 0.030
            //     }, title: 'SILOM',
            //     price: '205000'

            // },
        ],
    }
    updateCondo = (condo) => {
        this.setState({ condo: condo })
    }
    onChangeFunction = (newState) => {
        var obj = this.state.markers[newState];


        this.setState(
            {
                condo: newState,
                latlng: obj.latlng

            }
        )
    }
    render() {
        return (
            <View style={styles.box_center}>
                <View>

                    <Picker selectedValue={this.state.condo}
                        onValueChange={(value) => this.onChangeFunction(value)}
                        style={{ height: 50, width: (fullWidth - (fullWidth * 30 / 100)) }}
                        textStyle={{ fontSize: 12, color: 'yellow' }}
                    >
                        {this.state.markers.map((s, i) => {
                            return (<Picker.Item label={this.state.markers[i].title} value={i} key={i} />)
                        })}
                    </Picker>



                </View>
                <GMap region={this.state.latlng} />
            </View>

        )
    }
}
export default PickerGG