Upload image file to AWS S3 by `aws-sdk`.

## How to run?
Before you can run the app you have to setup AWS S3 and IAM with generated access and secret keys<br>
You need to add `awsConfig.js` file in the `src/` directory.
The config file is in the form:

```javascript
export default {
  region: "region",
  accessKeyId: "access_key",
  secretAccessKey: "secret_key",
  bucketName: "bucket_name",
  folderName: "folder_name"
};
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
