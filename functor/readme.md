# Quick notes

## Initial steps

* `gcloud auth login`
* `gcloud config set project <project-id>`

To run first function locally, run:

* `npm install @google-cloud/functions-framework`.
* Add launch script to package.json `"start": "functions-framework --target=helloWorld"`
* `npm start`

To deploy as a new function to gcloud functions use:

`gcloud functions deploy helloGET --runtime nodejs16 --trigger-http --allow-unauthenticated`

For further information, see:

* <https://cloud.google.com/functions/docs/running/function-frameworks>
* <https://cloud.google.com/functions/docs/tutorials/http>
