import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import ModalView from './src/components/Main';
import {
StyleSheet,
Text, View,
Image,
TextInput,
TouchableOpacity,
KeyboardAvoidingView,
ScrollView,
Modal
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      alcool: 0,
      gasolina: 0,
      result: 0,
      modalVisible: false,

    };
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    if (this.state.alcool == 0 || this.state.gasolina == 0) {
      alert('Campos Incopletos. Reveja!');
    } else {
      this.setState({
        modalVisible: true,
        result: this.state.alcool / this.state.gasolina
      })
    }
  }
  closeModal(visible) {
    this.setState({
      modalVisible: visible,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />

        <Image
          style={styles.logo}
          source={require('./src/img/logo.png')} />

        <Text style={styles.text}>Qual a melhor opção</Text>
        <ScrollView alwaysBounceHorizontal={false} alwaysBounceVertical={false}>

          <View style={{ marginTop: 45 }}>

            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF', marginBottom: 10 }}>
              Álcool, (preço por litro):
            </Text>

            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
              <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="2.92"
                autoCapitalize="none"
                keyboardAppearance='dark'
                keyboardType='default'
                onChangeText={(alcool) => this.setState({ alcool: alcool })} />
            </KeyboardAvoidingView>


            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF', marginBottom: 10 }}>
              Gasolina, (preço por litro):
            </Text>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
              <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="3.92"
                autoCapitalize="none"
                keyboardAppearance='dark'
                keyboardType='default'
                onChangeText={(gasolina) => this.setState({ gasolina: gasolina })} />
            </KeyboardAvoidingView>

            <TouchableOpacity style={styles.btnCalcular} onPress={this.openModal}>
              <Text style={{ fontSize: 20, color: '#FFF' }}>Calcular</Text>
            </TouchableOpacity>

            <Modal
              transparent={false}
              animationType={'slide'}
              visible={this.state.modalVisible}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#212121' }}>
                <ModalView close={() => this.closeModal(false)} />
                <Text style={styles.textModalMain}>{this.state.result < 0.7 ? 'Recomendação: "Ácool"' : ''}</Text>
                <Text style={styles.textModalMain}>{this.state.result > 0.7 ? 'Recomendação: "Gasolina"' : ''}</Text>
                <Text style={{ color: '#FFF', fontSize: 28, padding: 10, marginBottom: 10, marginTop: 10, fontWeight: 'bold' }}>Com os preços: </Text>
                <Text style={{ color: '#FFF', fontSize: 20, padding: 5 }}> Álcool: R${this.state.alcool} </Text>
                <Text style={{ color: '#FFF', fontSize: 20, padding: 5 }}> Gasolina: R${this.state.gasolina} </Text>
                <TouchableOpacity style={styles.btnClose} onPress={this.closeModal}>
                  <Text style={{ fontSize: 20, color: '#ef4130' }}>Calcular novamente</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
 
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    marginTop: 45
  },
  text: {
    padding: 10,
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    fontSize: 20,
    color: '#212121',
    marginBottom: 20
  },
  btnCalcular: {
    backgroundColor: '#ef4130',
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnClose: {
    backgroundColor: '#212121',
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ef4130',
    marginBottom: 100,
    marginTop: 10
  },
  textModalMain: {
    padding: 10,
    color: '#30ef5a',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
