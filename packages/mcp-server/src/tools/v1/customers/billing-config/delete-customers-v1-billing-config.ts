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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete the billing configuration for a given customer. Note: this is unsupported for Azure and AWS Marketplace customers.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['customer_id', 'billing_provider_type'],
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.customers.billingConfig.delete(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
