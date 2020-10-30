import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/get-pokemons';
import { PokemonCard } from '../components/PokemonCard'

export function PokemonsContainer(){
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { first: 9 },
    });

    return (
        <div className="container">
            {pokemons && pokemons.map(pokemon => <PokemonCard key ={pokemon.id} pokemon={pokemon}/>)}
        </div>
    )
}

//JSON.stringify(pokemon, null, 2)
//<Pokemon pokemon={pokemon} />