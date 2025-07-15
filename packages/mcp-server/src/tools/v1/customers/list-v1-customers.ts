// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/customers',
  operationId: 'listCustomers-v1',
};

export const tool: Tool = {
  name: 'list_v1_customers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all customers.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/customer_detail'\n      }\n    },\n    next_page: {\n      type: 'string'\n    }\n  },\n  required: [    'data',\n    'next_page'\n  ],\n  $defs: {\n    customer_detail: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'the Metronome ID of the customer'\n        },\n        created_at: {\n          type: 'string',\n          description: 'RFC 3339 timestamp indicating when the customer was created.',\n          format: 'date-time'\n        },\n        custom_fields: {\n          type: 'object'\n        },\n        customer_config: {\n          type: 'object',\n          properties: {\n            salesforce_account_id: {\n              type: 'string',\n              description: 'The Salesforce account ID for the customer'\n            }\n          },\n          required: [            'salesforce_account_id'\n          ]\n        },\n        external_id: {\n          type: 'string',\n          description: '(deprecated, use ingest_aliases instead) the first ID (Metronome or ingest alias) that can be used in usage events'\n        },\n        ingest_aliases: {\n          type: 'array',\n          description: 'aliases for this customer that can be used instead of the Metronome customer ID in usage events',\n          items: {\n            type: 'string'\n          }\n        },\n        name: {\n          type: 'string'\n        },\n        archived_at: {\n          type: 'string',\n          description: 'RFC 3339 timestamp indicating when the customer was archived. Null if the customer is active.',\n          format: 'date-time'\n        },\n        current_billable_status: {\n          type: 'object',\n          description: 'This field\\'s availability is dependent on your client\\'s configuration.',\n          properties: {\n            value: {\n              type: 'string',\n              enum: [                'billable',\n                'unbillable'\n              ]\n            },\n            effective_at: {\n              type: 'string',\n              format: 'date-time'\n            }\n          },\n          required: [            'value'\n          ]\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'custom_fields',\n        'customer_config',\n        'external_id',\n        'ingest_aliases',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customer_ids: {
        type: 'array',
        description: 'Filter the customer list by customer_id.  Up to 100 ids can be provided.',
        items: {
          type: 'string',
        },
      },
      ingest_alias: {
        type: 'string',
        description: 'Filter the customer list by ingest_alias',
      },
      limit: {
        type: 'integer',
        description: 'Max number of results that should be returned',
      },
      next_page: {
        type: 'string',
        description: 'Cursor that indicates where the next page of results should start.',
      },
      only_archived: {
        type: 'boolean',
        description:
          'Filter the customer list to only return archived customers. By default, only active customers are returned.',
      },
      salesforce_account_ids: {
        type: 'array',
        description: 'Filter the customer list by salesforce_account_id.  Up to 100 ids can be provided.',
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
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.customers.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
