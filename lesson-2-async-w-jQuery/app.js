/* eslint-env jquery */


    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    function addImage(images) {
        const firstImage = images.results[0];
    
        responseContainer.insertAdjacentHTML('afterbegin', `<figure>
                <img src="${firstImage.urls.small}" alt="${searchedForText}">
                <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
            </figure>`
        );
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
        $.ajax({
            url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}` ,
            headers: {
                Authorization: 'Client-ID CqYaYzRkH_BhRDw-_mHBEatH3TsAy8Lb_ORZJG2Xly4'
            }
            
        }).done(addImage);
    });







