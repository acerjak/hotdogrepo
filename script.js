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
    fetch(`https://api.edamam.com/search?q=${document.getElementById('apiInput').value.toLowerCase()}&app_id=e2ecf8e3&app_key=355f5f8ebcbf253ab525a04461e9309b&from=0&to=9&calories=591-722`)
        //convert data to string
        .then(r => r.json())
            //receive the data now called recipe
            .then(recipe => {
                //log recipe data into console
                console.log(recipe)
                //confirm the structure for data
                console.log(recipe.hits[0].recipe.image)
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
                <h3>${recipe.hits[0].recipe.label}</h3>
                <img 
                    src="${recipe.hits[0].recipe.image}" 
                    class="recipeImg"
                    alt="recipe">
                <p class="ingredients">
                ${recipe.hits[0].recipe.ingredientLines[0] ? recipe.hits[0].recipe.ingredientLines[0] : ''}
                <br>${recipe.hits[0].recipe.ingredientLines[1] ? recipe.hits[0].recipe.ingredientLines[1] : ''}
                <br>${recipe.hits[0].recipe.ingredientLines[2] ? recipe.hits[0].recipe.ingredientLines[2] : ''}
                <br>${recipe.hits[0].recipe.ingredientLines[3] ? recipe.hits[0].recipe.ingredientLines[3] : ''}
                <br>${recipe.hits[0].recipe.ingredientLines[4] ? recipe.hits[0].recipe.ingredientLines[4] : ''}
                <br>${recipe.hits[0].recipe.ingredientLines[5] ? recipe.hits[0].recipe.ingredientLines[5] : ''}
                <br>${recipe.hits[0].recipe.ingredientLines[6] ? recipe.hits[0].recipe.ingredientLines[6] : ''}
                <br>${recipe.hits[0].recipe.ingredientLines[7] ? recipe.hits[0].recipe.ingredientLines[7] : ''}
                <br>${recipe.hits[0].recipe.ingredientLines[8] ? recipe.hits[0].recipe.ingredientLines[8] : ''}
                <br>${recipe.hits[0].recipe.ingredientLines[9] ? recipe.hits[0].recipe.ingredientLines[9] : ''}
                <button type="button" class="recipeSummary" href="${recipe.hits[0].recipe.shareAs}">Full Recipe Here!</button>
                </p>
                </div>
                `

                // <div class="recipeCard">
                // <h3>${recipe.results[1].title}</h3>
                // <h4>${recipe.results[1].analyzedInstructions[0].steps[0] ? recipe.results[0].analyzedInstructions[0].steps[0].step : ''}
                // ${recipe.results[1].analyzedInstructions[0].steps[1] ? recipe.results[0].analyzedInstructions[0].steps[1].step : ''}
                // ${recipe.results[1].analyzedInstructions[0].steps[2] ? recipe.results[0].analyzedInstructions[0].steps[2].step : ''}
                // ${recipe.results[1].analyzedInstructions[0].steps[3] ? recipe.results[0].analyzedInstructions[0].steps[3].step : ''}
                // ${recipe.results[1].analyzedInstructions[0].steps[4] ? recipe.results[0].analyzedInstructions[0].steps[4].step : ''}
                // ${recipe.results[1].analyzedInstructions[0].steps[5] ? recipe.results[0].analyzedInstructions[0].steps[5].step : ''}
                // </h4>
                // <img 
                //     src="${recipe.results[1].image}" 
                //     class="recipeImg"
                //     alt="recipe">
                // <p class="recipeSummary">${recipe.results[1].summary}</p>
                // </div>



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
