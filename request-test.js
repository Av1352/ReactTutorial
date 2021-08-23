'use strict';

const axios = require('axios');

const book = {
      'author' : 'Emily Bronte',
      'title' : 'Wuthering Heights',
      'published' : '1847-01-01'
    }

axios.post('http://localhost:3000/books',book)
.then(response =>{
    console.log(error);
})
.catch(error =>{
    console.log(error)
});