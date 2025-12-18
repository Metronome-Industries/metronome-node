// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/setCustomerBillingProviderConfigurations',
  operationId: 'setCustomerBillingProviderConfigurations-v1',
};

export const tool: Tool = {
  name: 'set_billing_configurations_v1_customers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a billing configuration for a customer. Once created, these configurations are available to associate to a contract and dictates which downstream system to collect payment in or send the invoice to. You can create multiple configurations per customer. The configuration formats are distinct for each downstream provider.\n\n### Use this endpoint to:\n- Add the initial configuration to an existing customer. Once created, the billing configuration can then be associated to the customer's contract.\n- Add a new configuration to an existing customer. This might be used as part of an upgrade or downgrade workflow where the customer was previously billed through system A (e.g. Stripe) but will now be billed through system B (e.g. AWS). Once created, the new configuration can then be associated to the customer's contract.\n- Multiple configurations can be added per destination. For example, you can create two Stripe billing configurations for a Metronome customer that each have a distinct `collection_method`.\n\n### Delivery method options:\n- `direct_to_billing_provider`: Use when Metronome should send invoices directly to the billing provider's API (e.g., Stripe, NetSuite). This is the most common method for automated billing workflows.\n- `tackle`: Use specifically for AWS Marketplace transactions that require Tackle's co-selling platform for partner attribution and commission tracking.\n- `aws_sqs`: Use when you want invoice data delivered to an AWS SQS queue for custom processing before sending to your billing system.\n- `aws_sns`: Use when you want invoice notifications published to an AWS SNS topic for event-driven billing workflows.\n\n### Key response fields: \nThe id for the customer billing configuration. This id can be used to associate the billing configuration to a contract.\n\n### Usage guidelines:\nMust use the `delivery_method_id` if you have multiple Stripe accounts connected to Metronome.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/customer_set_billing_configurations_response',\n  $defs: {\n    customer_set_billing_configurations_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'ID of the created configuration'\n              },\n              billing_provider: {\n                type: 'string',\n                description: 'The billing provider set for this configuration.',\n                enum: [                  'aws_marketplace',\n                  'stripe',\n                  'netsuite',\n                  'custom',\n                  'azure_marketplace',\n                  'quickbooks_online',\n                  'workday',\n                  'gcp_marketplace',\n                  'metronome'\n                ]\n              },\n              configuration: {\n                type: 'object',\n                description: 'Configuration for the billing provider. The structure of this object is specific to the billing provider and delivery method combination.',\n                additionalProperties: true\n              },\n              customer_id: {\n                type: 'string',\n                description: 'ID of the customer this configuration is associated with.'\n              },\n              delivery_method_id: {\n                type: 'string',\n                description: 'ID of the delivery method used for this customer configuration.'\n              },\n              tax_provider: {\n                type: 'string',\n                description: 'The tax provider set for this configuration.',\n                enum: [                  'anrok',\n                  'avalara',\n                  'stripe'\n                ]\n              }\n            }\n          }\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      data: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            billing_provider: {
              type: 'string',
              description: 'The billing provider set for this configuration.',
              enum: [
                'aws_marketplace',
                'stripe',
                'netsuite',
                'custom',
                'azure_marketplace',
                'quickbooks_online',
                'workday',
                'gcp_marketplace',
                'metronome',
              ],
            },
            customer_id: {
              type: 'string',
            },
            configuration: {
              type: 'object',
              description:
                'Configuration for the billing provider. The structure of this object is specific to the billing provider and delivery method combination. Defaults to an empty object, however, for most billing provider + delivery method combinations, it will not be a valid configuration.  For AWS marketplace configurations, the aws_is_subscription_product flag can be used to indicate a product with usage-based pricing.  More information can be found [here](https://docs.metronome.com/invoice-customers/solutions/marketplaces/invoice-aws/#provision-aws-marketplace-customers-in-metronome).',
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
            tax_provider: {
              type: 'string',
              description:
                'Specifies which tax provider Metronome should use for tax calculation when billing through Stripe. This is only supported for Stripe billing provider configurations with auto_charge_payment_intent or manual_charge_payment_intent collection methods.',
              enum: ['anrok', 'avalara', 'stripe'],
            },
          },
          required: ['billing_provider', 'customer_id'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['data'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.v1.customers.setBillingConfigurations(body)),
    );
  } catch (error) {
    if (error instanceof Metronome.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
