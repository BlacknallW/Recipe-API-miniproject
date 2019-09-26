$(document).ready(function() {    
    const formContainer = $("#formContainer");
    let foodSelector = $("#foodSelector");
    const contentContainer = $("#contentContainer")

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



        contentContainer.append(`<p>Dish Name: ${dishName}</p>`)
        contentContainer.append(`<p>What You'll Need: ${dishIngredients}</p>`)
        contentContainer.append(`<a href=${dishLink}>Link to Recipe</a></br>`)
        contentContainer.append(`<img src="${dishImage}" class="rounded" class="img-thumbnail"></br>`)
    });
}
});