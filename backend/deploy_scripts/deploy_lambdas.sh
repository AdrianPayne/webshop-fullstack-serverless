export ARNrol="arn:aws:iam::294011904048:role/lambda-apigateway-role"
export AWSprofile="adriansacristan1993@gmail.com"

zip -r get_shoes.zip shoes.py
zip -r post_orders.zip orders.py


aws lambda create-function --function-name GetShoes \
--zip-file fileb://get_shoes.zip --handler shoes.handler --runtime python3.8 \
--role $ARNrol --profile $AWSprofile

aws lambda create-function --function-name PostOrders \
--zip-file fileb://post_orders.zip --handler orders.handler --runtime python3.8 \
--role $ARNrol --profile $AWSprofile

rm get_shoes.zip
rm post_orders.zip
