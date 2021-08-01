import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';
import { ScrollView } from "react-native";

import PokemonCard from "../components/PokemonCard";

export default function PokemonPage() {
    return(
            <View style={styles.container}> 
                <ScrollView>
                    <PokemonCard/>   
                </ScrollView>  
            </View>
    );
};
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        alignContent: 'center',
        justifyContent: 'center'
    }
});