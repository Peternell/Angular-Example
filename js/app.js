// This is a controller //

(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gems; 

  });

  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
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

    reviews: [
      {
        stars: 5, 
        body: "Delicious!!",
        author: "Steve Peternell"
      }, 
      {
        stars: 3, 
        body: "I've had better",
        author: "Buzz Lightyear"
      }, 
      {
        stars: 1, 
        body: "Gross!!",
        author: "Katie Peternell"
      }, 
      {
        stars: 5, 
        body: "Amazing!!!!!!",
        author: "Maggie May"
      }, 
    ]
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

    reviews: [
      {
        stars: 5, 
        body: "WHOA!!",
        author: "Steve Smith"
      }, 
      {
        stars: 4, 
        body: "MMMMMMM!",
        author: "Hulk Hogan"
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

    reviews: [
      {
        stars: 5, 
        body: "OH BOY!",
        author: "Mickey Mouse"
      }, 
      {
        stars: 1, 
        body: "Meh",
        author: "Donald Duck"
      }, 
    ]
  }
];

})();
