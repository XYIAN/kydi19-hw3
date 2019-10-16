/* global $ */
/* global input */

// $.ajax({

// method: "GET",
// url: "https://cst336.herokuapp.com/projects/api/promo_products.php",
// dataType: "",
// data: { "": },
// success: function(result,status) {
// //alert(result);
// }

// });//ajax


$(document).ready(function()
{
    $("#b1").on("click",function()
    {
        alert("search button clicked " + $("#input").length);
        // if($("#input1").length > 2)
        // {
        var searchBar = $("#input1").val();
        alert("searchBar val=" + searchBar);
        $.ajax({
    
        method: "GET",
        url: "https://samples.openweathermap.org/data/2.5/weather?q="+searchBar+"&appid=b6907d289e10d714a6e88b30761fae22",
        dataType: "json",
        success: function(result,status)
        {
            alert(result.main.temp);
            $("#f1").html(result.main.temp);
            $("#region").append("<option>" + result.main+ "</option>");
            $("#f2").html(result.main.icon);
            
        }
        
        });//ajax
        
        
        // }
        // else if($("#input").length < 2)
        // {
        //     $("#f1").html("ERROR MUST HAVE FULL CITY NAME"); 
        //     $("#f1").css("color", "red")
        // }
            
    });//end button
    
    
    
    
    
});