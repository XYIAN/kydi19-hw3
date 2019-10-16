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
    var name = $("#name").val();
    $("#name").on("change", function()
    {
        name = $("#name").val();
        $("nameF").html("Hello, " + name +"!");
        
    });//end name
    // function show()
    // {
    //   (f1.sppan)  
    // };
    
    $("#b1").on("click",function()
    {
        alert("searchS button clicked " + $("#input").length);
        // if($("#input1").length > 2)
        // {
        var searchBar = $("#input1").val();
        alert("searchBar val=" + searchBar);
        $.ajax({
    
        method: "GET",
        url:"https://api.openweathermap.org/data/2.5/weather?q="+searchBar+"&units=imperial&appid=876349ecdd8f244418c417cf7684cced",
        dataType: "json",
        success: function(data)
        {
            console.log(data); 
            alert("please work:(");
            //alert(data.weather[0].main);
            $("#f1").html(data.main.temp);
            $("#region").append("<option>" + data.main + "</option>");
            $("#f2").html(data.weather.icon);
            
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