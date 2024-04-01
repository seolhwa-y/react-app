import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pokemon() {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        const getPokemonData = async (num) => {
            let nums = num || 20;
            const requests = [];

            for (let i = 1; i <= nums; i++) {
                const pokemonPromise = axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const speciesPromise = axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}`);

                requests.push(pokemonPromise);
                requests.push(speciesPromise);
            }

            Promise.all(requests)
                .then((responses) => {
                    const newPokemonData = [];

                    for (let i = 0; i < responses.length; i += 2) {
                        const pokemonRes = responses[i];
                        const speciesRes = responses[i + 1];

                        const koreanName = speciesRes.data.names.find(
                            (name) => name.language.name === 'ko'
                        );

                        newPokemonData.push({
                            img: pokemonRes.data.sprites.front_default,
                            korean_name: koreanName.name,
                        });
                    }

                    setPokemonData(newPokemonData);
                })
                .catch((error) => {
                    console.error('Error fetching Pokemon data:', error);
                });
        };

        // useEffect(() => {
        //     const getPokemonData = async (num) => {
        //         let nums = num || 20;
        //         const newPokemonData = [];

        //         for (let i = 1; i <= nums; i++) {
        //             const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);

        //             const speciesResponse = await axios.get(
        //                 `https://pokeapi.co/api/v2/pokemon-species/${i}`
        //             );

        //             const koreanName = speciesResponse.data.names.find(
        //                 (name) => name.language.name === 'ko'
        //             );

        //             pokemonData.push({
        //                 korean_name: koreanName.name,
        //                 img: response.data.sprites.front_default,
        //             });
        //         }

        //         setPokemonData(newPokemonData);
        //     };

        console.log(pokemonData);
        getPokemonData();
    }, []);

    return (
        <div>
            <h1>Pokemon</h1>
            <hr />
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    alignContent: 'stretch',
                    flexDirection: 'row',
                    alignItems: 'baseline',
                }}>
                {pokemonData.map((item, index) => (
                    <span
                        key={index}
                        style={{
                            textAlign: 'center',
                            width: '150px',
                        }}>
                        <p>{item.korean_name}</p>
                        <img src={item.img} alt={item.korean_name} />
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Pokemon;
