const accountID = 1234;
let accountName = "Lavkush Varma";
var accountCity = "Surat";
let accountState;
accountEmail = "lavkush3844@gmail.com";

accountName = "Varma";
accountCity = "Ayodhya";
accountEmail = "lavkush@gmail.com";

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accountID, accountName, accountCity, accountEmail, accountState]);
