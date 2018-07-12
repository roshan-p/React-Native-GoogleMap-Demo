import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ImageBackground
} from 'react-native';
import { PricingCard } from 'react-native-elements';
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';
const { wh, wd } = Dimensions.get('window');
const dimensions = Dimensions.get('window');
const boxHeight = Math.round(dimensions.height / 7);
const fullWidth = Math.round(dimensions.width / 1.5);
const marginHeight = Math.round(dimensions.height / 30);
var boxPosition = 50

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        marginTop: 40,
        height: wh,
        width: wd,
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        position: 'absolute',

    },
    pin: {
        backgroundColor: '#fffa',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        padding: 5,
        borderRadius: 10,
        width: fullWidth,
        height: boxHeight,
        marginBottom: boxPosition,
    },
    pinImg: {
        width: 25,
        height: 25,

    },
    pinText: {
        textAlign: 'center',
        margin: 5,
        color: 'black',
        width: fullWidth,
        height: boxHeight,
        marginTop: marginHeight,
    },

});
RADIUS = 500;
export default class GMap extends Component {
    
    constructor(props) {
        console.log(boxPosition)
        super(props);
        this.state = {
            region: {
                latitude: 13.746771,
                longitude: 100.562784,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            },
            markers: [

                {
                    latlng: { latitude: 13.746771, longitude: 100.562784 },
                    area: "ASOKE", title: "THE LOFTS ASOKE", price: 178000, prev_price: 177000, description: "Starting from THB 178,000/SQM", image: require('../../../images/condo_m.png'),
                 
                },
                {
                    latlng: { latitude: 13.718336, longitude: 100.587362 },
                    area: "EKKAMAI", title: "THE LOFTS EKKAMAI", price: 139000, prev_price: 139800, description: "Starting from THB 139,000/SQM", image: require('../../../images/condo_m.png'),
                
                },
                {
                    latlng: { latitude: 13.723176, longitude: 100.521976 },
                    area: "SILOM", title: "THE LOFTS SILOM", price: 205000, prev_price: 205000, description: "400M From BTS Surasak Starting from THB 205,000/SQM", image: require('../../../images/condo_m.png'),
               
                },
            ]
        };
    }
    onRegionChange(region) {
        this.setState({ region })
    }
    fmtPrice(price) {
        var newPrice = price.toLocaleString();
        return newPrice
    }
    getPercentageChange(oldNumber, newNumber) {
        var decreaseValue = oldNumber - newNumber;

        return Math.round(((decreaseValue / oldNumber) * 100) * 100) / 100;
    }
    createStatus(currPrice, prevPrice) {
        let status = 'Price no change'
        if(currPrice > prevPrice){
            status = 'Price up'   
        return status+' '+this.getPercentageChange(currPrice, prevPrice)+'%'
        }
        else if(currPrice < prevPrice){
            status = 'Price down'   
            return status+' '+this.getPercentageChange(currPrice, prevPrice)+'%'
        }
        else{
            return status
        }
    }
    render() {
        const { region } = this.props;

        return (


            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={
                        this.props.region
                    }
                    onRegionChange={this.onRegionChangeComplete}>
                    {/* <MapView.Circle
              center={this.state.markers[0].latlng}
              radius={500}
              strokeWidth={5} 
              fillColor="#0f0a"/> */}

                    {this.state.markers.map((marker, i) => (

                        <MapView.Marker
                            style={{ position: 'relative' }}
                            key={i}
                            coordinate={marker.latlng}
                            title={marker.title}
                            image={marker.image}
                            description={marker.description}
                        >
                        </MapView.Marker>
                    ))}
                    {this.state.markers.map((marker, i) => (

                        <MapView.Marker
                            style={{ position: 'absolute' }}
                            key={i}
                            coordinate={marker.latlng}
                        >
                            <View style={styles.pin}>

                                <Text style={styles.pinText}>
                                    Area: {marker.area}
                                    {"\n"}
                                    Current Price: THB {this.fmtPrice(marker.price)}/Sqm
                                    {"\n"}
                                    Previous Price: THB {this.fmtPrice(marker.prev_price)}/Sqm
                                    {"\n"}
                                    Status: {this.createStatus(marker.price, marker.prev_price)}
                                </Text>
                            </View>
                            
                        </MapView.Marker>
                    ))}
                </MapView>
            </View>


        );
    }
}