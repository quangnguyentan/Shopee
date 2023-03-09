var jwt = require("jsonwebtoken");
var fs = require("fs");

// var privateKey = fs.readFileSync("./key/private_key.pem");
// var token = jwt.sign({ foo: "bar" }, privateKey, { algorithm: "RS256" });

// console.log(token);
token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2NzgxMDM5ODd9.ZiqXp_AcKP2OX71VMrsABUQxmWeCDI2anVIIf1c3c3KgbMLV37Do2UFA1JsJ0XvOP3Myx1DezOr99qvEdOlMsFo7QwZG__RC6ab29J2UT2O-_RR6OVJvJkru_kZTSl_cMpN8FQnvBGiiEb_-mgem0tYoC9csY-nh7JYaskjgrleBY1xLC-5mhv2wtmamnBsQRWH-93BsRvdg5xB99bHZ-ZtiCZThCJxFfWSyxBUfMcAfuKAxEJXF86CgOVGC0-Q6F4UDwp1W36Be0WMRuEeUbE7jbD_6jDBmgk2RhiwEdTvcXsHEjMRGWhfRRMa80mM8apSh2DoO2ufBVWtuuwn7FA";
var cert = fs.readFileSync("./key/public_key.pem"); // get public key
jwt.verify(token, cert, { algorithms: ["RS256"] }, function (err, data) {
  // console.log(err);
  console.log(data);
});
