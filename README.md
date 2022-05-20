# Webshop Fullstack Serverless
Webshop fulstacck build using different serverless AWS technologies

## Architecture
<div align="center">
  <img src="https://user-images.githubusercontent.com/8972362/169554059-c3ec0bcd-869a-43b7-ba94-97a122c7517a.png"/>
  <p>Home</p>
 </div>

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
