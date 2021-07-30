const jwt = require("jsonwebtoken");
const data = jwt.sign({ message: "message" }, "fhth");
console.log(jwt.verify(data, "fhth"));
