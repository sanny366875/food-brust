$(document).ready(function() {
            
	// variables
	var hamburger = $('.hamburger-init'),
		menu_wrapper = $('.menu-wrapper'),
		menu = $('.menu'),
		item_with_children = $('.menu-item-has-children');
  
	// logic
	hamburger.on('click', function() {
	  $('.container').toggleClass('hamburger-guide');
	  $(this).toggleClass('active');
	  menu_wrapper.toggleClass('visible');
	  menu.toggleClass('menu-active');
	});
  
	item_with_children.on('click', function() {
	  $(this).toggleClass('sub-menu-active');
	  $(this).children('.menu').slideToggle();
	});
  
  });
  