angular.module('restaurantRating')
    .controller("restaurantscontroller", ['restaurantService', function (control) {

        this.items = control.items
        this.addRating = control.addRating
        this.decreaseRating = control.decreaseRating
       
    }])