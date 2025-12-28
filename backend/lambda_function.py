import json
import boto3

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table("visitor_counter")

def lambda_handler(event, context):
    response = table.update_item(
        Key={"id": "visits"},
        UpdateExpression="SET visit_count = if_not_exists(visit_count, :start) + :inc",
        ExpressionAttributeValues={":inc": 1, ":start": 0},
        ReturnValues="UPDATED_NEW"
    )

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps({"count": int(response["Attributes"]["visit_count"])})
    }
