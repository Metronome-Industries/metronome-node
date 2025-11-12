// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.settings.billing_providers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/listConfiguredBillingProviders',
  operationId: 'listConfiguredBillingProviders-v1',
};

export const tool: Tool = {
  name: 'list_settings_v1_billing_providers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists all configured billing providers and their delivery method configurations for your account. Returns provider details, delivery method IDs, and configuration settings needed for mapping individual customer contracts to billing integrations.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/billing_provider_list_response',\n  $defs: {\n    billing_provider_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              billing_provider: {\n                type: 'string',\n                description: 'The billing provider set for this configuration.',\n                enum: [                  'aws_marketplace',\n                  'stripe',\n                  'netsuite',\n                  'custom',\n                  'azure_marketplace',\n                  'quickbooks_online',\n                  'workday',\n                  'gcp_marketplace',\n                  'metronome'\n                ]\n              },\n              delivery_method: {\n                type: 'string',\n                description: 'The method to use for delivering invoices to this customer.',\n                enum: [                  'direct_to_billing_provider',\n                  'aws_sqs',\n                  'tackle',\n                  'aws_sns'\n                ]\n              },\n              delivery_method_configuration: {\n                type: 'object',\n                description: 'Configuration for the delivery method. The structure of this object is specific to the delivery method. Some configuration may be omitted for security reasons.',\n                additionalProperties: true\n              },\n              delivery_method_id: {\n                type: 'string',\n                description: 'ID of the delivery method to use for this customer.'\n              }\n            },\n            required: [              'billing_provider',\n              'delivery_method',\n              'delivery_method_configuration',\n              'delivery_method_id'\n            ]\n          }\n        },\n        next_page: {\n          type: 'string'\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      next_page: {
        type: 'string',
        description: 'The cursor to the next page of results',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.v1.settings.billingProviders.list(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
