var axios = require('axios');
var data = JSON.stringify({
    "collection": "<COLLECTION_NAME>",
    "database": "<DATABASE_NAME>",
    "dataSource": "bookshop",
    "projection": {
        "_id": 1
    }
});

var config = {
    method: 'post',
    url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-capidlb/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': '28UQvrxGm7EzpyjvCCwRTUG8x2xm1GbMI719xLeHL6tNFf1ChfsJVQqTtTRUAXON',
    },
    data: data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
