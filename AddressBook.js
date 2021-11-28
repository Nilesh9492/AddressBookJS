console.log("Welcome to AddressBook System using JavaScript");
class AddressBook {
  constructor(...params) {
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zip = params[5];
    this.phoneNumber = params[6];
    this.email = params[7];
  }
  get firstName() {
    return this.firstName;
  }
  set firstName(firstName) {
    let fnRegex = RegExp("^[A-Z]{1}[a-zA-Z]{2,}$");
    if (fnRegex.test(firstName)) {
      this._firstName = firstName;
    } else {
      return "Invalid First Name";
    }
  }
  get lastName() {
    return this.lastName;
  }
  set lastName(lastName) {
    let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
    if (nameRegex.test(lastName)) this.lastName = lastName;
    else throw "Invalid last Name";
  }
  get address() {
    return this.address;
  }
  set address(address) {
    let addressRegex = RegExp("^[A-Za-z]{4,}$");
    if (addressRegex.test(address)) this.address = address;
    else throw "Invalid address ";
  }
  get city() {
    return this.city;
  }
  set city(city) {
    let cityRegex = RegExp("^[A-Za-z]{4,}$");
    if (cityRegex.test(city)) this.city = city;
    else throw "Invalid city ";
  }
  get state() {
    return this.state;
  }
  set state(state) {
    let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
    if (stateRegex.test(state)) this.state = state;
    else throw "Invalid state";
  }
  get zip() {
    return this.zip;
  }
  set zip(zip) {
    let zipRegex = RegExp("^[1-9]{3}[ ]*[0-9]{3}$");
    if (zipRegex.test(zip)) this.zip = zip;
    else throw "Invalid zip ";
  }

  get phoneNumber() {
    return this.phoneNumber;
  }
  set phoneNumber(phoneNumber) {
    let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
    if (phoneRegex.test(phoneNumber)) this.phoneNumber = phoneNumber;
    else throw "Invalid phone number";
  }

  get email() {
    return this.email;
  }
  set email(email) {
    let emailRegex = RegExp(
      "^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$"
    );
    if (emailRegex.test(email)) this.email = email;
    else throw "Invalid email";
  }
  toString() {
    return (
      "First Name: " +
      this.firstName +
      ", Last Name: " +
      this.lastName +
      "\nAddress: " +
      this.address +
      ", City: " +
      this.city +
      ", State: " +
      this.state +
      " Zip: " +
      this.zip +
      ", \nPhoneNumber: " +
      this.phoneNumber +
      ", email: " +
      this.email
    );
  }
}
let contactDetailsArray = new Array();
  contactDetailsArray.push(
    new AddressBookJs(
      "Nilesh",
      "Bh.",
      "Dhl",
      "DLE",
      "MH",
      "423654",
      "91 7896541230",
      "dhsc@gmail.com"
    )
  );
  contactDetailsArray.push(
    new AddressBookJs(
      "Nil",
      "B.",
      "dal",
      "DLE",
      "GJ",
      "412563",
      "91 9874563210",
      "nil@gmail.com"
    )
  );
  contactDetailsArray.push(
    new AddressBookJs(
      "Bruce",
      "Wayne",
      "Arkham",
      "Gotham",
      "MY",
      "874569",
      "01 9632587410",
      "bw@gmail.com"
    )
  );
  contactDetailsArray.push(
    new AddressBookJs(
      "Tony",
      "Stark",
      "Queens",
      "NewYork",
      "NY",
      "123213",
      "01 8523697410",
      "stark@gmail.com"
    )
  );
Display();

function Display() {
  contactDetailsArray.forEach((contact) => console.log(contact.toString()));
}

const prompt = require('prompt-sync')();
function findContact(fname, lname){
    let contactToEdit;
    for(let i = 0; i < contactDetailsArray.length; i++){
        if(contactDetailsArray[i].firstName === fname && contactDetailsArray[i].lastName === lname)
            contactToEdit = contactDetailsArray[i]
    }

    if(contactToEdit == null)
        console.log("No Contact Found To Edit")
    else{
        let input = 1;
        while(input != 9){
            console.log("1. Edit First Name \n2. Edit Last Name \n3. Edit Address \n4. Edit City \n5. Edit State");
            console.log("6. Edit ZipCode \n7. Edit Phone No \n8. Edit Email \n9. Exit")
            input = prompt("Enter Your Choice:  ")
            input = parseInt(input)
            switch (input) {
                case 1:
                    let fname = prompt("Enter the first Name: ")
                    contactToEdit.firstName = fname
                    break
                case 2:
                    let lname = prompt("Enter the last Name: ")
                    contactToEdit.lastName = lname
                    break
                case 3:
                    let address_edit = prompt("Enter the address: ")
                    contactToEdit.address = address_edit
                    break
                case 4:
                    let city_edit = prompt("Enter the city: ")
                    contactToEdit.city = city_edit
                    break
                case 5:
                    let state_edit = prompt("Enter the State: ")
                    contactToEdit.state = state_edit
                    break
                case 6:
                    let zip_edit = prompt("Enter the zip: ")
                    contactToEdit.zip = zip_edit
                    break
                case 7:
                    let phone_edit = prompt("Enter the phone number: ")
                    contactToEdit.phoneNo = phone_edit
                    break
                case 8:
                    let mail_edit = prompt("Enter the email: ")
                    contactToEdit.email = mail_edit
                    break
                case 9:
                    break
                default:
                    console.log("Wrong Input")
            }
        }
    }
}

let param1 = prompt("Enter the First Name:  ")
let param2 = prompt("Enter the Last Name:  ")
findContact(param1, param2)