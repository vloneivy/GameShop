$(document).ready(function() {
    $("#formulario-bodega ").validate({
        rules:{
            cantidad:{
                required: true,
            },
        },
        messages:{
            cantidad:{
                required: 'Cantidad es un campo obligatorio',
            },
        },

    });
});