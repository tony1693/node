

document.getElementById("pokemon").addEventListener("click", () => {
    getPokemonDetails();
});

async function getPokemonDetails() {
    try {
        const pokemon_id = document.getElementById("id").value;
        const pokemon_name = document.getElementById("name").value;

        let url = "https://pokeapi.co/api/v2/pokemon";

        if (pokemon_id !== "") {
            url += `/${pokemon_id}`;
        } else {
            url += `/${pokemon_name}`;
        }

        const params = {
            headers: { "Content-type": "application/json" },
            method: "GET",
        };

        const data = await fetch(url, params);
        const result = await data.json();

        console.log(result);

        document.getElementById("nombre").innerHTML = result.name;
        document.getElementById("image").src = result.sprites.front_default;

        const abilitiesTable = document.getElementById("abilitiesTable");
        abilitiesTable.innerHTML = ""; 

        if (result.abilities && result.abilities.length > 0) {
            result.abilities.forEach((ability) => {
                const row = abilitiesTable.insertRow();
                const cell1 = row.insertCell(0);
                cell1.innerHTML = ability.ability.name;
            });
        }
    } catch (error) {
        console.log(error);
    }
}
