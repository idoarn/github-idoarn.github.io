$('#input').change(function(){
    var input = $('#input').val()
    $('ul').append('<li>' + input + '<i class="fa-regular fa-trash-can fa-fade" id="remove"></i><i class="fa-regular fa-circle-check fa-fade" id="check"></li>');
    $(this).val('');
})

$('#input').focusin(() => {
    $('#input').css('opacity', '100%');
});

$('#input').hover(() => {
    $('#input').css('opacity', '75%')
});

$('#input').focusout(() => {
    $('#input').css('opacity', '50%')
});

$('ul').on('click', '.fa-trash-can', function (){
    $(this).parent('li').fadeOut(200);
});

$('ul').on('click', '.fa-circle-check', function(){
    $(this).parent('li').toggleClass('checked');
})