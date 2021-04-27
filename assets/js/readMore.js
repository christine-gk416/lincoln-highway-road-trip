$(document).ready(function(){
    $(".read-more-btn").click(function(){
        $(this).prev().toggle();
        $(this).siblings(".more-text").toggle();
        if($(this).text()=='Read More'){
            $(this).text('Read Less');
              }
              else{
            $(this).text('Read More');
              }
    });
});