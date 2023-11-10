var serialNumber = 1;

    function addFriend() {

      var itemInput = document.getElementById("item");
      var itemValue = itemInput.value;

      if(itemInput.value === ''){
        alert("Please Enter Participant Name");
      }
      else{
      
      var tableBody = document.getElementById("dataTable").getElementsByTagName('tbody')[0];

      var newRow = tableBody.insertRow(tableBody.rows.length);
      var cell0 = newRow.insertCell(0);
      var cell1 = newRow.insertCell(1);
      var cell2 = newRow.insertCell(2);

      cell0.innerHTML = serialNumber++;
      cell1.innerHTML = itemValue;
      cell2.innerHTML = 0; 
      itemInput.value = '';
      }
      newRow.onclick = function() {
        cell2.innerHTML = parseInt(cell2.innerHTML) + 1;
      };

    }