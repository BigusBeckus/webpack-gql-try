import client from './apollo/rickAndMortyClient.mjs';
import getCharacters from './queries/getCharacters.gql';
import dotenv from 'dotenv';

async function fetch() {
  try {
    const res = await client.query({
      query: getCharacters,
      fetchPolicy: 'no-cache',
    });
    const { characters } = res.data;
    console.log(characters.results);
  } catch (error) {
    console.log(error);
  }
}

dotenv.config();
fetch();
