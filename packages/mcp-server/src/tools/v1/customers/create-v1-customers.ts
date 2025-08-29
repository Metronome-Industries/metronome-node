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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new customer in Metronome and optionally the billing configuration (recommended) which dictates where invoices for the customer will be sent or where payment will be collected. \n\n### Use this endpoint to:\nExecute your customer provisioning workflows for either PLG motions, where customers originate in your platform, or SLG motions, where customers originate in your sales system.\n\n### Key response fields: \nThis end-point returns the `customer_id` created by the request. This id can be used to fetch relevant billing configurations and create contracts.\n\n### Example workflow:\n- Generally, Metronome recommends first creating the customer in the downstream payment / ERP system when payment method is collected and then creating the customer in Metronome using the response (i.e. `customer_id`) from the downstream system. If you do not create a billing configuration on customer creation, you can add it later.        \n- Once a customer is created, you can then create a contract for the customer. In the contract creation process, you will need to add the customer billing configuration to the contract to ensure Metronome invoices the customer correctly. This is because a customer can have multiple configurations.\n- As part of the customer creation process, set the ingest alias for the customer which will ensure usage is accurately mapped to the customer. Ingest aliases can be added or changed after the creation process as well.\n\n### Usage guidelines:\nFor details on different billing configurations for different systems, review the `/setCustomerBillingConfiguration` end-point.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/customer'\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    customer: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'the Metronome ID of the customer'\n        },\n        external_id: {\n          type: 'string',\n          description: '(deprecated, use ingest_aliases instead) the first ID (Metronome or ingest alias) that can be used in usage events'\n        },\n        ingest_aliases: {\n          type: 'array',\n          description: 'aliases for this customer that can be used instead of the Metronome customer ID in usage events',\n          items: {\n            type: 'string'\n          }\n        },\n        name: {\n          type: 'string'\n        },\n        custom_fields: {\n          type: 'object',\n          description: 'Custom fields to be added eg. { \"key1\": \"value1\", \"key2\": \"value2\" }',\n          additionalProperties: true\n        }\n      },\n      required: [        'id',\n        'external_id',\n        'ingest_aliases',\n        'name'\n      ]\n    }\n  }\n}\n```",
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
        description: 'Custom fields to be added eg. { "key1": "value1", "key2": "value2" }',
        additionalProperties: true,
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
              additionalProperties: true,
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
