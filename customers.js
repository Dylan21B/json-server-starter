// customers.js

var faker = require('faker')

function generateCustomers() {
   var customers = []

   for (var id = 0; id < 50; id++) {
      let firstName = faker.name.firstName();
      let lastName = faker.name.firstName();
      let phoneNumber = faker.phone.phoneNumberFormat();
      let avatar = faker.internet.avatar();
      let nightlifeImage = faker.image.cats();

      customers.push({
         "id": id,
         "first_name": firstName,
         "last_name": lastName,
         "phone": phoneNumber,
         "avatar": avatar,
         "nlImage": nightlifeImage
      })
   }

   return { "customers": customers }
}

// json-server requires that you export
// a function which generates the data set
module.exports = generateCustomers