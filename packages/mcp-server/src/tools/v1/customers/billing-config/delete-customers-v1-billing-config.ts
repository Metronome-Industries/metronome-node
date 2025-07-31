// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.billing_config',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/customers/{customer_id}/billing-config/{billing_provider_type}',
  operationId: 'deleteBillingConfigForCustomer-v1',
};

export const tool: Tool = {
  name: 'delete_customers_v1_billing_config',
  description:
    'Delete the billing configuration for a given customer. Note: this is unsupported for Azure and AWS Marketplace customers.\n',
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
    },
    required: ['customer_id', 'billing_provider_type'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.customers.billingConfig.delete(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
