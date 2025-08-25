// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

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
  name: 'set_customer_billing_configurations_v1_customers',
  description:
    "Create a billing configuration for a customer. Once created, these configurations are available to associate to a contract and dictates which downstream system to collect payment in or send the invoice to. You can create multiple configurations per customer. The configuration formats are distinct for each downstream provider.\n\nUse this endpoint to:\n- Add the initial configuration to an existing customer. Once created, the billing configuration can then be associated to the customer's contract.\n- Add a new configuration to an existing customer. This might be used as part of an upgrade or downgrade workflow where the customer was previously billed through system A (e.g. Stripe) but will now be billed through system B (e.g. AWS). Once created, the new configuration can then be associated to the customer's contract.\n\nDelivery Method Options:\n- direct_to_billing_provider: Use when Metronome should send invoices directly to the billing provider's API (e.g., Stripe, NetSuite). This is the most common method for automated billing workflows.\n- tackle: Use specifically for AWS Marketplace transactions that require Tackle's co-selling platform for partner attribution and commission tracking.\n- aws_sqs: Use when you want invoice data delivered to an AWS SQS queue for custom processing before sending to your billing system.\n- aws_sns: Use when you want invoice notifications published to an AWS SNS topic for event-driven billing workflows.\n\nKey response fields: The id for the customer billing configuration. This id can be used to associate the billing configuration to a contract.\n\nUsage guidelines:\\\nMust use the delivery_method_id if you have multiple Stripe accounts connected to Metronome.\n",
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
          },
          required: ['billing_provider', 'customer_id'],
        },
      },
    },
    required: ['data'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.customers.setCustomerBillingConfigurations(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
