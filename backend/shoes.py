from __future__ import print_function

import boto3

print('Loading function')


def handler(event, context):
    '''Response contains a object list with the following keys:
    ...
    Response:
        reference
        brand
        available sizes
        price
    '''

    tablename = "Shoes"
    dynamo = boto3.resource('dynamodb').Table(tablename)

    # Get shoes
    response = dynamo.scan()
    shoes_list = response['Items']

    while 'LastEvaluatedKey' in response:
        # Pagination (scan has 1 MB limit on the amount of data it will return in a request)
        response = dynamo.scan(ExclusiveStartKey=response['LastEvaluatedKey'])
        shoes_list.extend(response['Items'])

    return shoes_list
