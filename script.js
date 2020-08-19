//event listener for recipe API input
document.getElementById('submitAPI').addEventListener('click', event => {
    //prevent default refresh action of the browser
    event.preventDefault()
    //log value of the input
    console.log(document.getElementById('apiInput').value)
    //fetch whatever recipes with keyword entered by the user on click ensuring submitted in lowercase due to case sensitivity
    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${document.getElementById('apiInput').value.toLowerCase()}&maxFat=25&number=10&addRecipeInformation=true&apiKey=0e31448fccc74b5790e7acc7b527f5db`)
        //convert data to string
        .then(r => r.json())
            //receive the data now called recipe
            .then(recipe => {
                //log recipe data into console
                console.log(recipe)
                //create new element for each recipe generated from search
                let recipeElem = document.createElement('div')
                //add attributes to this new element
                recipeElem.className = 'card'
                recipeElem.style = 'width: 18rem;'
                //insert this into new element
                recipeElem.innerHTML = `
                <img 
                    src="${recipe.results.results[0].image}" 
                    class="card-img-top" 
                    alt="${recipe.results.results[0].title}">
                <img 
                    src="${recipe.results.results[1].image}" 
                    class="card-img-top" 
                    alt="${recipe.results.results[1].title}">
                <img 
                    src="${recipe.results.results[2].image}" 
                    class="card-img-top" 
                    alt="${recipe.results.results[2].title}">
                <img 
                    src="${recipe.results.results[3].image}" 
                    class="card-img-top" 
                    alt="${recipe.results.results[3].title}">
                <img 
                    src="${recipe.results.results[4].image}" 
                    class="card-img-top" 
                    alt="${recipe.results.results[4].title}">
                <img 
                    src="${recipe.results.results[5].image}" 
                    class="card-img-top" 
                    alt="${recipe.results.results[5].title}">
                <img 
                    src="${recipe.results.results[6].image}" 
                    class="card-img-top" 
                    alt="${recipe.results.results[6].title}">
                <img 
                    src="${recipe.results.results[7].image}" 
                    class="card-img-top" 
                    alt="${recipe.results.results[7].title}">
                <img 
                    src="${recipe.results.results[8].image}" 
                    class="card-img-top" 
                    alt="${recipe.results.results[8].title}">
                <img 
                    src="${recipe.results.results[9].image}" 
                    class="card-img-top" 
                    alt="${recipe.results.results[9].title}">
                `
                document.getElementById('apiInput').value = ''
                document.getElementById('recipeDiv').append(recipeElem)
            })
            .catch(e => {
                console.log(e)
                alert('Recipe not found')
                document.getElementById('apiInput').value = ''
            })
})