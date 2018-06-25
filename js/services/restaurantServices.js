angular.module("restaurantRating")
    .service("restaurantService", function () {
        this.items = [{
                name: "HAWELI",
                description: "Indian cuisine consists of a wide variety of regional and traditional cuisines native to the Indian subcontinent. Given the range of diversity in soil type, climate, culture, ethnic groups, and occupations, these cuisines vary substantially from each other and use locally available spices, herbs, vegetables, and fruits. Indian food is also heavily influenced by religion, in particular Hindu, and cultural choices and traditions",
                image: "https://hawelicanada.com/wp-content/uploads/2017/04/17554304_1462331647134701_4455368015322326859_n.jpg",
                rating: 3
            },

            {
                name: "PIZZERIA",
                description: "The most remarkable aspect of Pizzeria's pizza is that it is very tasty with intriguingly tangy, spicy and other pronounced flavors.",
                image: "http://www.angelinasofwillistonpark.com/images/home-rotation-01.jpg",
                rating: 3
            },

            {
                name: "FRENCHO",
                description: "In French medieval cuisine, banquets were common among the aristocracy. Multiple courses would be prepared, but served in a style called service en confusion, or all at once. Food was generally eaten by hand, meats being sliced off in large pieces held between the thumb and two fingers.",
                image: "https://s1.it.atcdn.net/wp-content/uploads/2013/11/French-restaurants.jpg",
                rating: 3
            },

            {
                name: "ITALIANO",
                description: "Italian cuisine has a great variety of different ingredients which are commonly used, ranging from fruits, vegetables, sauces, meats, etc. In the North of Italy, fish (such as cod, or baccalà), potatoes, rice, corn (maize), sausages, pork, and different types of cheeses are the most common ingredients. Pasta dishes with use of tomato are spread in all Italy.",
                image: "http://www.sebastiansitalian.com/wp-content/uploads/2017/08/italian-restaurant.jpg",
                rating: 3
            },

            {
                name: "CHINESE",
                description: "A Chinese restaurant is an establishment that serves Chinese cuisine outside China. Most of them are in the Cantonese restaurant style, often adapted to local preferences, as in the American Chinese cuisine and Canadian Chinese cuisine. The Chinese restaurants in the Netherlands usually combine Cantonese and Indonesian meals on their menu",
                image: "https://i.ytimg.com/vi/-ySb50qOtqk/maxresdefault.jpg",
                rating: 3
            }
        ]

        this.addRating = function (ele) {
            if (ele.rating < 5) {
                ele.rating++;

            }

        }

        this.decreaseRating = function(e) {
            if(e.rating > 0){
                e.rating--;
            }
        }




    })