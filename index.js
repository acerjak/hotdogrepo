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
                <br>${recipe.hits[0].recipe.ingredientLines[10] ? "see full recipe for more ingredients..." : ''}
                <button type="button" class="recipeSummary" href="${recipe.hits[0].recipe.shareAs}">Full Recipe Here!</button>
                </p>
                </div>
                <div class="recipeCard">
                <h3>${recipe.hits[1].recipe.label}</h3>
                <img 
                    src="${recipe.hits[1].recipe.image}" 
                    class="recipeImg"
                    alt="recipe">
                <p class="ingredients">
                ${recipe.hits[1].recipe.ingredientLines[0] ? recipe.hits[1].recipe.ingredientLines[0] : ''}
                <br>${recipe.hits[1].recipe.ingredientLines[1] ? recipe.hits[1].recipe.ingredientLines[1] : ''}
                <br>${recipe.hits[1].recipe.ingredientLines[2] ? recipe.hits[1].recipe.ingredientLines[2] : ''}
                <br>${recipe.hits[1].recipe.ingredientLines[3] ? recipe.hits[1].recipe.ingredientLines[3] : ''}
                <br>${recipe.hits[1].recipe.ingredientLines[4] ? recipe.hits[1].recipe.ingredientLines[4] : ''}
                <br>${recipe.hits[1].recipe.ingredientLines[5] ? recipe.hits[1].recipe.ingredientLines[5] : ''}
                <br>${recipe.hits[1].recipe.ingredientLines[6] ? recipe.hits[1].recipe.ingredientLines[6] : ''}
                <br>${recipe.hits[1].recipe.ingredientLines[7] ? recipe.hits[1].recipe.ingredientLines[7] : ''}
                <br>${recipe.hits[1].recipe.ingredientLines[8] ? recipe.hits[1].recipe.ingredientLines[8] : ''}
                <br>${recipe.hits[1].recipe.ingredientLines[9] ? recipe.hits[1].recipe.ingredientLines[9] : ''}
                <br>${recipe.hits[1].recipe.ingredientLines[10] ? "see full recipe for more ingredients..." : ''}
                <button type="button" class="recipeSummary" href="${recipe.hits[1].recipe.shareAs}">Full Recipe Here!</button>
                </p>
                </div>
                <div class="recipeCard">
                <h3>${recipe.hits[2].recipe.label}</h3>
                <img 
                    src="${recipe.hits[2].recipe.image}" 
                    class="recipeImg"
                    alt="recipe">
                <p class="ingredients">
                ${recipe.hits[2].recipe.ingredientLines[0] ? recipe.hits[2].recipe.ingredientLines[0] : ''}
                <br>${recipe.hits[2].recipe.ingredientLines[1] ? recipe.hits[2].recipe.ingredientLines[1] : ''}
                <br>${recipe.hits[2].recipe.ingredientLines[2] ? recipe.hits[2].recipe.ingredientLines[2] : ''}
                <br>${recipe.hits[2].recipe.ingredientLines[3] ? recipe.hits[2].recipe.ingredientLines[3] : ''}
                <br>${recipe.hits[2].recipe.ingredientLines[4] ? recipe.hits[2].recipe.ingredientLines[4] : ''}
                <br>${recipe.hits[2].recipe.ingredientLines[5] ? recipe.hits[2].recipe.ingredientLines[5] : ''}
                <br>${recipe.hits[2].recipe.ingredientLines[6] ? recipe.hits[2].recipe.ingredientLines[6] : ''}
                <br>${recipe.hits[2].recipe.ingredientLines[7] ? recipe.hits[2].recipe.ingredientLines[7] : ''}
                <br>${recipe.hits[2].recipe.ingredientLines[8] ? recipe.hits[2].recipe.ingredientLines[8] : ''}
                <br>${recipe.hits[2].recipe.ingredientLines[9] ? recipe.hits[2].recipe.ingredientLines[9] : ''}
                <br>${recipe.hits[2].recipe.ingredientLines[10] ? "see full recipe for more ingredients..." : ''}
                <button type="button" class="recipeSummary" href="${recipe.hits[2].recipe.shareAs}">Full Recipe Here!</button>
                </p>
                </div>
                <div class="recipeCard">
                <h3>${recipe.hits[3].recipe.label}</h3>
                <img 
                    src="${recipe.hits[3].recipe.image}" 
                    class="recipeImg"
                    alt="recipe">
                <p class="ingredients">
                ${recipe.hits[3].recipe.ingredientLines[0] ? recipe.hits[3].recipe.ingredientLines[0] : ''}
                <br>${recipe.hits[3].recipe.ingredientLines[1] ? recipe.hits[3].recipe.ingredientLines[1] : ''}
                <br>${recipe.hits[3].recipe.ingredientLines[2] ? recipe.hits[3].recipe.ingredientLines[2] : ''}
                <br>${recipe.hits[3].recipe.ingredientLines[3] ? recipe.hits[3].recipe.ingredientLines[3] : ''}
                <br>${recipe.hits[3].recipe.ingredientLines[4] ? recipe.hits[3].recipe.ingredientLines[4] : ''}
                <br>${recipe.hits[3].recipe.ingredientLines[5] ? recipe.hits[3].recipe.ingredientLines[5] : ''}
                <br>${recipe.hits[3].recipe.ingredientLines[6] ? recipe.hits[3].recipe.ingredientLines[6] : ''}
                <br>${recipe.hits[3].recipe.ingredientLines[7] ? recipe.hits[3].recipe.ingredientLines[7] : ''}
                <br>${recipe.hits[3].recipe.ingredientLines[8] ? recipe.hits[3].recipe.ingredientLines[8] : ''}
                <br>${recipe.hits[3].recipe.ingredientLines[9] ? recipe.hits[3].recipe.ingredientLines[9] : ''}
                <br>${recipe.hits[3].recipe.ingredientLines[10] ? "see full recipe for more ingredients..." : ''}
                <button type="button" class="recipeSummary" href="${recipe.hits[3].recipe.shareAs}">Full Recipe Here!</button>
                </p>
                </div>
                <div1 class="recipeCard">
                <h3>${recipe.hits[4].recipe.label}</h3>
                <img 
                    src="${recipe.hits[4].recipe.image}" 
                    class="recipeImg"
                    alt="recipe">
                <p class="ingredients">
                ${recipe.hits[4].recipe.ingredientLines[0] ? recipe.hits[4].recipe.ingredientLines[0] : ''}
                <br>${recipe.hits[4].recipe.ingredientLines[1] ? recipe.hits[4].recipe.ingredientLines[1] : ''}
                <br>${recipe.hits[4].recipe.ingredientLines[2] ? recipe.hits[4].recipe.ingredientLines[2] : ''}
                <br>${recipe.hits[4].recipe.ingredientLines[3] ? recipe.hits[4].recipe.ingredientLines[3] : ''}
                <br>${recipe.hits[4].recipe.ingredientLines[4] ? recipe.hits[4].recipe.ingredientLines[4] : ''}
                <br>${recipe.hits[4].recipe.ingredientLines[5] ? recipe.hits[4].recipe.ingredientLines[5] : ''}
                <br>${recipe.hits[4].recipe.ingredientLines[6] ? recipe.hits[4].recipe.ingredientLines[6] : ''}
                <br>${recipe.hits[4].recipe.ingredientLines[7] ? recipe.hits[4].recipe.ingredientLines[7] : ''}
                <br>${recipe.hits[4].recipe.ingredientLines[8] ? recipe.hits[4].recipe.ingredientLines[8] : ''}
                <br>${recipe.hits[4].recipe.ingredientLines[9] ? recipe.hits[4].recipe.ingredientLines[9] : ''}
                <br>${recipe.hits[4].recipe.ingredientLines[10] ? "see full recipe for more ingredients..." : ''}
                <button type="button" class="recipeSummary" href="${recipe.hits[4].recipe.shareAs}">Full Recipe Here!</button>
                </p>
                </div1
                `
                //log this new element to ensure correctly dynamically made 
                console.log(recipeElem) 
                document.getElementById('recipeDiv').append(recipeElem)
                document.getElementById('apiInput').value = ''
}
