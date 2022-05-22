export ARNrol="arn:aws:iam::294011904048:role/lambda-apigateway-role"
export AWSprofile="adriansacristan1993@gmail.com"

zip -r get_shoes.zip shoes.py
zip -r post_orders.zip orders.py


aws lambda update-function-code --function-name GetShoes \
--zip-file fileb://get_shoes.zip --profile $AWSprofile

aws lambda update-function-code --function-name PostOrders \
--zip-file fileb://post_orders.zip --profile $AWSprofile

rm get_shoes.zip
rm post_orders.zip
