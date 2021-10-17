/**
 * funciones para Bike
 */
function traerInformacionBike(){
    $.ajax({

        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike" ,
        headers:{
            'Access-Control-Allow-Origin':'*'
        },
        type: "GET",
        dataType: "JSON",
        success: function(respuesta){
            console.log(respuesta);
            $("#resultadoBike").empty();
            pintarRespuestaBike(respuesta.items);
        }
    });
}
function pintarRespuestaBike(items){
    
            let myTable="<table border=1>";
            for(i=0; i<items.length; i++){
                myTable += "<tr>";
                myTable += "<td>"+items[i].id+"</td>";
                myTable += "<td>"+items[i].brand+"</td>";
                myTable += "<td>"+items[i].model+"</td>";
                myTable += "<td>"+items[i].category_id+"</td>";
                myTable += "<td>"+items[i].name+"</td>";
                myTable += "<td><button onclick='borrarElementoBike("+items[i].id+")'>Borrar datos</button></td>";
                myTable += "<td><button onclick='obtenerItemEspecificoBike("+items[i].id+")'>Cargar datos</button></td>";
                myTable += "</tr>";
            }
            myTable += "</table>";
            $("#resultadoBike").html(myTable);
}
function guardarInformacionBike(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val()
    };

    let dataToSend=JSON.stringify(myData);

    $.ajax({

        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike" ,
        type: "POST",
        data:myData,
        dataType: "JSON",      
        
        success:function(respuesta) {
            $("#resultadoBike").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacionBike();
            alert("Datos Guardados Con Exito")
        }
    });    
}
function editarInformacionBike(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val()
    };

    let dataToSend=JSON.stringify(myData);

    $.ajax({

        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike" ,
        type: "PUT",
        data:dataToSend,
        dataType: "JSON",      
        
        success:function(respuesta) {
            $("#resultadoBike").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacionBike();
            alert("Datos Actualizados Con Exito")
        }
    });    
}
function borrarElementoBike(idElemento){
    let myData={
        id:idElemento
    };

    let dataToSend=JSON.stringify(myData);

    $.ajax({

        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike" ,
        type: "DELETE",
        data:dataToSend,
        contentType:"application/json",
        dataType: "JSON",
        success: function(respuesta){
            $("#resultadoBike").empty();
            traerInformacionBike(),
            alert("Datos Borrados con Exito")
        }
    });
}
function obtenerItemEspecificoBike(items){
    console.log("---- obtenerItemsEspecificoBike items:", items);
    $.ajax({

        dataType: "json",
        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike" + items ,
        type: "GET",             
        success:function(response) {
            console.log("---- obtenerItemsEspecificoBike", response);
            var item = response.items[0];
            $("#id").val(item.id);
            $("#brand").val(item.brand);
            $("#model").val(item.model);
            $("#category_id").val(item.category_id);
            $("#name").val(item.name);
        },

        error: function(jqXHR, textStatus, errorThrown){},
    });  
}
/**
 * funciones para Client
 */
function traerInformacionClient(){
    $.ajax({

        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client" ,
        headers:{
            'Access-Control-Allow-Origin':'*'
        },
        type: "GET",
        dataType: "JSON",
        success: function(respuesta){
            console.log(respuesta);
            $("#resultadoCliente").empty();
            pintarRespuestaClient(respuesta.items);
        }
    });
}
function pintarRespuestaClient(items){
    
            let myTable="<table border=1>";
            for(i=0; i<items.length; i++){
                myTable += "<tr>";
                myTable += "<td>"+items[i].id+"</td>";
                myTable += "<td>"+items[i].name+"</td>";
                myTable += "<td>"+items[i].email+"</td>";
                myTable += "<td>"+items[i].age+"</td>";
                myTable += "<td><button onclick='borrarElementoCliente("+items[i].id+")'>Borrar datos</button></td>";
                myTable += "<td><button onclick='obtenerItemEspecificoCliente("+items[i].id+")'>Cargar datos</button></td>";
                myTable += "</tr>";
            }
            myTable += "</table>";
            $("#resultadoClient").html(myTable);
}
function guardarInformacionClient(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val()
    };

    let dataToSend=JSON.stringify(myData);

    $.ajax({

        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client" ,
        type: "POST",
        data:myData,
        dataType: "JSON",    
        success:function(respuesta) {
            $("#resultadoClient").empty();
            $("#id_client").val("");
            $("#name_client").val("");
            $("#email_client").val("");
            $("#age_client").val("");
            traerInformacionClient();
            alert("Datos Guardados Con Exito")
        }
    });    
}
function editarInformacionClient(){
    let myData={
        id:$("#id_client").val(),
        name:$("#name_client").val(),
        email:$("#email_client").val(),
        age:$("#age_client").val()
    };

    let dataToSend=JSON.stringify(myData);

    $.ajax({

        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client" ,
        type: "PUT",
        data:dataToSend,
        contentType: "application/json",  
        dataType: "JSON",    
        success:function(respuesta) {
            $("#resultadoClient").empty();
            $("#id_client").val("");
            $("#name_client").val("");
            $("#email_client").val("");
            $("#age_client").val("");
            traerInformacionClient();
            alert("Datos Actualizados Con Exito")
        }
    });    
}
function borrarElementoClient(idElemento){
    let myData={
        id:idElemento
    };

    let dataToSend=JSON.stringify(myData);

    $.ajax({

        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client" ,
        type: "DELETE",
        data:dataToSend,
        contentType:"application/json",
        dataType: "JSON",
        success: function(respuesta){
            $("#resultadoClient").empty();
            traerInformacionClient(),
            alert("Datos Borrados con Exito")
        }
    });
}
function obtenerItemEspecificoClient(items){
    console.log("---- obtenerItemsEspecificoClient items:", items);
    $.ajax({

        dataType: "JSON",
        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client" + items ,
        type: "GET",             
        success:function(response) {
            console.log("---- obtenerItemsEspecificoClient", response);
            var item = response.items[0];
            $("#id_client").val(item.id);
            $("#name_client").val(item.name);
            $("#email_client").val(item.email);
            $("#age_client").val(item.age);
        },

        error: function(jqXHR, textStatus, errorThrown){},
    });  
}
/**
 * funciones para Message
 */
function traerInformacionMessage(){
    $.ajax({
        
        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message" ,
        headers:{
            'Access-Control-Allow-Origin':'*'
        },
        type: "GET",
        dataType: "JSON",
        success: function(respuesta){
            console.log(respuesta);
            $("#resultadoMessage").empty();
            pintarRespuestaMessage(respuesta.items);
        }
    });
}
function pintarRespuestaMessage(items){
    
    let myTable="<table border=1>";
    for(i=0; i<items.length; i++){
        myTable += "<tr>";
        myTable += "<td>"+items[i].id+"</td>";
        myTable += "<td>"+items[i].messagetext+"</td>";
        myTable += "<td><button onclick='borrarElementoMessage("+items[i].id+")'>Borrar datos</button></td>";
        myTable += "<td><button onclick='obtenerItemEspecificoMessage("+items[i].id+")'>Cargar datos</button></td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoMessage").html(myTable);
}
function guardarInformacionMessage(){
    let myData={
        id:$("#id_message").val(),
        messagetext:$("#messagetext").val(),
    };

    let dataToSend=JSON.stringify(myData);

    $.ajax({

        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message" ,
        type: "POST",
        data:myData,
        dataType: "JSON",    
        success:function(respuesta) {
            $("#resultadoMessage").empty();
            $("#id_message").val("");
            $("#messagetext").val("");
            traerInformacionMessage();
            alert("Datos Guardados Con Exito")
        }
    });    
}
function editarInformacionMessage(){
    let myData={
        id:$("#id_message").val(),
        messagetext:$("#messagetext").val(),
    };

    let dataToSend=JSON.stringify(myData);

    $.ajax({

        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message" ,
        type: "PUT",
        data:dataToSend,
        contentType: "application/json",  
        dataType: "JSON",    
        success:function(respuesta) {
            $("#resultadoClient").empty();
            $("#id_message").val("");
            $("#messagetext").val("");
            traerInformacionMessage();
            alert("Datos Actualizados Con Exito")
        }
    });    
}
function borrarElementoMessage(idElemento){
    let myData={
        id:idElemento
    };

    let dataToSend=JSON.stringify(myData);

    $.ajax({

        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message" ,
        type: "DELETE",
        data:dataToSend,
        contentType:"application/json",
        dataType: "JSON",
        success: function(respuesta){
            $("#resultadoMessage").empty();
            traerInformacionMessage(),
            alert("Datos Borrados con Exito")
        }
    });
}
function obtenerItemEspecificoMessage(items){
    console.log("---- obtenerItemsEspecificoMessage items:", items);
    $.ajax({

        dataType: "JSON",
        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message"  + items ,
        type: "GET",             
        success:function(response) {
            console.log("---- obtenerItemsEspecificoMessage", response);
            var item = response.items[0];
            $("#id_message").val(item.id);
            $("#messagetext").val(item.name);
            
        },

        error: function(jqXHR, textStatus, errorThrown){},
    });  
}