//event listener for recipe API input
document.getElementById('submitAPI').addEventListener('click', event => {
    //prevent default refresh action of the browser
    event.preventDefault()
    //log value of the input
    console.log(document.getElementById('apiInput').value)
    //fetch whatever recipes with keyword entered by the user on click
    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${document.getElementById('apiInput').value}&maxFat=25&number=10&addRecipeInformation=true&apiKey=0e31448fccc74b5790e7acc7b527f5db`)
        //convert data to string
        .then(r => r.json())
            //receive the data now called recipe
            .then(recipe => {
                //log recipe data into console
                console.log(recipe)
            })
            
})