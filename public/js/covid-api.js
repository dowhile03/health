var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.covid19india.org/data.json", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
