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
  httpPath: '/v1/setUpBillingProvider',
  operationId: 'setUpBillingProvider-v1',
};

export const tool: Tool = {
  name: 'create_settings_v1_billing_providers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSet up account-level configuration for a billing provider. Once configured, individual contracts across customers can be mapped to this configuration using the returned delivery_method_id.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/billing_provider_create_response',\n  $defs: {\n    billing_provider_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            delivery_method_id: {\n              type: 'string'\n            }\n          },\n          required: [            'delivery_method_id'\n          ]\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      billing_provider: {
        type: 'string',
        description: 'The billing provider set for this configuration.',
        enum: ['aws_marketplace', 'azure_marketplace', 'gcp_marketplace'],
      },
      configuration: {
        type: 'object',
        description:
          'Account-level configuration for the billing provider. The structure of this object is specific to the billing provider and delivery provider combination. See examples below.',
        additionalProperties: true,
      },
      delivery_method: {
        type: 'string',
        description: 'The method to use for delivering invoices for this configuration.',
        enum: ['direct_to_billing_provider', 'aws_sqs', 'aws_sns'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['billing_provider', 'configuration', 'delivery_method'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.v1.settings.billingProviders.create(body)),
    );
  } catch (error) {
    if (error instanceof Metronome.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
