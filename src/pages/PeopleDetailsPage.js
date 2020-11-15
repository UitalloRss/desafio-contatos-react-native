import React, { Component }from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class PeopleDetailsPage extends Component{
    constructor(props){
        super(props)
        this.state={
            "people": props.route.params.people,
        }
    }
    render(){
        let imagem = this.state.people.picture.medium
        return(
            <View style={styles.container}>
                <Image style={styles.foto} source={{uri: imagem}} />
                <Text style={styles.texto}>Nome: {this.state.people.name.first}</Text>
                <Text style={styles.texto}>Sobrenome: {this.state.people.name.last}</Text>
                <Text style={styles.texto}>Endereço: {this.state.people.location.street.name}, {this.state.people.location.street.number}</Text>
                <Text style={styles.texto}>Cidade: {this.state.people.location.city}</Text>
                <Text style={styles.texto}>Estado: {this.state.people.location.state}</Text>
                <Text style={styles.texto}>Email: {this.state.people.email}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingTop: 10,
        paddingLeft: 15
    },

    texto: {
        fontSize: 20,
    },

    foto:{
        alignSelf: 'center',
        width: 100,
        height: 100,
        borderRadius: 25,
    },
})



