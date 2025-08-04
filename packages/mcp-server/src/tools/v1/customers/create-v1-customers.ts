// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/customers',
  operationId: 'createCustomer-v1',
};

export const tool: Tool = {
  name: 'create_v1_customers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new customer\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/customer'\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    customer: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'the Metronome ID of the customer'\n        },\n        external_id: {\n          type: 'string',\n          description: '(deprecated, use ingest_aliases instead) the first ID (Metronome or ingest alias) that can be used in usage events'\n        },\n        ingest_aliases: {\n          type: 'array',\n          description: 'aliases for this customer that can be used instead of the Metronome customer ID in usage events',\n          items: {\n            type: 'string'\n          }\n        },\n        name: {\n          type: 'string'\n        },\n        custom_fields: {\n          type: 'object'\n        }\n      },\n      required: [        'id',\n        'external_id',\n        'ingest_aliases',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'This will be truncated to 160 characters if the provided name is longer.',
      },
      billing_config: {
        type: 'object',
        properties: {
          billing_provider_customer_id: {
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
          aws_is_subscription_product: {
            type: 'boolean',
            description: 'True if the aws_product_code is a SAAS subscription product, false otherwise.',
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
        required: ['billing_provider_customer_id', 'billing_provider_type'],
      },
      custom_fields: {
        type: 'object',
      },
      customer_billing_provider_configurations: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            billing_provider: {
              type: 'string',
              description: 'The billing provider set for this configuration.',
              enum: ['aws_marketplace', 'azure_marketplace', 'gcp_marketplace', 'stripe', 'netsuite'],
            },
            configuration: {
              type: 'object',
              description:
                'Configuration for the billing provider. The structure of this object is specific to the billing provider and delivery provider combination. Defaults to an empty object, however, for most billing provider + delivery method combinations, it will not be a valid configuration.',
            },
            delivery_method: {
              type: 'string',
              description:
                'The method to use for delivering invoices to this customer. If not provided, the `delivery_method_id` must be provided.',
              enum: ['direct_to_billing_provider', 'aws_sqs', 'tackle', 'aws_sns'],
            },
            delivery_method_id: {
              type: 'string',
              description:
                'ID of the delivery method to use for this customer. If not provided, the `delivery_method` must be provided.',
            },
          },
          required: ['billing_provider'],
        },
      },
      external_id: {
        type: 'string',
        description:
          '(deprecated, use ingest_aliases instead) an alias that can be used to refer to this customer in usage events',
      },
      ingest_aliases: {
        type: 'array',
        description: 'Aliases that can be used to refer to this customer in usage events',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['name'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.v1.customers.create(body)));
};

export default { metadata, tool, handler };
