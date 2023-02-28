document.getElementById('btn-search').addEventListener('click', function(){
    const searchText = document.getElementById('search-input').value;
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
})

const displayMeals = meals =>{
    const mealContainer = document.getElementById('items-container');
    meals.slice(0,6).forEach(meal =>{
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('grid-card');
        // div.classList.add('grid-rows-6');        
        div.innerHTML = `
        <div class="card card-side bg-base-100 shadow-xl">
        <figure><img src="${meal.strMealThumb}" alt="Movie"/></figure>
        <div class="card-body">
          <h2 class="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
        `;
        mealContainer.appendChild(div);
    })
}