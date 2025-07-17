// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.custom_fields',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/customFields/addKey',
  operationId: 'addCustomFieldKey-v1',
};

export const tool: Tool = {
  name: 'add_key_v1_custom_fields',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAdd a key to the allow list for a given entity. There is a 100 character limit on custom field keys.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      enforce_uniqueness: {
        type: 'boolean',
      },
      entity: {
        type: 'string',
        enum: [
          'alert',
          'billable_metric',
          'charge',
          'commit',
          'contract_credit',
          'contract_product',
          'contract',
          'credit_grant',
          'customer_plan',
          'customer',
          'discount',
          'invoice',
          'plan',
          'professional_service',
          'product',
          'rate_card',
          'scheduled_charge',
          'subscription',
        ],
      },
      key: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['enforce_uniqueness', 'entity', 'key'],
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.customFields.addKey(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
