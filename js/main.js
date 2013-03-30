$(document).ready(function() {
   $('#glasses').click(function() {
        var wine = $('img#wine');
        console.log('wine clicked');
        //$('img#wine').css('height','100px');
        wine.addClass('drink');
   });
});