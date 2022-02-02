// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main() {
  // [START bigquerydatatransfer_v1_generated_DataTransferService_EnrollDataSources_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The name of the project resource in the form:
   *  `projects/{project_id}`
   */
  // const name = 'abc123'
  /**
   *  Data sources that are enrolled. It is required to provide at least one
   *  data source id.
   */
  // const dataSourceIds = 'abc123'

  // Imports the Datatransfer library
  const {DataTransferServiceClient} = require('@google-cloud/bigquery-data-transfer').v1;

  // Instantiates a client
  const datatransferClient = new DataTransferServiceClient();

  async function callEnrollDataSources() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await datatransferClient.enrollDataSources(request);
    console.log(response);
  }

  callEnrollDataSources();
  // [END bigquerydatatransfer_v1_generated_DataTransferService_EnrollDataSources_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));