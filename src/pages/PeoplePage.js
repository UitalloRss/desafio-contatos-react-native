import React from 'react';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';
import PeopleList from '../components/PeopleList';
import { ScrollView } from 'react-native-gesture-handler';

export default class PeoplePage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      people: []
    }
  }

  componentDidMount(){
    axios.get('https://randomuser.me/api/?nat=br&&results=20')
    .then( response =>{ const {results} = response.data
      this.setState({ people: results })
    })
  }

  render(){
    return(
      <ScrollView style={styles.scrollView}>
        <View>
          <PeopleList people={this.state.people}
          onPressItem={(people) =>{
              this.props.navigation.navigate('Detalhes da Pessoa', {"people": people})
          }} />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#FAFAFC',
    padding: 5,
  },
})