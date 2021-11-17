/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/accountsMappers";
import * as Parameters from "../models/parameters";
import { CognitiveServicesManagementClientContext } from "../cognitiveServicesManagementClientContext";

/** Class representing a Accounts. */
export class Accounts {
  private readonly client: CognitiveServicesManagementClientContext;

  /**
   * Create a Accounts.
   * @param {CognitiveServicesManagementClientContext} client Reference to the service client.
   */
  constructor(client: CognitiveServicesManagementClientContext) {
    this.client = client;
  }

  /**
   * Create Cognitive Services Account. Accounts is a resource group wide resource type. It holds the
   * keys for developer to access intelligent APIs. It's also the resource type for billing.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param account The parameters to provide for the created account.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsCreateResponse>
   */
  create(resourceGroupName: string, accountName: string, account: Models.Account, options?: msRest.RequestOptionsBase): Promise<Models.AccountsCreateResponse> {
    return this.beginCreate(resourceGroupName,accountName,account,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.AccountsCreateResponse>;
  }

  /**
   * Updates a Cognitive Services account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param account The parameters to provide for the created account.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsUpdateResponse>
   */
  update(resourceGroupName: string, accountName: string, account: Models.Account, options?: msRest.RequestOptionsBase): Promise<Models.AccountsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,accountName,account,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.AccountsUpdateResponse>;
  }

  /**
   * Deletes a Cognitive Services account from the resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,accountName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Returns a Cognitive Services account specified by the parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsGetResponse>
   */
  get(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.AccountsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.Account>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Account>): void;
  get(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Account>, callback?: msRest.ServiceCallback<Models.Account>): Promise<Models.AccountsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AccountsGetResponse>;
  }

  /**
   * Returns all the resources of a particular type belonging to a resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AccountsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.AccountListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccountListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccountListResult>, callback?: msRest.ServiceCallback<Models.AccountListResult>): Promise<Models.AccountsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.AccountsListByResourceGroupResponse>;
  }

  /**
   * Returns all the resources of a particular type belonging to a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.AccountsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.AccountListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccountListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccountListResult>, callback?: msRest.ServiceCallback<Models.AccountListResult>): Promise<Models.AccountsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AccountsListResponse>;
  }

  /**
   * Lists the account keys for the specified Cognitive Services account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsListKeysResponse>
   */
  listKeys(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.AccountsListKeysResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param callback The callback
   */
  listKeys(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.ApiKeys>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listKeys(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApiKeys>): void;
  listKeys(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApiKeys>, callback?: msRest.ServiceCallback<Models.ApiKeys>): Promise<Models.AccountsListKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      listKeysOperationSpec,
      callback) as Promise<Models.AccountsListKeysResponse>;
  }

  /**
   * Regenerates the specified account key for the specified Cognitive Services account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param keyName key name to generate (Key1|Key2). Possible values include: 'Key1', 'Key2'
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsRegenerateKeyResponse>
   */
  regenerateKey(resourceGroupName: string, accountName: string, keyName: Models.KeyName, options?: msRest.RequestOptionsBase): Promise<Models.AccountsRegenerateKeyResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param keyName key name to generate (Key1|Key2). Possible values include: 'Key1', 'Key2'
   * @param callback The callback
   */
  regenerateKey(resourceGroupName: string, accountName: string, keyName: Models.KeyName, callback: msRest.ServiceCallback<Models.ApiKeys>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param keyName key name to generate (Key1|Key2). Possible values include: 'Key1', 'Key2'
   * @param options The optional parameters
   * @param callback The callback
   */
  regenerateKey(resourceGroupName: string, accountName: string, keyName: Models.KeyName, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApiKeys>): void;
  regenerateKey(resourceGroupName: string, accountName: string, keyName: Models.KeyName, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApiKeys>, callback?: msRest.ServiceCallback<Models.ApiKeys>): Promise<Models.AccountsRegenerateKeyResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        keyName,
        options
      },
      regenerateKeyOperationSpec,
      callback) as Promise<Models.AccountsRegenerateKeyResponse>;
  }

  /**
   * List available SKUs for the requested Cognitive Services account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsListSkusResponse>
   */
  listSkus(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.AccountsListSkusResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param callback The callback
   */
  listSkus(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.AccountSkuListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listSkus(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccountSkuListResult>): void;
  listSkus(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccountSkuListResult>, callback?: msRest.ServiceCallback<Models.AccountSkuListResult>): Promise<Models.AccountsListSkusResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      listSkusOperationSpec,
      callback) as Promise<Models.AccountsListSkusResponse>;
  }

  /**
   * Get usages for the requested Cognitive Services account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsListUsagesResponse>
   */
  listUsages(resourceGroupName: string, accountName: string, options?: Models.AccountsListUsagesOptionalParams): Promise<Models.AccountsListUsagesResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param callback The callback
   */
  listUsages(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.UsageListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listUsages(resourceGroupName: string, accountName: string, options: Models.AccountsListUsagesOptionalParams, callback: msRest.ServiceCallback<Models.UsageListResult>): void;
  listUsages(resourceGroupName: string, accountName: string, options?: Models.AccountsListUsagesOptionalParams | msRest.ServiceCallback<Models.UsageListResult>, callback?: msRest.ServiceCallback<Models.UsageListResult>): Promise<Models.AccountsListUsagesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      listUsagesOperationSpec,
      callback) as Promise<Models.AccountsListUsagesResponse>;
  }

  /**
   * Create Cognitive Services Account. Accounts is a resource group wide resource type. It holds the
   * keys for developer to access intelligent APIs. It's also the resource type for billing.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param account The parameters to provide for the created account.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, accountName: string, account: Models.Account, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        account,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Updates a Cognitive Services account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param account The parameters to provide for the created account.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, accountName: string, account: Models.Account, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        account,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a Cognitive Services account from the resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Returns all the resources of a particular type belonging to a resource group
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AccountsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AccountListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccountListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccountListResult>, callback?: msRest.ServiceCallback<Models.AccountListResult>): Promise<Models.AccountsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.AccountsListByResourceGroupNextResponse>;
  }

  /**
   * Returns all the resources of a particular type belonging to a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AccountsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AccountListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccountListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccountListResult>, callback?: msRest.ServiceCallback<Models.AccountListResult>): Promise<Models.AccountsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.AccountsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Account
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccountListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/accounts",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccountListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/listKeys",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApiKeys
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const regenerateKeyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/regenerateKey",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      keyName: "keyName"
    },
    mapper: {
      ...Mappers.RegenerateKeyParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApiKeys
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listSkusOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/skus",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccountSkuListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listUsagesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/usages",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.UsageListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "account",
    mapper: {
      ...Mappers.Account,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Account
    },
    201: {
      bodyMapper: Mappers.Account
    },
    202: {
      bodyMapper: Mappers.Account
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "account",
    mapper: {
      ...Mappers.Account,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Account
    },
    202: {
      bodyMapper: Mappers.Account
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccountListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccountListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
