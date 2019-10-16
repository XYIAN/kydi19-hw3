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
        $("#nameF").html("Hello, " + name +"!");
        alert($("#name").val());
    });//end name
    
    // function show()
    // {
    //   (f1.sppan)  
    // };
    
    $("#b1").on("click",function()
    {
        //alert("searchS button clicked " + $("#input").length);
        // if($("#input1").length > 2)
        // {
        
        var searchBar = $("#input1").val();
        //alert("searchBar val=" + searchBar);
        var units = $("#region").val(); 
        $.ajax({
    
        method: "GET",
        url:"https://api.openweathermap.org/data/2.5/weather?q="+searchBar+"&units="+units+"&appid=876349ecdd8f244418c417cf7684cced",
        dataType: "json",
        success: function(data)
        {
            console.log(data); 
            //alert("please work:(");
            //alert(data.weather[0].main);
            $("#f1").html(data.main.temp);
            $("#f1").css("color", "red");
            //$("#region").append("<option>" + data.main + "</option>");
            //alert(data.weather.icon);
            // $("#f2").append("<img src=" + data.weather[0].icon +">");
            
            $('#wicon').attr('src', "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
            //"http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            $("#f3").html(data.main.pressure);
            $("#f3").css("color", "red");
            $("#f4").html(data.main.humidity+"%");
            $("#f4").css("color", "red");
            if(units == "imperial")
            {
                $("#f5").html(data.wind.speed+"mph");
                $("#f5").css("color", "red");
                $("#f1").html(data.main.temp + " F");
                $("#f1").css("color", "red");
            }
            if(units == "metric")
            {
                $("#f5").html(data.wind.speed+"km");
                $("#f5").css("color", "red");
                $("#f1").html(data.main.temp + " C");
                $("#f1").css("color", "red");
            }
            $("#f5").html(data.wind.speed+"mph");
            $("#f5").css("color", "red");
            $("#f6").html(data.sys.sunset);
            $("#f6").css("color", "red");
            $("#f7").html(data.sys.sunrise);
            $("#f7").css("color", "red");
            $("#f8").html("Expect: " + data.weather[0].main);
            $("#f8").css("color", "red");
            
            
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