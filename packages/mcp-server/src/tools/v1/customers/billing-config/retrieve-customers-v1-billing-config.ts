// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.billing_config',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/customers/{customer_id}/billing-config/{billing_provider_type}',
  operationId: 'getBillingConfig-v1',
};

export const tool: Tool = {
  name: 'retrieve_customers_v1_billing_config',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetch the billing configuration for the given customer.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        aws_expiration_date: {\n          type: 'string',\n          description: 'Contract expiration date for the customer. The expected format is RFC 3339 and can be retrieved from [AWS\\'s GetEntitlements API](https://docs.aws.amazon.com/marketplaceentitlement/latest/APIReference/API_GetEntitlements.html).',\n          format: 'date-time'\n        },\n        aws_is_subscription_product: {\n          type: 'boolean',\n          description: 'True if the aws_product_code is a SAAS subscription product, false otherwise.'\n        },\n        aws_product_code: {\n          type: 'string'\n        },\n        aws_region: {\n          type: 'string',\n          enum: [            'af-south-1',\n            'ap-east-1',\n            'ap-northeast-1',\n            'ap-northeast-2',\n            'ap-northeast-3',\n            'ap-south-1',\n            'ap-southeast-1',\n            'ap-southeast-2',\n            'ca-central-1',\n            'cn-north-1',\n            'cn-northwest-1',\n            'eu-central-1',\n            'eu-north-1',\n            'eu-south-1',\n            'eu-west-1',\n            'eu-west-2',\n            'eu-west-3',\n            'me-south-1',\n            'sa-east-1',\n            'us-east-1',\n            'us-east-2',\n            'us-gov-east-1',\n            'us-gov-west-1',\n            'us-west-1',\n            'us-west-2'\n          ]\n        },\n        azure_expiration_date: {\n          type: 'string',\n          description: 'Subscription term start/end date for the customer. The expected format is RFC 3339 and can be retrieved from [Azure\\'s Get Subscription API](https://learn.microsoft.com/en-us/partner-center/marketplace/partner-center-portal/pc-saas-fulfillment-subscription-api#get-subscription).',\n          format: 'date-time'\n        },\n        azure_plan_id: {\n          type: 'string'\n        },\n        azure_start_date: {\n          type: 'string',\n          description: 'Subscription term start/end date for the customer. The expected format is RFC 3339 and can be retrieved from [Azure\\'s Get Subscription API](https://learn.microsoft.com/en-us/partner-center/marketplace/partner-center-portal/pc-saas-fulfillment-subscription-api#get-subscription).',\n          format: 'date-time'\n        },\n        azure_subscription_status: {\n          type: 'string',\n          enum: [            'Subscribed',\n            'Unsubscribed',\n            'Suspended',\n            'PendingFulfillmentStart'\n          ]\n        },\n        billing_provider_customer_id: {\n          type: 'string'\n        },\n        stripe_collection_method: {\n          type: 'string',\n          enum: [            'charge_automatically',\n            'send_invoice'\n          ]\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'data'\n  ]\n}\n```",
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
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v1.customers.billingConfig.retrieve(body)));
};

export default { metadata, tool, handler };
