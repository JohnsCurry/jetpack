// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require ckeditor-jquery

//$(function(){ $(document).foundation(); });
//= require turbolinks
//= require bootstrap
//= require_tree .
var ready;
ready = function(){
$('.ckeditor').ckeditor({
  // optional config
});
};
$(document).ready(ready);
$(window).load(ready);