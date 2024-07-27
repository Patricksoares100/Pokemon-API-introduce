
async function searchPokemon(){
    let pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    let imgName = document.getElementById("imgId");
    let titleName = document.getElementById("name");
    let abilities = document.getElementById("abilities");
    let weight = document.getElementById("weight");
    
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){
            titleName.textContent = "Please select a valid Pokemon";
            imgName.src = "";
            titleName.textContent = "Please search for a valid Pokemon name";
            throw new Error("Could not fetch resource")
        }
        const data = await response.json()

        //image
        imgSrc = data.sprites.front_default;
        imgName.src = imgSrc;
        imgName.style.display = "block";
        //name
        titleName.textContent = `Pokemon name: ${pokemonName}`;
        //abilities
        abilitiesApi = data.abilities[0].ability.name;
        abilities.textContent = `Main ability: ${abilitiesApi}`
        //weight
        weightApi = data.weight;
        weight.textContent = `Pokemon weight: ${weightApi}`;
        console.log(data)
    }catch(error){
        console.error(error)
    }
} 