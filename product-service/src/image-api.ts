import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { PutObjectCommand, S3 } from '@aws-sdk/client-s3';
import { APIGatewayEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import { v4 as uuid } from 'uuid'

const S3Client  = new S3()

export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  // grab the fileName from the queryString 
  const file = event.queryStringParameters?.file;
  if (!file) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'File query parameter is required' }),
    };
  }

  // give unique name of that file
  const fileName = `${uuid()}__${file}`;

  // create S3 Params
  const s3Params = {
    Bucket: process.env.BUCKET_NAME,
    Key: fileName,
    ContentType: 'image/jpeg',
  };

  try {
    // get signed url
    const url = await getSignedUrl(S3Client, new PutObjectCommand(s3Params));
    console.log('UPLOAD URL:', s3Params, url);

    // give it back to client for upload 
    return {
      statusCode: 200,
      body: JSON.stringify({
        url,
        Key: fileName,
      }),
    };
  } catch (error: any) {
    console.error('Error getting signed URL:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error getting signed URL', error: error.message }),
    };
  }
};