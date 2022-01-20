/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Connects a data connector.
 *
 * @summary Connects a data connector.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2021-09-01-preview/examples/dataConnectors/ConnectAPIPolling.json
 */
import {
  DataConnectorConnectBody,
  SecurityInsights
} from "@azure/arm-securityinsight";
import { DefaultAzureCredential } from "@azure/identity";

async function connectAnApiPollingDataConnector() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorId = "316ec55e-7138-4d63-ab18-90c8a60fd1c8";
  const connectBody: DataConnectorConnectBody = {
    apiKey: "123456789",
    kind: "APIKey",
    requestConfigUserInputValues: [
      {
        displayText: "Organization Name",
        placeHolderName: "{{placeHolder1}}",
        placeHolderValue: "somePlaceHolderValue",
        requestObjectKey: "apiEndpoint"
      }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectors.connect(
    resourceGroupName,
    workspaceName,
    dataConnectorId,
    connectBody
  );
  console.log(result);
}

connectAnApiPollingDataConnector().catch(console.error);
