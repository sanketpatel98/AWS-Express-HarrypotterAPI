const axios = require("axios");
const { addOrUpdateCharacter } = require("./dynamo");

const seedData = async () => {
  const url = "https://hp-api.onrender.com/api/characters";
  try {
    const { data: characters } = await axios.get(url); // aliasing the output data(it comes from the specific api response api) as characters
    console.log(characters);
    const characterPromises = characters.map((character, index) =>
      addOrUpdateCharacter({ ...character, id: index + '' })
    );

    await Promise.all(characterPromises);
  } catch (error) {
    console.error(error);
    console.log("AHHHHHH");
  }
};

seedData();