/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CommunicationServiceManagementClient } from "@azure/arm-communication";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Operation to delete a EmailService.
 *
 * @summary Operation to delete a EmailService.
 * x-ms-original-file: specification/communication/resource-manager/Microsoft.Communication/preview/2022-07-01-preview/examples/emailServices/delete.json
 */
async function deleteEmailServiceResource() {
  const subscriptionId =
    process.env["COMMUNICATION_SUBSCRIPTION_ID"] || "12345";
  const resourceGroupName =
    process.env["COMMUNICATION_RESOURCE_GROUP"] || "MyResourceGroup";
  const emailServiceName = "MyEmailServiceResource";
  const credential = new DefaultAzureCredential();
  const client = new CommunicationServiceManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.emailServices.beginDeleteAndWait(
    resourceGroupName,
    emailServiceName
  );
  console.log(result);
}

async function main() {
  deleteEmailServiceResource();
}

main().catch(console.error);
