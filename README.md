# Webshop Fullstack Serverless
Webshop fulstacck build using different serverless AWS technologies

[**ON LIVE**](https://master.d37d90ln5gjdz5.amplifyapp.com/)
## Architecture


## Backend
Based in Python, using AWS lambdas functions and API Gateway as an API.

### Router
| Resource | Method | Input | Output |
| :--- | :--- | :--- | :--- |
| /shoes | GET | - | List of shoes stored in DynamoDB |
| /orders | POST | payload: {client, shoe_reference, size, shipping_information} | Invoice as Response and stored in S3 bucket|

## Frontend
[WIP]

## Deploy
### Backend
Execute from backend folder
```
cd backend
```

Deploy lambdas
```
./devops/deploy_lambdas.sh
```

Delete lambdas
```
./devops/delete_lambdas.sh
```

### Frontend
Continuous development from Github to Amplify


## Test
Test suit in AWS Lambda console
