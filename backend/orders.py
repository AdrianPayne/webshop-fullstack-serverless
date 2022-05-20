from __future__ import print_function
import boto3
import io
import os

from config import Config

print('Loading function')


def handler(event, context):
    """Provide an event that contains the following keys:

      - payload: a parameter to pass to the operation being performed
        - client
        - shoe_reference
        - size
        - shipping_information
    """

    # DB config
    dynamo = boto3.resource('dynamodb')
    table_orders = dynamo.Table("Orders")
    table_shoes = dynamo.Table("Shoes")

    # Store order
    order = event.get('payload')
    table_orders.put_item(Item={**order})

    # Invoice
    # Get the shoe
    shoe = table_shoes.get_item(Key={"id": order["shoe_reference"]})
    shoe = shoe["Item"]

    # Store in S3
    s3 = boto3.client('s3')
    invoice = {**order, "item": {**shoe}}
    fo = io.BytesIO(str(invoice).encode('utf-8'))
    s3.upload_fileobj(fo, "webshopshoes", f"invoice_order_{invoice['id']}.json")

    return invoice
