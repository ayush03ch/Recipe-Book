const links = document.querySelector('.nav-links')
const navToggleBtn = document.querySelector('.nav-btn')

navToggleBtn.addEventListener('click', () => {
  links.classList.toggle('show-links')
  navToggleBtn.classList.toggle('nav-btn-clicked')
})





// Login Function
function formValidate(event) {
  event.preventDefault();

  var name = document.getElementById('username').value;
  var pass = document.getElementById('password').value;

  if (name === 'admin' && pass === '123456') {
    window.location.href = 'index.html';
  }
  else {
    alert("Incorrect username or password.");
  }
}


// Search FUnctionality
var app = angular.module('recipeApp', []);

app.controller('recipeController', function($scope) {
    // source for recipes
    $scope.recipes = recipes;

    // Extract category from URL
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    //card generator function
    $scope.createCard = function(recipe){
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
            <div class="recipe-info">
                <h2>${recipe.name}</h2>
                <p>${recipe.description}</p>
            </div>
        `;
        // click event listener
        recipeCard.addEventListener('click', function() {
          $scope.showRecipeDetails(recipe);
        });
        recipeContainer.appendChild(recipeCard);
    }


    // on the explore page
    // function to display recipes
    $scope.displayRecipes = function() {
        const recipeContainer = document.getElementById("recipeContainer");
        recipeContainer.innerHTML = "";
        
        $scope.recipes.forEach(recipe => {        
          // If no category is selected
          if (!category) {    
              if (!$scope.searchQuery || recipe.name.toLowerCase().includes($scope.searchQuery.toLowerCase())) {
                  $scope.createCard(recipe);
              }
          }
          // If a category is selected
          else {
              if (recipe.category.toLowerCase() === category.toLowerCase()) {
                  // If there's no search query or the recipe matches the search query
                  if (!$scope.searchQuery || recipe.name.toLowerCase().includes($scope.searchQuery.toLowerCase())) {
                      $scope.createCard(recipe);
                  }
              }
          }
      });
    };

    // real time chaneg the cards that dsiplay based on search
    $scope.$watch('searchQuery', function() {
        $scope.displayRecipes();
    });
    // at time of page opening
    // Initial display of recipes
    $scope.displayRecipes();




    // pop-up
    // to open detail view
    $scope.showRecipeDetails = function(recipe) {
        const recipeContainer = document.getElementById("recipeContainer");
        const searchContainer = document.getElementById("searchContainer");
        recipeContainer.style.display = 'none';
        searchContainer.style.display = 'none';
        // detail page
        const popup = document.createElement('div');
        popup.classList.add('recipe-popup');
        popup.innerHTML = `
        <div class="popup-scroll">
            <div class="popup-recipe-info">
                <button class="close-popup">Back</button>
                <h2>${recipe.name}</h2>
                <div class="popup-recipe-content">
                    <div class="popup-recipe-image-container">
                        <img src="${recipe.image}" alt="${recipe.name}" class="popup-image">
                    </div>
                    <div class="popup-recipe-description">
                        <p>${recipe.description}</p>
                        <div class="extra-info">    
                            <p id="extra-heading">Preparation Time </p>
                            <p>${recipe.preparationTime}</p>
                        </div>
                        <div class="extra-info">    
                            <p id="extra-heading">Cooking Time </p>
                            <p>${recipe.cookTime}</p>
                        </div>
                        <div class="extra-info">    
                            <p id="extra-heading">Rating </p>
                            <p>${recipe.rating}</p>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="popup-recipe-instructions">
                <p id="extra-heading2"><b>Ingredients:</b>&nbsp;&nbsp;</p> 
                <div class="ingredients-container">
                    <div class="column">
                        <p>&#9679; ${recipe.detailedIngredients.slice(0, Math.ceil(recipe.detailedIngredients.length / 2)).join('<br>&#9679; ')}</p>
                    </div>
                    <div class="column">
                        <p>&#9679; ${recipe.detailedIngredients.slice(Math.ceil(recipe.detailedIngredients.length / 2)).join('<br>&#9679; ')}</p>
                    </div>
                </div>
                <p id="extra-heading2"><b>Instructions:</b></p> 
                <p>${recipe.instructions.join('<br>')}</p>
            </div>
        </div>
            `;
        //close button 
        popup.querySelector('.close-popup').addEventListener('click', function() {
            document.body.removeChild(popup);
            // show recipe grid again
            recipeContainer.style.display = 'grid';
            searchContainer.style.display = 'block';
        });
      
        // Append popup on page
        document.body.appendChild(popup);
    };

});




