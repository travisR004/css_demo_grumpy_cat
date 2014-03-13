// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .




$(document).ready(function(){
  $('.explainer').tooltip()
  $('#my-affix').affix({
     offset: {
       top: 850
     , bottom: function () {
         return (this.bottom = $('.footer').outerHeight(true))
       }
     }
   })
  $('body').scrollspy({ target: '.navbar-example' })
  $('#home-nav').tooltip({
    placement: 'bottom'
  })
  var blankEmail = "<div class='alert alert-danger'> Email can't be blank </div>"
  var blankPhone = "<div class='alert alert-danger'> Phone # can't be blank </div>"
  var errors = {phone: blankPhone, email:blankEmail}
  $("#contact-form").on("submit", function(event){
    event.preventDefault();
    $(".alert").remove();
    var $inputs = $("input");
    var hasErrors = [];
    $inputs.each(function(idx, input){
      debugger
      var $parent = $(input).parent().parent();
      $parent.removeClass("has-error");
      $parent.removeClass("has-success");
      if(input.value === ""){
        $parent.addClass("has-error");
        hasErrors.push(errors[$(input).data("input")]);
      } else {
        $parent.addClass("has-success");
      }
    })
    if(hasErrors.length > 0){
      hasErrors.forEach(function(error){
        $("#errors").prepend(error)
      })
    }
  })
})
