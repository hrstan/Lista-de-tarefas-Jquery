$(document).ready(function() {

    $('form').on('submit', function(e) {

        e.preventDefault();


        const novaTarefa = $('#tarefa').val();
        const novaLista = $(`<li style="display: none;"> ${novaTarefa} </li>`);
        $(novaLista).appendTo('ul');
        $(novaLista).slideToggle();

        $('#tarefa').val('');

    });

    $("ul").on('click', 'li', function() {
        $(this).css("text-decoration", "line-through");
    });


});