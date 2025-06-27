// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.billing_config',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/customers/{customer_id}/billing-config/{billing_provider_type}',
  operationId: 'setBillingConfigForCustomer-v1',
};

export const tool: Tool = {
  name: 'create_customers_v1_billing_config',
  description: 'Set the billing configuration for a given customer.',
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      billing_provider_type: {
        type: 'string',
        enum: [
          'aws_marketplace',
          'stripe',
          'netsuite',
          'custom',
          'azure_marketplace',
          'quickbooks_online',
          'workday',
          'gcp_marketplace',
        ],
      },
      billing_provider_customer_id: {
        type: 'string',
        description:
          "The customer ID in the billing provider's system. For Azure, this is the subscription ID.",
      },
      aws_product_code: {
        type: 'string',
      },
      aws_region: {
        type: 'string',
        enum: [
          'af-south-1',
          'ap-east-1',
          'ap-northeast-1',
          'ap-northeast-2',
          'ap-northeast-3',
          'ap-south-1',
          'ap-southeast-1',
          'ap-southeast-2',
          'ca-central-1',
          'cn-north-1',
          'cn-northwest-1',
          'eu-central-1',
          'eu-north-1',
          'eu-south-1',
          'eu-west-1',
          'eu-west-2',
          'eu-west-3',
          'me-south-1',
          'sa-east-1',
          'us-east-1',
          'us-east-2',
          'us-gov-east-1',
          'us-gov-west-1',
          'us-west-1',
          'us-west-2',
        ],
      },
      stripe_collection_method: {
        type: 'string',
        enum: ['charge_automatically', 'send_invoice'],
      },
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.customers.billingConfig.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
