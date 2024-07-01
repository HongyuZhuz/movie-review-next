import { NextResponse, type NextRequest } from 'next/server';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
export async function GET(request: NextRequest) {
    
  const accessKeyId = process.env.ACCESS_KEY_ID;
  const secretAccessKey = process.env.SECRET_ACCESS_KEY;
  const s3BucketName = process.env.S3_BUCKET_NAME;
  if (!accessKeyId || !secretAccessKey || !s3BucketName) {
    console.log("ok")
    return new Response(null, { status: 500 });
    
  }
  /*const searchParams = request.nextUrl.searchParams;
  const fileName = searchParams.get('fileName');
  if (!fileName) {
    return new Response(null, { status: 500 });
  }*/

  const client = new S3Client({
    region: 'us-east-1',
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  const command = new GetObjectCommand({
    Bucket: s3BucketName,
    Key: "HomePage photo.webp",
  });
  const signedUrl = await getSignedUrl(client, command, { expiresIn: 3600 });
  if (signedUrl) return NextResponse.json({ signedUrl });
  return new Response(null, { status: 500 });
  
}