$(document).ready(function(){

    $.get('https://fakestoreapi.com/products', function(data){

        $('#tabla-ropa tbody').empty();

        $.each(data, function(i,item){

            var fila = '';
            fila += '<tr>';
            fila += '    <td>' + item.id + '</td>';
            fila += '    <td>' + item.title + '</td>';
            fila += '    <td>' + item.price + '</td>';
            fila += '    <td>' + item.description + '</td>';
            fila += '    <td>' + item.category + '</td>';
            fila += '    <td>' + item.image + '</td>';
            
            fila += '</tr>';
            $('#tabla-ropa').append(fila);
        });

      });
});