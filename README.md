# Webshop Fullstack Serverless
Webshop fulstacck build using different serverless AWS technologies

[**ON LIVE**](https://master.d37d90ln5gjdz5.amplifyapp.com/)
## Architecture
<div align="center">
  <img src="https://user-images.githubusercontent.com/8972362/169554059-c3ec0bcd-869a-43b7-ba94-97a122c7517a.png"/>
  <p>Architecture overview</p>
 </div>

## Backend
Based in Python, using AWS lambdas functions and API Gateway as an API.

### Router
| Resource | Method | Input | Output |
| :--- | :--- | :--- | :--- |
| /shoes | GET | - | List of shoes stored in DynamoDB |
| /orders | POST | payload: {client, shoe_reference, size, shipping_information} | Invoice as Response and stored in S3 bucket|

## Frontend
React App using Typescript

Figma prototype
![figma_webshop](https://user-images.githubusercontent.com/8972362/169586419-64e56fb1-aa8d-4463-8ca1-d6f7780ed9eb.gif)

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

Run localy
```
npm start
```

## Test
Test suit in AWS Lambda console
