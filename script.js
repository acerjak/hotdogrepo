//define variable apiInput
let apiInput = ''
//event listener for recipe API input
document.getElementById('submitAPI').addEventListener('click', event => {
    //prevent default refresh action of the browser
    event.preventDefault()
    //log value of the input
    console.log(document.getElementById('apiInput').value)
    let apiInput = document.getElementById('apiInput').value 
    fetchRecipe(apiInput) 
})
let fetchRecipe = (apiInput) => {
//fetch whatever recipes with keyword entered by the user on click ensuring submitted in lowercase due to case sensitivity
    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${document.getElementById('apiInput').value.toLowerCase()}&maxFat=25&number=10&addRecipeInformation=true&apiKey=0e31448fccc74b5790e7acc7b527f5db`)
        //convert data to string
        .then(r => r.json())
            //receive the data now called recipe
            .then(recipe => {
                //log recipe data into console
                console.log(recipe.results[0].image)
                console.log(recipe)
                createRecipe(recipe)
            })
            .catch(error =>
                console.log(error))
        }
let createRecipe = (recipe) => {
    console.log(recipe)
                //create new element for each recipe generated from search
                let recipeElem = document.createElement('div')
                //add attributes to this new element
                recipeElem.className = 'card'
                recipeElem.style = 'width: 18rem;'
                //insert this into new element
                recipeElem.innerHTML = `
                <div class="recipeCard">
                <h3>${recipe.results[0].title}</h3>
                <img 
                    src="${recipe.results[0].image}" 
                    class="recipeImg"
                    alt="recipe">
                </div>
                <div class="recipeCard">
                <h3>${recipe.results[1].title}</h3>
                <img 
                    src="${recipe.results[1].image}" 
                    class="recipeImg"
                    alt="recipe">
                </div>
                    `
                // <img 
                //     src="${recipe.results[1].image}" 
                //     class="card-img-top" 
                //     alt="${recipe.results[1].title}">
                // <img 
                //     src="${recipe.results[2].image}" 
                //     class="card-img-top" 
                //     alt="${recipe.results[2].title}">
                // <img 
                //     src="${recipe.results[3].image}" 
                //     class="card-img-top" 
                //     alt="${recipe.results[3].title}">
                // <img 
                //     src="${recipe.results[4].image}" 
                //     class="card-img-top" 
                //     alt="${recipe.results[4].title}">
                // <img 
                //     src="${recipe.results[5].image}" 
                //     class="card-img-top" 
                //     alt="${recipe.results[5].title}">
                // <img 
                //     src="${recipe.results[6].image}" 
                //     class="card-img-top" 
                //     alt="${recipe.results[6].title}">
                // <img 
                //     src="${recipe.results[7].image}" 
                //     class="card-img-top" 
                //     alt="${recipe.results[7].title}">
                // <img 
                //     src="${recipe.results[8].image}" 
                //     class="card-img-top" 
                //     alt="${recipe.results[8].title}">
                // <img 
                //     src="${recipe.results[9].image}" 
                //     class="card-img-top" 
                //     alt="${recipe.results[9].title}">
                // `
                //log this new element to ensure correctly dynamically made 
                console.log(recipeElem) 
                document.getElementById('recipeDiv').append(recipeElem)
                document.getElementById('apiInput').value = ''
}
