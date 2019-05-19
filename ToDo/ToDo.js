// Check off specific todo's by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
 });
  // Click on X to delete todo
  $("ul").on("click", "span", function(event){
      $(this).parent().fadeOut(500,function(){
       $(this).remove();
      })
      event.stopPropagation();
  });
 // Adding 'on' allows new input to adapt to the old things aswell,
 // Now when you click an li inside a ul it crosses off
 // And when you click a span within a ul it removes.
 
 // .parent gives the li becuase the span is inside the li
 // Putting remove immediately after fadeOut, makes removes the li without getting a chance to fade
 // To prevent this you have to add a call back function within the fadeOut
 // And then add the remove.
 // Event propogation allows you to stop other areas e.g. ul, body etc 
 // from firing because the span was within the ul etc
 
 $("input[type='text']").keypress(function(event){
 // This will effect all inputs where type = text so it's more specific
   if(event.which === 13){
 // which is used when identifying a key and enter's number is 13
 // Grabbing new to do text from input
   var todoText = $(this).val();
   $(this).val("");
 // create a new li and add to ul
 // append, select element to append to
   $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
   }
 // This added new text from input as a new li
 });
 
 $(".fa-plus").click(function(){
   $("input[type='text'").fadeToggle()
 })