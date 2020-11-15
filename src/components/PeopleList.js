import React from 'react';
import {View, StyleSheet} from 'react-native';
import PeopleListItem from "./PeopleListItem"

const PeopleList = props =>{
    const {people, onPressItem} = props
    const items = people.map(people =>{
        return(
            <PeopleListItem 
            key={people.name.first}
            people={people}
            onPressItemDetails={onPressItem} />
        )
    })
    return(
        <View style={style.container}>
            {items}
        </View>
    )
}

const style = StyleSheet.create(
    {
        container: {
            backgroundColor: '#c0c0c0'
        }
    }
)
export default PeopleList;