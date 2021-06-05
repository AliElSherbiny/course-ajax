
      const urlBase = 'https://api.unsplash.com/search/photos?page=1&query='
      const urlKey = '&CqYaYzRkH_BhRDw-_mHBEatH3TsAy8Lb_ORZJG2Xly4'
      const asyncRequestObject = new XMLHttpRequest();

      function handleSuccess () { 
        //console.log( this.responseText ); 
        response = JSON.parse(this.responseText) ; 
        responseContainer.innerHTML = `<img src=${response.results[0].urls.small} alt="Girl in a jacket" </img>`;
        console.log( responseContainer.textContent); 
      }
      

      function handleError () { 
        console.log( 'An error occurred \uD83D\uDE1E' );
      }


    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
         url = urlBase+searchedForText;
         asyncRequestObject.open('GET', url);
         asyncRequestObject.setRequestHeader('Authorization', 'Client-ID CqYaYzRkH_BhRDw-_mHBEatH3TsAy8Lb_ORZJG2Xly4');
         asyncRequestObject.onload = handleSuccess;
         asyncRequestObject.onerror = handleError;
         asyncRequestObject.send();
    });






 

