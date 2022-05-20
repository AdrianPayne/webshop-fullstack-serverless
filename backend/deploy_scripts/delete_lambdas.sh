export AWSprofile="adriansacristan1993@gmail.com"

aws lambda delete-function --function-name GetShoes --profile $AWSprofile
aws lambda delete-function --function-name PostOrders --profile $AWSprofile
