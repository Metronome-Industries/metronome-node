// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.plans',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/planDetails/{plan_id}/customers',
  operationId: 'getPlanCustomers-v1',
};

export const tool: Tool = {
  name: 'list_customers_v1_plans',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches a list of customers on a specific plan (by default, only currently active plans are included)\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          customer_details: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'the Metronome ID of the customer'\n              },\n              created_at: {\n                type: 'string',\n                description: 'RFC 3339 timestamp indicating when the customer was created.',\n                format: 'date-time'\n              },\n              custom_fields: {\n                type: 'object',\n                additionalProperties: true\n              },\n              customer_config: {\n                type: 'object',\n                properties: {\n                  salesforce_account_id: {\n                    type: 'string',\n                    description: 'The Salesforce account ID for the customer'\n                  }\n                },\n                required: [                  'salesforce_account_id'\n                ]\n              },\n              external_id: {\n                type: 'string',\n                description: '(deprecated, use ingest_aliases instead) the first ID (Metronome or ingest alias) that can be used in usage events'\n              },\n              ingest_aliases: {\n                type: 'array',\n                description: 'aliases for this customer that can be used instead of the Metronome customer ID in usage events',\n                items: {\n                  type: 'string'\n                }\n              },\n              name: {\n                type: 'string'\n              },\n              archived_at: {\n                type: 'string',\n                description: 'RFC 3339 timestamp indicating when the customer was archived. Null if the customer is active.',\n                format: 'date-time'\n              },\n              current_billable_status: {\n                type: 'object',\n                description: 'This field\\'s availability is dependent on your client\\'s configuration.',\n                properties: {\n                  value: {\n                    type: 'string',\n                    enum: [                      'billable',\n                      'unbillable'\n                    ]\n                  },\n                  effective_at: {\n                    type: 'string',\n                    format: 'date-time'\n                  }\n                },\n                required: [                  'value'\n                ]\n              }\n            },\n            required: [              'id',\n              'created_at',\n              'custom_fields',\n              'customer_config',\n              'external_id',\n              'ingest_aliases',\n              'name'\n            ]\n          },\n          plan_details: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              custom_fields: {\n                type: 'object',\n                additionalProperties: true\n              },\n              customer_plan_id: {\n                type: 'string'\n              },\n              name: {\n                type: 'string'\n              },\n              starting_on: {\n                type: 'string',\n                description: 'The start date of the plan',\n                format: 'date-time'\n              },\n              ending_before: {\n                type: 'string',\n                description: 'The end date of the plan',\n                format: 'date-time'\n              }\n            },\n            required: [              'id',\n              'custom_fields',\n              'customer_plan_id',\n              'name',\n              'starting_on'\n            ]\n          }\n        },\n        required: [          'customer_details',\n          'plan_details'\n        ]\n      }\n    },\n    next_page: {\n      type: 'string'\n    }\n  },\n  required: [    'data',\n    'next_page'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      plan_id: {
        type: 'string',
      },
      limit: {
        type: 'integer',
        description: 'Max number of results that should be returned',
      },
      next_page: {
        type: 'string',
        description: 'Cursor that indicates where the next page of results should start.',
      },
      status: {
        type: 'string',
        description:
          "Status of customers on a given plan. Defaults to `active`.\n\n* `all` - Return current, past, and upcoming customers of the plan.\n* `active` - Return current customers of the plan.\n* `ended` - Return past customers of the plan.\n* `upcoming` - Return upcoming customers of the plan.\n\nMultiple statuses can be OR'd together using commas, e.g. `active,ended`.\n**Note:** `ended,upcoming` combination is not yet supported.",
        enum: ['all', 'active', 'ended', 'upcoming'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['plan_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.v1.plans.listCustomers(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
