$(function () {
    $("#getdatabtn").click(function () {
        var out;
        let number = document.getElementById('numero').value
       $.ajax({
           type: "GET",
           url: "https://jsonplaceholder.typicode.com/comments?postId=" + number,
           dataType: "JSON",
           success: function (data) {
           out = "&nbsp&nbsp[<br>";
            for(var i = 0; i < data.length; i++) {
                out += "&nbsp&nbsp&nbsp&nbsp{<br>";
                out += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsppostId: " + number + ",<br>";
                out += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspid: " + data[i].id + ",<br>";
                out += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspname: " + data[i].name + ",<br>";
                out += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspemail: " + data[i].email + ",<br>";
                out += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspbody: " + data[i].body + ",<br>";
                out += "&nbsp&nbsp&nbsp&nbsp},<br>";
            }
            out += "&nbsp&nbsp]";
            $("p").html(out);  
           }
       });
    });
});