loadCustomers = () => {
   return new Promise((resolve, reject) => {  // return the promise object to the caller
      let request = new XMLHttpRequest(); //regular XHR request
      request.onload = function () {
         if (request.status === 200) { // check the status. This is called even on 404 etc. https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
            // Success
            var data = JSON.parse(request.responseText); //Returns the response data as a string
            // modify the data into array
            resolve(data); //the resolve contains the data -- returned to the caller
            // resolve(request.response); // default
         } else {
            // Something went wrong (404 etc.)
            reject(new Error("XMLHttpRequest Error ", request.statusText));
         }
      };
      request.open('GET', "http://localhost:3000/customers/5");
      request.send();
   });
}

loadCustomers()
.then((data) => {
   console.log("got a customer", data);
});

const newCustomer = {
   lastName: "Purple",
   first_name: "Ale",
   phone: "555-555-5555"
}

addCustomer = (custObj) => {
   console.log("addCustomer", custObj);
      return $.ajax({
         url: `http://localhost:3000/customers/`,
         type: 'POST',
         data: custObj,
         dataType: 'json'
      }).done((newCustomer) => {
         return newCustomer;
      });
   }

addCustomer(newCustomer)
.then((data) => {
   console.log("added a new one", data);
});

editCustomer = (whichOne, obj) => {
   console.log("editCustomer", whichOne);
   return $.ajax({
      url: `http://localhost:3000/customers/${whichOne}`,
      type: 'PATCH',
      data: obj,
      dataType: 'json'
   }).done((updatedCustomer) => {
      return updatedCustomer;
   });
}

changeObj = {
   first_name: "Greg"
}
editCustomer(8,changeObj)
.then((data) => {
   console.log("what here now", data);
});



