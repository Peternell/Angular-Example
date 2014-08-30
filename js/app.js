// This is a controller //

(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gems; 
  });

  var gems = [

  { name: 'Product 1',
    price: 29.95,
    description: 'this is the description for product 1',
    canPurchase: true,
    images: [
      {
        full: './img/p1.jpg',
        thumb: './img/p1.jpg',
      },
      {
        full: './img/p1.jpg',
        thumb: './img/p1.jpg',        
      },
      { 
        full: './img/p1.jpg',
        thumb: './img/p1.jpg', 
      },
    ],
  },

  { name: 'Product 2',
    price: 99.95,
    description: 'this is the description for product 2',
    canPurchase: false,
    images: [
      {
        full: './img/p2.jpeg',
        thumb: './img/p2.jpeg',
      },

      {
        full: './img/p2.jpeg',
        thumb: './img/p2.jpeg',        
      },
      
      { 
        full: './img/p2.jpeg',
        thumb: './img/p2.jpeg', 
      },
    ]
  },

  { name: 'Product 3',
    price: 9.95,
    description: 'this is the description for product 3',
    canPurchase: true,
    images: [
      
      {
        full: './img/p3.png',
        thumb: './img/p3.png',
      },

      {
        full: './img/p3.png',
        thumb: './img/p3.png',        
      },
      
      { 
        full: './img/p3.png',
        thumb: './img/p3.png', 
      }, 
    ]
  }
];

})();
