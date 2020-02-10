// This file parses the all products from the JSON data and stores them in a variable.

let productsdata = JSON.parse(`{
    "products": [
       {
         "id": "1",
         "name": "Avocado",
         "info": "Vestibulum id ligula porta felis.",
         "image": "img/avocado.jpg",
         "price": "3"
       },
       {
         "id": "2",
         "name": "Coffee Beans",
         "info": "Donec sed odio dui. Praesent commodo cursus magna.",
         "image": "img/coffee-beans.jpg",
         "price": "6"

       },
       {
         "id": "3",
         "name": "French Cheese",
         "info": "Maecenas sed diam eget risus varius blandit.",
         "image": "img/french-cheese.jpg",
         "price": "5"
       },
       {
         "id": "4",
         "name": "Lemon",
         "info": "Aenean eu leo quam. Pellentesque ornare sem.",
         "image": "img/lemon.jpg",
         "price": "1"
       },
       {
         "id": "5",
         "name": "Lettuce",
         "info": "Lorem ipsum dolor sequitur.",
         "image": "img/lettuce.jpg",
         "price": "2"
       },
       {
         "id": "6",
         "name": "Mango",
         "info": "Aenean eu leo quam. Pellentesque ornare sem.",
         "image": "img/mango.jpg",
         "price": "6"
       },
       {
         "id": "7",
         "name": "Milk",
         "info": "Donec sed odio dui. Fusce dapibus tellus.",
         "image": "img/milk.jpg",
         "price": "2"
       },
       {
         "id": "8",
         "name": "Orange Juice",
         "description": "Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
         "info": "Lorem Ipsum Dolor",
         "image": "img/orange-juice.jpg",
         "price": "2"
       },
       {
         "id": "9",
         "name": "Radishes",
         "info": "Maecenas faucibus mollis interdum.",
         "image": "img/radishes.jpg",
         "price": "3"
       }
    ]
 }`)
