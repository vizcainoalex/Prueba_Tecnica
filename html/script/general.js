
     function guardar(){
        var nom = document.getElementById("nombre").value;
        var apel = document.getElementById("apellido").value;
        if(nom ==="" || apel ===""){
            alert("Datos obligatorios");
            return false;
        }
       $.ajax
       ({
           async:true,
           type: "POST",
           url: "http://localhost:8080/RestApiDemo/api/v1/personas",
           contentType: "application/json",
           dataType:       'json',
           data: JSON.stringify({"nombre":""+ nom +"","apellido":""+apel+"","procesado":false}),
           beforeSend: function (xhr) {
              
           },
           success: function (json){   
            document.getElementById("nombre").value = "";
            document.getElementById("apellido").value ="";
              alert("Registro creado");
           }
       });
    }
    
    
    
    function ajaxConsulta() { 
        $.ajax({ 
            url: "http://localhost:8080/RestApiDemo/api/v1/personas", 
            contentType: "application/json",
            data: '', 
            type: 'GET', 
            dataType: 'json', 
            success: function (data) { 
                var txt = "<table id='listData' align='center' class='table table - striped table - bordered' style='width: 70%'><thead><tr><th></th> <th>Nombre</th><th>Apellido</th><th>Procesado</th></tr></thead></table>"; 
                //var data = JSON.parse(json); 
                $('#tablaDiv').html(""); 
                $('#tablaDiv').html(txt); 
                var table = $("#listData").DataTable({ 
                    "searching": false, 
                    "pageLength": 10, 
                    "bLengthChange": false, 
                    "bInfo": false, 
                    "language": { 
                        "sProcessing": "Procesando...", 
                        "sLengthMenu": "Mostrar _MENU_ registros", 
                        "sZeroRecords": "No se encontraron resultados", 
                        "sEmptyTable": "Ningún corporactivo disponible en esta tabla", 
                        "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros", 
                        "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros", 
                        "sInfoFiltered": "(filtrado de un total de _MAX_ registros)", 
                        "sInfoPostFix": "", 
                        "sSearch": "Buscar:", 
                        "sUrl": "", 
                        "sInfoThousands": ",", 
                        "sLoadingRecords": "Cargando...", 
                        "oPaginate": { 
                            "sFirst": "Primero", 
                            "sLast": "Último", 
                            "sNext": "Siguiente", 
                            "sPrevious": "Anterior" 
                        }, 
                        "oAria": { 
                            "sSortAscending": ": Activar para ordenar la columna de manera ascendente", 
                            "sSortDescending": ": Activar para ordenar la columna de manera descendente" 
                        } 
                    }, 
                    'data': data, 
                    'columns': [ 
                        { 
                            'data': 'id', 
                            'checkboxes': true, 
                            "width": "20%" 
                        }, 
                        { 'data': 'nombre', 
                          "width": "20%" }, 
                        { 'data': 'apellido', 
                           "width": "20%" }, 
                        { 'data': 'procesado', 
                           "width": "20%" } 
                    ], 
                    'select': { 
                        'style': 'multi' 
                    }, 
                    'columnsDefs': [{ 
                        'targets': 0, 
                        'checkboxes': { 
                            'selectRow': true 
                        } 
                    }], 
                    'order': [[1, 'asc']] 
                }); 
                $('#btnProcesar').css('display', 'block');
                $('#btnProcesar').on('click', function (e) { 
                    var form = this; 
                    var rowsel = table.column(0).checkboxes.selected(); 
                    $.each(rowsel, function (index, rowId) { 
                        $(form).append($('<input>').attr('type', 'hidden').attr('name', 'id[]').val(rowId)); 
                }) 
                procesar(rowsel.join(",")); 
            });
                  
            } 
        }); 
    } 

    function procesar(datos){
        $.ajax
        ({
            type: "PUT",
            url: "http://localhost:8080/RestApiDemo/api/v1/personas?ids="+datos,
            async: false,
            dataType: 'json', 
            contentType: "application/json",
            data: '',
            beforeSend: function (xhr) {
            },
            success: function (data){ 
                var txt = "<table id='listData' align='center' class='table table - striped table - bordered' style='width: 70%'><thead><tr><th></th> <th>Nombre</th><th>Apellido</th><th>Procesado</th></tr></thead></table>"; 
                //var data = JSON.parse(json); 
                $('#tablaDiv').html(""); 
                $('#tablaDiv').html(txt); 
                var table = $("#listData").DataTable({ 
                    "searching": false, 
                    "pageLength": 10, 
                    "bLengthChange": false, 
                    "bInfo": false, 
                    "language": { 
                        "sProcessing": "Procesando...", 
                        "sLengthMenu": "Mostrar _MENU_ registros", 
                        "sZeroRecords": "No se encontraron resultados", 
                        "sEmptyTable": "Ningún corporactivo disponible en esta tabla", 
                        "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros", 
                        "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros", 
                        "sInfoFiltered": "(filtrado de un total de _MAX_ registros)", 
                        "sInfoPostFix": "", 
                        "sSearch": "Buscar:", 
                        "sUrl": "", 
                        "sInfoThousands": ",", 
                        "sLoadingRecords": "Cargando...", 
                        "oPaginate": { 
                            "sFirst": "Primero", 
                            "sLast": "Último", 
                            "sNext": "Siguiente", 
                            "sPrevious": "Anterior" 
                        }, 
                        "oAria": { 
                            "sSortAscending": ": Activar para ordenar la columna de manera ascendente", 
                            "sSortDescending": ": Activar para ordenar la columna de manera descendente" 
                        } 
                    }, 
                    'data': data, 
                    'columns': [ 
                        { 
                            'data': 'id', 
                            'checkboxes': true, 
                            "width": "20%" 
                        }, 
                        { 'data': 'nombre', 
                          "width": "20%" }, 
                        { 'data': 'apellido', 
                           "width": "20%" }, 
                        { 'data': 'procesado', 
                           "width": "20%" } 
                    ], 
                    'select': { 
                        'style': 'multi' 
                    }, 
                    'columnsDefs': [{ 
                        'targets': 0, 
                        'checkboxes': { 
                            'selectRow': true 
                        } 
                    }], 
                    'order': [[1, 'asc']] 
                }); 
                $('#btnProcesar').css('display', 'block');
                $('#btnProcesar').on('click', function (e) { 
                    var form = this; 
                    var rowsel = table.column(0).checkboxes.selected(); 
                    $.each(rowsel, function (index, rowId) { 
                        $(form).append($('<input>').attr('type', 'hidden').attr('name', 'id[]').val(rowId)); 
                }) 
                procesar(rowsel.join(",")); 
            }); 
            }
        });
    }