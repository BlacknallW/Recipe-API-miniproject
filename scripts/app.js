$(document).ready(function() {    
    const formContainer = $("#formContainer");
    let foodSelector = $("#foodSelector");
    const contentContainer = $("#contentContainer")
    const recipeContainer = $("#recipeContainer")

    formContainer.submit('submit', onSubmit);

    function onSubmit(e) {
        e.preventDefault();
        let foodItem = foodSelector.val();
        console.log(foodItem);
        recipeApi(foodItem);
    }



    const recipeApi = (foodItem) => {$.getJSON(`https://my-little-cors-proxy.herokuapp.com/http://www.recipepuppy.com/api/?q=${foodItem}`, function(data){
        let randomRecipePicker = Math.floor(Math.random() * data.results.length)
        let dishName = data.results[randomRecipePicker].title
        let dishIngredients = data.results[randomRecipePicker].ingredients
        let dishLink = data.results[randomRecipePicker].href
        let dishImage = data.results[randomRecipePicker].thumbnail


        console.log(data.results.length)



        recipeContainer.append(`<p>Dish Name: ${dishName}</p>`)
        recipeContainer.append(`<p>What You'll Need: ${dishIngredients}</p>`)
        recipeContainer.append(`<a href=${dishLink} class="link">Link to Recipe</a></br>`)
        recipeContainer.append(`<img src="${dishImage}" class="img-border"></br>`)
    });
}
});