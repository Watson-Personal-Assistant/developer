var Client = require('node-rest-client').Client;
var client = new Client();

var GRANT_TYPE = "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=";
var IAM_URL = "https://iam.bluemix.net:443/identity/token";

function printToken(apikey) {
    var args = {
        data: GRANT_TYPE + apikey,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json"
        }
    };

    client.post(IAM_URL, args, function (data, response) {
        token = data.access_token;
    
        if (token) {
            console.log(token);
        } else {
            if (data.errorMessage) {
                console.error(data.errorMessage);
            }
            process.exit(1);
        }
    });
}

printToken(process.argv[2]);