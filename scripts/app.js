$(document).ready(function() {    
    const formContainer = $("#formContainer");
    let foodSelector = $("#foodSelector");
    const recipeContainer = $("#recipeContainer");
    const iframePage = $("#iframePage")
    const link = $("#link")

    formContainer.submit('submit', onSubmit);

    function onSubmit(e) {
        e.preventDefault();
        let foodItem = foodSelector.val();
        recipeApi(foodItem);
    }

    link.click('click', onClick);

    function onClick(e) {
        e.preventDefault();
        iframePage.attr("src", `${link.val()}`)
        console.log("The button at least works")
    }

    const recipeApi = (foodItem) => {$.getJSON(`https://my-little-cors-proxy.herokuapp.com/http://www.recipepuppy.com/api/?q=${foodItem}`, function(data){
        let randomRecipePicker = Math.floor(Math.random() * data.results.length)
        let dishName = data.results[randomRecipePicker].title
        let dishIngredients = data.results[randomRecipePicker].ingredients
        let dishLink = data.results[randomRecipePicker].href
        let dishImage = data.results[randomRecipePicker].thumbnail

        recipeContainer.append(`<p>Dish Name: ${dishName}</p>`)
        recipeContainer.append(`<p>What You'll Need: ${dishIngredients}</p>`)
        recipeContainer.append(`<a href=${dishLink} class="link" id="link">Link to Recipe</a></br>`)
        recipeContainer.append(`<img src="${dishImage}" class="img-border"></br>`)
        recipeContainer.append(`<p class="line"></p></br>`)
        iframePage.attr("src",`${dishLink}`)
    });


}
});