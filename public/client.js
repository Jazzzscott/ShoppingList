$(function() {

// Step 1
// This code is executed when someone clicks the "Add Item" button 
// at the top right of the shopping-item
// -------------------

  //keep track of how many items are in the shopping list
  var counter = 0;
  
	$(".add-item").on('click', function(event) {
		  event.preventDefault();
      var listItem = $('.item-input').val();
      // do not allow blank entries to be added to the list
      if (listItem.trim()) {
        var itemHtml = "<li><span class='item-check'></span><span class='item-text'>" + listItem + "</span><span class='item-remove'></span></li>";
        // Add the itemHtml section we created for you above to the shopping-list
        $('.shopping-list').append(itemHtml);
        // Remove the text the user entered from item-input
        $('.item-input').val('');
        //increment counter and update display
        counter = counter + 1;
        $('.count-input').text(counter);
      }
	});
// -------------------


// Step 2
// -------------------
// This code is executed when someone clicks the "X" button
// at the top right of the shopping-item
	$(".shopping-list").on('click', '.item-remove', function(event) {
      // Use event.currentTarget to remove the shopping item from the shopping list
      $(event.currentTarget).parent('li').remove();  
      //decriment counter and update display
      counter = counter - 1;
      $('.count-input').text(counter);
	});
// -------------------
  
// Step 3
// This code is executed when someone clicks the checkbox in the shopping-item section
// -------------------
	$(".shopping-list").on('click', '.item-check', function(event) {
      // Use event.currentTarget to add and remove the "complete" class to the checkbox
      $(event.currentTarget).toggleClass("complete");
	});
// -------------------
  
});