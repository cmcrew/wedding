$(document).ready(function() {
   /* Parallax*/

   var runOnce = false;
   $(window).scroll(function(){
      var scrolled = $(window).scrollTop(); //position of scroll bar
      var totalHeight = $('body').height(); //total height
      var yogagirl = $('#yogagirl1');
      
      var wine = $('.wine');
      var taxi = $('#taxi');
      var letter = $('#letter .textblock');
      
      parallaxScroll(scrolled);
      
      if(!runOnce && isScrolledIntoView(scrolled,yogagirl)) {
         console.log('yogagirl!');
         nextFrame(yogagirl);
      }
      if(isScrolledIntoView(scrolled,wine)) {
         drinkWine();
      }
      if(isScrolledIntoView(scrolled,taxi)) {
         driveTaxi(taxi);
      }
      if(isScrolledIntoView(scrolled,letter)) {
         letter.addClass('grow');
      }
   });
   
   function isScrolledIntoView(pos,elem) {
      var docViewTop = pos;
      var docViewBottom = docViewTop + $(window).height();
      
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
      
      return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
   }
   
   function nextFrame(elem) {
      console.log("run once " + runOnce);
      runOnce = true;
      var next = elem.next();
      if(!next.length) return;
      elem.delay(0).fadeTo(1000,0,function(e) {
         next.delay(0).fadeTo(500,1);
         elem = next;
         nextFrame(elem);
      });

   }
   
   function drinkWine() {
      var rect = $('.whiterect');
      rect.addClass('drink');
   }
   
   function driveTaxi(elem) {    
      elem.addClass('drive');
   }
   
   function parallaxScroll(var1){
      var scrolled = var1;
      $('#cloud1').css('top',(0+(scrolled*.25))+'px');
      $('#cloud2').css('top',(400-(scrolled*.5))+'px');
      $('#cloud3').css('top',(260-(scrolled*.25))+'px');
      $('#cloud4').css('top',(0+(scrolled*.3))+'px');
      $('#cloud6').css('top',(700-(scrolled*.25))+'px');
      $('#cloud7').css('top',(1200-(scrolled*.5))+'px');
      $('.sun').css('top',(3800+(scrolled*.25))+'px');
      $('#seagull1').css('top',(380-(scrolled*.15))+'px');
      $('#seagull2').css('top',(400-(scrolled*.45))+'px');
  //    $('#seagull3').css('top',(0-(scrolled*.25))+'px');
  //    $('#seagull4').css('top',(0-(scrolled*.25))+'px');
  //    $('#seagull5').css('top',(0-(scrolled*.25))+'px');
  //    $('#seagull6').css('top',(0-(scrolled*.25))+'px');
  //    $('#seagull7').css('top',(0-(scrolled*.25))+'px');
  //    $('#seagull8').css('top',(0-(scrolled*.25))+'px');
  //
  }
});