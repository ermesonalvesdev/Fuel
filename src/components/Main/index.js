import { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default class ModalView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../../img/gas.png')} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 250,
        height: 250,
        marginTop: 45
    },
})