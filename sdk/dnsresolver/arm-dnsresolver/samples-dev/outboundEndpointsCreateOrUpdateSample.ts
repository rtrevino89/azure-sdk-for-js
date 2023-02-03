/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  OutboundEndpoint,
  DnsResolverManagementClient
} from "@azure/arm-dnsresolver";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates an outbound endpoint for a DNS resolver.
 *
 * @summary Creates or updates an outbound endpoint for a DNS resolver.
 * x-ms-original-file: specification/dnsresolver/resource-manager/Microsoft.Network/stable/2022-07-01/examples/OutboundEndpoint_Put.json
 */
async function upsertOutboundEndpointForDnsResolver() {
  const subscriptionId =
    process.env["DNSRESOLVER_SUBSCRIPTION_ID"] ||
    "abdd4249-9f34-4cc6-8e42-c2e32110603e";
  const resourceGroupName =
    process.env["DNSRESOLVER_RESOURCE_GROUP"] || "sampleResourceGroup";
  const dnsResolverName = "sampleDnsResolver";
  const outboundEndpointName = "sampleOutboundEndpoint";
  const parameters: OutboundEndpoint = {
    location: "westus2",
    subnet: {
      id:
        "/subscriptions/0403cfa9-9659-4f33-9f30-1f191c51d111/resourceGroups/sampleVnetResourceGroupName/providers/Microsoft.Network/virtualNetworks/sampleVirtualNetwork/subnets/sampleSubnet"
    },
    tags: { key1: "value1" }
  };
  const credential = new DefaultAzureCredential();
  const client = new DnsResolverManagementClient(credential, subscriptionId);
  const result = await client.outboundEndpoints.beginCreateOrUpdateAndWait(
    resourceGroupName,
    dnsResolverName,
    outboundEndpointName,
    parameters
  );
  console.log(result);
}

async function main() {
  upsertOutboundEndpointForDnsResolver();
}

main().catch(console.error);
