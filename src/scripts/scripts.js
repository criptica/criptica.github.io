$('a.copyonclipboard').click(function(){
    $(this).siblings('input.linktocopy').select();      
    document.execCommand("copy");
});