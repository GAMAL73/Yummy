let firstName= document.querySelector('.First-Name')
let ByLitter= document.querySelector('.By-litter')
let categoriesSection=document.getElementById('categories')
let detialsCategories=document.getElementById('detials-categories')
let searchLink=document.getElementById('searchLink')
let searchSection=document.getElementById('searchSection')
let homeSection=document.getElementById('homeSection')
let categoriesLink=document.getElementById('categoriesLink')
let areaLink=document.getElementById('areaLink')
let sectionArea=document.getElementById('sectionArea')
let detialsAreaSection=document.getElementById('detials-areaSection')
let sectionIngredients=document.getElementById('sectionIngredients')
let detialsIngredientsSection=document.getElementById('detials-IngredientsSection')
let IngredientsLink=document.getElementById('IngredientsLink')
let fullDitails=document.getElementById('fullDitails')


async function fetchData(){
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    displayHomeMeal(data.meals)
}

function displayHomeMeal(meals){
    let cartona = ``;
    for (let i = 0; i < meals.length; i++) {
        cartona += `
                <div class="col-md-12 col-lg-3 position-relative box-img "data-id="${meals[i].idMeal}">
                    <div class="cover position-absolute top-0 bottom-0 w-100 d-flex align-items-center">
                        <h2>${meals[i].strMeal}</h2>
                    </div>
                    <img class="w-100 rounded-3" src="${meals[i].strMealThumb}" alt="">
                </div>
                `;
    }
    document.getElementById('home-meal').innerHTML = cartona;
    document.querySelectorAll('.col-lg-3').forEach((link) => {
                link.addEventListener('click', () => {;
                    let id=link.getAttribute('data-id')
                        homeSection.classList.add('d-none')
                        fetchDetailes(id)
                        console.log(id);
                    });
                });
}

fetchData()


// serchByName


async function fetchDataByName(name) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        const data = await response.json();
        displaySerachByName(data.meals);
    }

firstName.addEventListener('keyup', function() {
        fetchDataByName(firstName.value);
    });

function displaySerachByName(meals){
    let cartona = ``;
    for (let i = 0; i < meals.length; i++) {
        cartona += `
                <div class="col-md-12 col-lg-3 position-relative box-img " data-id="${meals[i].idMeal}">
                    <div class="cover position-absolute top-0 bottom-0 w-100 d-flex align-items-center">
                        <h2>${meals[i].strMeal}</h2>
                    </div>
                    <img class="w-100 rounded-3" src="${meals[i].strMealThumb}" alt="">
                </div>
                `;
    }
    document.getElementById('SerachByName-meal').innerHTML = cartona;
    document.querySelectorAll('.col-md-12').forEach((link) => {
        link.addEventListener('click', () => {
            searchSection.classList.add('d-none')
            let id=link.getAttribute('data-id')
            fullDitails.classList.remove('d-none')
            fetchDetailes(id)
        })
    })
}


// serchByFirstLitter

async function fetchDataByFirstLitter(litter) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${litter}`);
    const data = await response.json();
    displayByFirstLitter(data.meals);
}
ByLitter.addEventListener('keyup', function() {
    fetchDataByFirstLitter(ByLitter.value);
});

function displayByFirstLitter(meals){
    let cartona = ``;
    for (let i = 0; i < meals.length; i++) {
        cartona += `
                <div class="col-md-12 col-lg-3 position-relative box-img " data-id="${meals[i].idMeal}">
                    <div class="cover position-absolute top-0 bottom-0 w-100 d-flex align-items-center">
                        <h2>${meals[i].strMeal}</h2>
                    </div>
                    <img class="w-100 rounded-3" src="${meals[i].strMealThumb}" alt="">
                </div>
                `;
    }
    document.getElementById('SerachByName-meal').innerHTML = cartona;
    document.querySelectorAll('.col-md-12').forEach((link) => {
        link.addEventListener('click', () => {
            searchSection.classList.add('d-none')
            let id=link.getAttribute('data-id')
            fullDitails.classList.remove('d-none')
            fetchDetailes(id)
            
        })
    })
}


//Category

async function fetchDataByCategory() {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    const data = await response.json();
    displayByCategory(data.categories);
}

function displayByCategory(categories) {
    let cartona = '';
        for (let i = 0; i < categories.length; i++) {
        cartona += `
            <div class="col-md-12  col-lg-3 position-relative box-img "  data-category="${categories[i].strCategory}">
                <div class="cover position-absolute top-0 bottom-0 w-100 d-flex align-items-center overflow-hidden">
                    <div class="text-center">
                        <h2 class="d-block">${categories[i].strCategory}</h2>
                        <p>${categories[i].strCategoryDescription.substring(0, 100) + '...'}</p>
                    </div>
                </div>
                <img class="w-100 rounded-3" src="${categories[i].strCategoryThumb}" alt="">
            </div>
    `;
    }
    
    document.getElementById('categories-meal').innerHTML = cartona;
    document.querySelectorAll('.col-md-12').forEach((link) => {
    link.addEventListener('click', (e) => {
        detialsCategories.classList.remove('d-none')
        categoriesSection.classList.add('d-none')
        fetchByCategorydetials(e.target.innerText)
        });
    });
}
async function fetchByCategorydetials(meal) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`);
    const data = await response.json();
    console.log(data);
    displayCategorydetials(data.meals);
}
function displayCategorydetials(meals){
    let detailsbox = '';
    for (let i = 0; i < meals.length; i++) {
        detailsbox += `
                <div class="col-md-12 col-lg-3 position-relative box-img " data-id="${meals[i].idMeal}">
                    <div class="cover position-absolute top-0 bottom-0 w-100 d-flex align-items-center">
                            <h2>${meals[i].strMeal}</h2>
                    </div>
                    <img class="w-100 rounded-3" src="${meals[i].strMealThumb}" alt="">
                </div>
        `
    }
    document.getElementById('details-meal').innerHTML = detailsbox;
    document.querySelectorAll('.col-md-12').forEach((link) => {
        link.addEventListener('click', () => {
            detialsCategories.classList.add('d-none')
            let id=link.getAttribute('data-id')
            fullDitails.classList.remove('d-none')
            fetchDetailes(id)
        })
    })
}


// Area 

async function fetchDataByArea() {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    const data = await response.json();
    displayByArea(data.meals);
}
function displayByArea(meals) {
    let area = '';
    for (let i = 0; i < meals.length; i++) {
        area += `
            <div class="col-md-3" data-area="${meals[i].strArea}">
                    <div class="rounded-2 text-center cursor-pointer">
                            <i class="fa-solid fa-house-laptop fa-4x"></i>
                            <h3>${meals[i].strArea}</</h3>
                    </div>
                </div>
        
        
        `
    }
    document.getElementById('Area-meal').innerHTML = area;
    document.querySelectorAll('.col-md-3').forEach((link) => {
        link.addEventListener('click', () => {
            sectionArea.classList.add('d-none')
            detialsAreaSection.classList.remove('d-none')
            let area=link.getAttribute('data-area')
            fetchDataByAreaDetailes(area)
            });
        });

}

async function fetchDataByAreaDetailes(area) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const data = await response.json();
    displayDataAreaDitaels(data.meals)
}
function displayDataAreaDitaels(meals){
    let cartona = ``;
    for (let i = 0; i < meals.length; i++) {
        cartona += `
                <div class="col-md-12 col-lg-3 position-relative box-img "data-id="${meals[i].idMeal}">
                    <div class="cover position-absolute top-0 bottom-0 w-100 d-flex align-items-center">
                        <h2>${meals[i].strMeal}</h2>
                    </div>
                    <img class="w-100 rounded-3" src="${meals[i].strMealThumb}" alt="">
                </div>
                `;
    }
    document.getElementById('details-Area').innerHTML = cartona;
    document.querySelectorAll('.col-md-12').forEach((link) => {
        link.addEventListener('click', () => {
            detialsAreaSection.classList.add('d-none')
            let id=link.getAttribute('data-id')
            fullDitails.classList.remove('d-none')
            fetchDetailes(id)
            
        })
    })

}




// IngredientsSection


async function fetchDataByIngredients() {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    const data = await response.json();
    displayByIngredients(data.meals);
}
function displayByIngredients(meals) {
    let Ingredients = '';
    for (let i = 0; i < 25; i++) {
        Ingredients += `
            <div class="col-md-3" data-Ingredients="${meals[i].strIngredient}">
                    <div class="rounded-2 text-center cursor-pointer">
                            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                            <h3>${meals[i].strIngredient}</</h3>
                            <p>${meals[i].strDescription.substring(0, 50)}</p>
                    </div>
                </div>
        
        `
    }
    document.getElementById('Ingredients-meal').innerHTML = Ingredients;
    document.querySelectorAll('.col-md-3').forEach((link) => {
        link.addEventListener('click', () => {
            sectionIngredients.classList.add('d-none');
            detialsIngredientsSection.classList.remove('d-none');
            let Ingredients=link.getAttribute('data-Ingredients')
            fetchDataByIngredientsDetailes(Ingredients);
            });
        });

}
fetchDataByIngredients()

async function fetchDataByIngredientsDetailes(Ingredients) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${Ingredients}`);
    const data = await response.json();
    displayDataIngredientsDitaels(data.meals)
}
function displayDataIngredientsDitaels(meals){
    let cartona = ``;
    for (let i = 0; i < meals.length; i++) {
        cartona += `
                <div class="col-md-12 col-lg-3 position-relative box-img "data-id="${meals[i].idMeal}">
                    <div class="cover position-absolute top-0 bottom-0 w-100 d-flex align-items-center">
                        <h2>${meals[i].strMeal}</h2>
                    </div>
                    <img class="w-100 rounded-3" src="${meals[i].strMealThumb}" alt="">
                </div>
                `;
    }
    document.getElementById('details-Ingredients').innerHTML = cartona;
    document.querySelectorAll('.col-md-12').forEach((link) => {
        link.addEventListener('click', () => {
            detialsIngredientsSection.classList.add('d-none')
            let id=link.getAttribute('data-id')
            fullDitails.classList.remove('d-none')
            fetchDetailes(id)
        })
    })

}





async function fetchDetailes(id) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    console.log(data);
    displayfullDitaeils(data.meals)
}
function displayfullDitaeils(meals){
    let cartona = ``
    for (let i = 0; i < meals.length; i++) {
        cartona += `
                <div class="col-md-4">
                    <img class="w-100 rounded-3" src="${meals[0].strMealThumb}" alt="">
                    <h2>${meals[0].strMeal}</h2>
                    
                </div>
                <div class="col-md-8">
                        <p>${meals[0].strInstructions}</p>
                        <h2>Instructions</h2>
                        <h3><span class="fw-bolder">Area : </span>"${meals[0].strArea}"</h3>
                        <h3><span class="fw-bolder">Category : </span>${meals[0].strCategory}</h3>
                        <h3>Recipes :</h3>
                        <ul class="list d-flex g-3 flex-wrap">
                            <li class="alert alert-info m-2 p-1">${meals[0].strIngredient1}</li><li class="alert alert-info m-2 p-1">${meals[0].strIngredient2}</li><li class="alert alert-info m-2 p-1">${meals[0].strIngredient2}</li><li class="alert alert-info m-2 p-1">${meals[0].strIngredient3}</li><li class="alert alert-info m-2 p-1">${meals[0].strIngredient4}</li><li class="alert alert-info m-2 p-1">${meals[0].strMeasure1}</li><li class="alert alert-info m-2 p-1">${meals[0].strMeasure2}</li>
                        </ul>

                        <h3>Tags :</h3>
                        <ul class="list d-flex g-3 flex-wrap">
                            ${meals[0].strTags? `<li class="alert alert-info m-2 p-1">${meals[0].strTags}</li>` : ''}
                        </ul>

                        <a target="_blank" href="https://www.bbcgoodfood.com/recipes/simple-sushi" class="btn btn-success">Source</a>
                        <a target="_blank" href="${meals[0].strYoutube}" class="btn btn-danger">Youtube</a>
                </div>
        `
        }
        document.getElementById('rowData').innerHTML = cartona;
}










$('#boxIcon').on('click', function(){
    let left=$("#sideBox").css('left')
    let width = $('#boxLink').width();
    if(left=='0px'){
        $('#sideBox').animate({ left: -width-50 }, 1000)
        $('.list-unstyled').toggleClass('active',200)
    }else{
        $('#sideBox').animate({ left: 0 }, 1000);
        $('.list-unstyled').toggleClass('active',200)
    }
})


searchLink.addEventListener('click',function(){
    homeSection.classList.add('d-none')
    categoriesSection.classList.add('d-none')
    sectionArea.classList.add('d-none')
    detialsAreaSection.classList.add('d-none')
    detialsCategories.classList.add('d-none')
    sectionIngredients.classList.add('d-none')
    detialsIngredientsSection.classList.add('d-none');
    searchSection.classList.remove('d-none')
    detialsAreaSection.classList.add('d-none')
    fullDitails.classList.add('d-none')
})
categoriesLink.addEventListener('click',function(){
    categoriesSection.classList.remove('d-none')
    homeSection.classList.add('d-none')
    searchSection.classList.add('d-none')
    sectionArea.classList.add('d-none')
    detialsAreaSection.classList.add('d-none')
    sectionIngredients.classList.add('d-none')
    detialsIngredientsSection.classList.add('d-none');
    detialsAreaSection.classList.add('d-none')
    fullDitails.classList.add('d-none')
    fetchDataByCategory()
})

areaLink.addEventListener('click',function(){
    homeSection.classList.add('d-none')
    categoriesSection.classList.add('d-none')
    searchSection.classList.add('d-none')
    detialsCategories.classList.add('d-none')
    sectionArea.classList.remove('d-none')
    sectionIngredients.classList.add('d-none')
    detialsIngredientsSection.classList.add('d-none');
    fullDitails.classList.add('d-none')
    fetchDataByArea()
})
IngredientsLink.addEventListener('click',function(){
    homeSection.classList.add('d-none')
    categoriesSection.classList.add('d-none')
    searchSection.classList.add('d-none')
    detialsCategories.classList.add('d-none')
    sectionArea.classList.add('d-none')
    sectionIngredients.classList.remove('d-none')
    detialsIngredientsSection.classList.add('d-none');
    detialsAreaSection.classList.add('d-none')
    fullDitails.classList.add('d-none')
})
















