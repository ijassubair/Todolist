//data taking from json
$(function() {
  $.getJSON("https://jsonplaceholder.typicode.com/todos", 
          function (data) { 
      var entry = ''; 

     
      $.each(data, function (key, value) { 
      if(entry==''){
              entry += '<tr>'; 
          entry += '<td><b>USERID</b></td>'; 

          entry += '<td><b>ID</b></td>'; 

          entry += '<td><b>TITLE</b></td>'; 

          entry += '<td><b>COMPLETED</b></td>'; 

          entry += '</tr>'; 

          }

      else
          entry += '<tr>'; 
          entry += '<td>' + value.userId + '</td>'; 

          entry += '<td>' + value.id + '</td>'; 

          entry += '<td>' + value.title + '</td>'; 
          if(value.completed==false)
          {
              entry += '<td>' + `<input id="tasksts" type="checkbox">` + '</td>';
          }
          else{
              entry += '<td>' + '<input type="checkbox" disabled checked>' + '</td';
          } 

          entry += '</tr>'; 
      });
   
      
      //ROWS INTO TABLE 
      $('#mytable').append(entry); 
  }); 
})