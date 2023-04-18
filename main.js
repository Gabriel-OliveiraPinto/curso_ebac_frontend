$(document).ready(function(){
    
    $("form").on("submit", function(e){ 
        e.preventDefault();
        const tarefaNova = $("input").val();
        const novoItem = $(`<li>${tarefaNova}</li>`);
        $(novoItem).appendTo("ul");
        $("input").val("");
    });
    
    $("body").on("click", "li", function(){
        $(this).css("text-decoration","line-through");
    });
});