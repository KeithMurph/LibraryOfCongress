fetch('https://www.loc.gov/')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    });
