/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { MachineLearningComputeManagementClientContext } from "./machineLearningComputeManagementClientContext";


class MachineLearningComputeManagementClient extends MachineLearningComputeManagementClientContext {
  // Operation groups
  operationalizationClusters: operations.OperationalizationClusters;
  machineLearningCompute: operations.MachineLearningCompute;

  /**
   * Initializes a new instance of the MachineLearningComputeManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The Azure subscription ID.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.MachineLearningComputeManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.operationalizationClusters = new operations.OperationalizationClusters(this);
    this.machineLearningCompute = new operations.MachineLearningCompute(this);
  }
}

// Operation Specifications

export {
  MachineLearningComputeManagementClient,
  MachineLearningComputeManagementClientContext,
  Models as MachineLearningComputeManagementModels,
  Mappers as MachineLearningComputeManagementMappers
};
export * from "./operations";
