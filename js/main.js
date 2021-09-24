var elList = document.querySelector('.hero-list');


for (var pokemon of pokemons){
    // Elements List
    var listItem = document.createElement('li');
    var itemNumber = document.createElement('ins');
    var itemHeading = document.createElement('h2');
    var itemImg = document.createElement('img');
    var itemType = document.createElement('ul');
    var itemHeight = document.createElement('p');
    var itemWeight = document.createElement('p');
    var itemEgg = document.createElement('p');
    var itemSpawnChance = document.createElement('p');
    var itemAwnSpawn = document.createElement('p');
    var itemSpawnTime = document.createElement('time');
    var itemWeaknesses = document.createElement('ul');
    
    // TYPE
    for (var type of pokemon.type){
        var typeItem = document.createElement('li');
        itemType.appendChild(typeItem);
    }

    //   Weaknesses
    for (var weakness of pokemon.weaknesses){
        var weaknessesItem = document.createElement('li');
        itemWeaknesses.appendChild(weaknessesItem);
    }
    
    // Set attributes
    listItem.setAttribute('class', 'col-sm-5 col-lg-3 m-3 p-3 border border-success');
    itemNumber.setAttribute('class', 'text-decoration-none text-danger');
    itemHeading.setAttribute('class', 'h5 text-success');
    itemImg.setAttribute('src', pokemon.img);
    itemImg.setAttribute('alt', pokemon.name + ' image');
    itemImg.setAttribute('width', '200');
    itemImg.setAttribute('height', '200');
    itemImg.setAttribute('class', 'rounded mx-auto d-block mb-1');
    itemType.setAttribute('class', 'list-unstyled mb-2');
    itemHeight.setAttribute('class', 'mb-2');
    itemWeight.setAttribute('class', 'mb-2');
    itemEgg.setAttribute('class', 'mb-2');
    itemSpawnChance.setAttribute('class', 'mb-2');
    itemAwnSpawn.setAttribute('class', 'mb-2');
    itemSpawnTime.setAttribute('class', 'mb-2 d-block')
    itemWeaknesses.setAttribute('class', 'list-unstyled')



    
    
    // Tetx content
    itemNumber.textContent = 'No: ' + pokemon.num;
    itemHeading.textContent = 'Name: ' + pokemon.name;
    itemImg.textContent = pokemon.img;
    itemType.textContent = 'Type: ' + pokemon.type;
    itemHeight.textContent = 'Height: ' + pokemon.height;
    itemWeight.textContent = 'Weight: ' + pokemon.weight;
    itemEgg.textContent = 'Egg: ' + pokemon.egg;
    itemSpawnChance.textContent = 'Spawn chance: ' + pokemon.spawn_chance;
    itemAwnSpawn.textContent = 'Avg spawn: ' + pokemon.avg_spawns;
    itemSpawnTime.textContent = 'Spawn time: ' + pokemon.spawn_time;
    itemWeaknesses.textContent = 'Weaknesses: ' + pokemon.weaknesses;
    
    // Appends
    elList.appendChild(listItem);
    listItem.appendChild(itemNumber);
    listItem.appendChild(itemHeading);
    listItem.appendChild(itemImg);
    listItem.appendChild(itemType);
    listItem.appendChild(itemHeight);
    listItem.appendChild(itemWeight);
    listItem.appendChild(itemEgg);
    listItem.appendChild(itemSpawnChance);
    listItem.appendChild(itemAwnSpawn);
    listItem.appendChild(itemSpawnTime);
    listItem.appendChild(itemWeaknesses);
    
    
    // console.log(itemImg)
}