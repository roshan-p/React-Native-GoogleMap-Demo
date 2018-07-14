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
const boxWidth = Math.round(dimensions.width / 1.3);
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
        width: boxWidth,
        height: boxHeight,
        marginBottom: boxPosition,
    },
    pinText: {
        textAlign: 'center',
        margin: 5,
        color: 'black',
        width: boxWidth,
        height: boxHeight,
        marginTop: marginHeight,
    },

});
RADIUS = 500;
export default class GMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 13.727833,
                longitude: 100.522568,
                latitudeDelta: 0.030,
                longitudeDelta: 0.030,
            },
            markers: [

                {
                    latlng: { latitude: 13.734856, longitude: 100.581400, },
                    area: "Watthana", title: "Watthana", price: 139000, prev_price: 139800, description: "Starting from THB 139,000/SQM",

                },
                {
                    latlng: { latitude: 13.727833, longitude: 100.522568, },
                    area: "Bang rak", title: "Bang rak", price: 205000, prev_price: 205000, description: "400M From BTS Surasak Starting from THB 205,000/SQM",

                },
            ],
            buildings:[
                {
                    latlng: { latitude: 13.718336, longitude: 100.587362 },
                    area: "Watthana", title: "The lofts ekkamai", price: 139000, prev_price: 139800, description: "Starting from THB 139,000/SQM", image: require('../../../images/condo_m.png'),

                },
                {
                    latlng: { latitude: 13.723176, longitude: 100.521976 },
                    area: "Bang rak", title: "The lofts silom", price: 205000, prev_price: 205000, description: "400M From BTS Surasak Starting from THB 205,000/SQM", image: require('../../../images/condo_m.png'),

                },
            ],
            areas: [
                {
                    all_latlng: [
                        { latitude: 13.729297, longitude: 100.536489 },
                        { latitude: 13.737884, longitude: 100.517178 },
                        { latitude: 13.736855, longitude: 100.515875 },
                        { latitude: 13.733770, longitude: 100.515532 },
                        { latitude: 13.731185, longitude: 100.514588 },
                        { latitude: 13.730352, longitude: 100.513558 },
                        { latitude: 13.729518, longitude: 100.512442 },
                        { latitude: 13.721347, longitude: 100.512528 },
                        { latitude: 13.719512, longitude: 100.512098 },
                        { latitude: 13.718874, longitude: 100.514088 },
                        { latitude: 13.718011, longitude: 100.517248 },
                        { latitude: 13.719291, longitude: 100.521469 },
                        { latitude: 13.729297, longitude: 100.536489 }
                    ],
                    area_name: 'Bang rak'
                },
                {
                    all_latlng: [
                        { latitude: 13.748328, longitude: 100.550163 },
                        { latitude: 13.742825, longitude: 100.550807 },
                        { latitude: 13.741283, longitude: 100.554498 },
                        { latitude: 13.710891, longitude: 100.597376 },
                        { latitude: 13.704595, longitude: 100.601582 },
                        { latitude: 13.706471, longitude: 100.605702 },
                        { latitude: 13.707034, longitude: 100.605337 },
                        { latitude: 13.707097, longitude: 100.605187 },
                        { latitude: 13.707618, longitude: 100.605036 },
                        { latitude: 13.707743, longitude: 100.604779 },
                        { latitude: 13.708327, longitude: 100.604521 },
                        { latitude: 13.709119, longitude: 100.603942 },
                        { latitude: 13.709848, longitude: 100.603406 },
                        { latitude: 13.710390, longitude: 100.603448 },
                        { latitude: 13.710828, longitude: 100.603170 },
                        { latitude: 13.711933, longitude: 100.602633 },
                        { latitude: 13.712058, longitude: 100.602526 },
                        { latitude: 13.712037, longitude: 100.601839 },
                        { latitude: 13.712955, longitude: 100.601839 },
                        { latitude: 13.713538, longitude: 100.602290 },
                        { latitude: 13.714254, longitude: 100.605397 },
                        { latitude: 13.715338, longitude: 100.606212 },
                        { latitude: 13.716026, longitude: 100.606577 },
                        { latitude: 13.718424, longitude: 100.606040 },
                        { latitude: 13.718986, longitude: 100.606684 },
                        { latitude: 13.720070, longitude: 100.605314 },
                        { latitude: 13.720216, longitude: 100.605228 },
                        { latitude: 13.720925, longitude: 100.605786 },
                        { latitude: 13.722905, longitude: 100.605507 },
                        { latitude: 13.726720, longitude: 100.605271 },
                        { latitude: 13.730639, longitude: 100.604713 },
                        { latitude: 13.737475, longitude: 100.604783 },
                        { latitude: 13.737601, longitude: 100.604740 },
                        { latitude: 13.738184, longitude: 100.598410 },
                        { latitude: 13.738684, longitude: 100.598238 },
                        { latitude: 13.740581, longitude: 100.598689 },
                        { latitude: 13.740665, longitude: 100.598753 },
                        { latitude: 13.742968, longitude: 100.586927 },
                        { latitude: 13.745239, longitude: 100.576636 },
                        { latitude: 13.747035, longitude: 100.567119 },
                        { latitude: 13.748181, longitude: 100.561197 },
                        { latitude: 13.748434, longitude: 100.558707 },
                        { latitude: 13.748267, longitude: 100.555381 },
                        { latitude: 13.748256, longitude: 100.551254 },
                        { latitude: 13.748339, longitude: 100.550202 }
                    ],
                    area_name: 'Watthana'
                },
                // {
                //     all_latlng: [
                //         { latitude: 13.733099, longitude: 100.566004 },
                //         { latitude: 13.742645, longitude: 100.568021 },
                //         { latitude: 13.742645, longitude: 100.568451 },
                //         { latitude: 13.743271, longitude: 100.568751 },
                //         { latitude: 13.743104, longitude: 100.570038 },
                //         { latitude: 13.746397, longitude: 100.570510 },
                //         { latitude: 13.747731, longitude: 100.563344 },
                //         { latitude: 13.748315, longitude: 100.559953 },
                //         { latitude: 13.748356, longitude: 100.550169 },
                //         { latitude: 13.743021, longitude: 100.550812 },
                //         { latitude: 13.742437, longitude: 100.552915 },
                //         { latitude: 13.739185, longitude: 100.557765 },
                //         { latitude: 13.733599, longitude: 100.565661 },
                //         { latitude: 13.733224, longitude: 100.565876 },
                //         { latitude: 13.733141, longitude: 100.565876 },
                //     ],
                //     area_name: 'Khlong Toei Nuea'
                // },
                // {
                //     all_latlng: [
                //         { latitude: 13.746307, longitude: 100.570869},
                //         { latitude: 13.743013, longitude: 100.570225},
                //         { latitude: 13.743180, longitude: 100.568723},
                //         { latitude: 13.742555, longitude: 100.568466},
                //         { latitude: 13.742596, longitude: 100.567951},
                //         { latitude: 13.733133, longitude: 100.565977},
                //         { latitude: 13.724754, longitude: 100.577778},
                //         { latitude: 13.720335, longitude: 100.584344},
                //         { latitude: 13.724003, longitude: 100.584559},
                //         { latitude: 13.729090, longitude: 100.585847},
                //         { latitude: 13.728923, longitude: 100.589151},
                //         { latitude: 13.726963, longitude: 100.589087},
                //         { latitude: 13.726922, longitude: 100.589773},
                //         { latitude: 13.726692, longitude: 100.589966},
                //         { latitude: 13.726482, longitude: 100.595841},
                //         { latitude: 13.725832, longitude: 100.595841},
                //         { latitude: 13.725770, longitude: 100.595841},
                //         { latitude: 13.725716, longitude: 100.599130},
                //         { latitude: 13.726050, longitude: 100.600010},
                //         { latitude: 13.725946, longitude: 100.603336},
                //         { latitude: 13.725243, longitude: 100.603480},
                //         { latitude: 13.725306, longitude: 100.604145},
                //         { latitude: 13.724493, longitude: 100.604317},
                //         { latitude: 13.724660, longitude: 100.605304},
                //         { latitude: 13.726702, longitude: 100.605261},
                //         { latitude: 13.728516, longitude: 100.604853},
                //         { latitude: 13.733268, longitude: 100.604531},
                //         { latitude: 13.735190, longitude: 100.604501},
                //         { latitude: 13.737566, longitude: 100.604716},
                //         { latitude: 13.738191, longitude: 100.598343},
                //         { latitude: 13.740577, longitude: 100.598696},
                //         { latitude: 13.740744, longitude: 100.598588},
                //         { latitude: 13.746383, longitude: 100.570922},
                //     ],
                //     area_name: 'Khlong Tan Nuea'
                // }
            ]
        };
    }
    onRegionChange(region) {
        this.setState({ region })
    }
    fmtPrice(price) {
        var newPrice = String(price).replace(/(.)(?=(\d{3})+$)/g, '$1,')
        return newPrice
    }
    getPercentageChange(oldNumber, newNumber) {
        var decreaseValue = oldNumber - newNumber;

        return Math.round(((decreaseValue / oldNumber) * 100) * 100) / 100;
    }
    createStatus(currPrice, prevPrice) {
        let status = 'Price no change'
        if (currPrice > prevPrice) {
            status = 'Price up'
            return status + ' ' + this.getPercentageChange(currPrice, prevPrice) + '%'
        }
        else if (currPrice < prevPrice) {
            status = 'Price down'
            return status + ' ' + this.getPercentageChange(currPrice, prevPrice) + '%'
        }
        else {
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
                    {this.state.areas.map((s, i) => {
                        return (<MapView.Polyline key={i} coordinates={this.state.areas[i].all_latlng} strokeColor="#F00" strokeWidth={3} />)
                    })}


                    {this.state.markers.map((marker, i) => (

                        <MapView.Marker
                            style={{ position: 'relative' }}
                            key={i}
                            coordinate={marker.latlng}
                            title={marker.title}
                            // image={marker.image}
                            description={marker.description}
                        >
                        </MapView.Marker>
                    ))}
                    {this.state.buildings.map((building, i) => (

                        <MapView.Marker
                            style={{ position: 'relative' }}
                            key={i}
                            coordinate={building.latlng}
                            title={building.title}
                            image={building.image}
                            description={building.description}
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
                                    Current Average Price: THB {this.fmtPrice(marker.price)}/Sqm
                                    {"\n"}
                                    Previous Average Price: THB {this.fmtPrice(marker.prev_price)}/Sqm
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