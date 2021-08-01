import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import axios from 'axios';
import { Col, Row, Grid } from "react-native-easy-grid";

import PokemonInfo from "./PokemonInfo";

const ENDPOINT = "https://pokeapi.co/api/v2/pokemon";

export default function PokemonCard() {

    const [results, setResults] = useState([]);
    let count = -1;

    useEffect(() => {
        const getPokemon = async() => {
            await axios.get(ENDPOINT).then((res) => setResults(res.data.results));
        }
        getPokemon();
    }, []);

    if(results.length > 0) {
      return results.map((pokemon)=>{
        count = count +1;
        if(2*count + 2 <= 20){
          return (
            <View style={styles.container}  key={pokemon.name}>
              <Grid>
                  <Row>
                    <Col style={{ width: 200 }}>
                    <PokemonInfo ENDPOINT={ENDPOINT} pokemonName={pokemon.name} pokemonUrl= {pokemon.url} idPokemon={2*count + 1}/>
                    </Col>
                    <Col style={{ width: 200 }}>
                    <PokemonInfo ENDPOINT={ENDPOINT} pokemonName={pokemon.name} pokemonUrl= {pokemon.url} idPokemon={2*count + 2}/>
                    </Col>
                  </Row>
              </Grid>  
            </View>
          );
        }
      })
    } else {
      return <View style={styles.container}><Text>Loading...</Text></View>
    }
    };
  
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
      width: 50,
      height: 50
  }
});
  