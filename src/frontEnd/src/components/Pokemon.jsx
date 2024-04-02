import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pokemon() {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        const getPokemonData = async (num) => {
            const newPokemonData = [];
            let nums = num || 300;

            const requests = Array.from({ length: nums }, (_, i) => i + 1).map((i) => {
                const pokemonPromise = axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const speciesPromise = axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
                return Promise.all([pokemonPromise, speciesPromise]);
            });

            // API 두개를 날려서 받아오기 때문에 모두 완료할 때 까지 기다리기 위하여 Promise.all 사용(그냥 하면 속도가 느림)
            const responses = await Promise.all(requests);

            responses.forEach(([pokemonResponse, speciesResponse]) => {
                const koreanName = speciesResponse.data.names.find(
                    (name) => name.language.name === 'ko'
                );

                // API를 통해 이름과 이미지 저장
                newPokemonData.push({
                    img: pokemonResponse.data.sprites.front_default,
                    name: koreanName.name,
                });
            });

            // 포켓몬 데이터 저장
            setPokemonData(newPokemonData);
        };

        // 포켓몬 API 시작
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
                            border: 'solid 1px lightgray',
                            borderRadius: '20px',
                            boxShadow: '4px 5px 5px 0px lightgray',
                            marginBottom: '25px',
                        }}>
                        <p>{item.name}</p>
                        <img src={item.img} alt={item.name} />
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Pokemon;
