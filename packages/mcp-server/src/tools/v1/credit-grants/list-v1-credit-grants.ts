// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.credit_grants',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/credits/listGrants',
  operationId: 'listGrants-v1',
};

export const tool: Tool = {
  name: 'list_v1_credit_grants',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList credit grants. This list does not included voided grants.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'the Metronome ID of the credit grant'\n          },\n          balance: {\n            type: 'object',\n            description: 'The effective balance of the grant as of the end of the customer\\'s current billing period. Expiration deductions will be included only if the grant expires before the end of the current billing period.',\n            properties: {\n              effective_at: {\n                type: 'string',\n                description: 'The end_date of the customer\\'s current billing period.',\n                format: 'date-time'\n              },\n              excluding_pending: {\n                type: 'number',\n                description: 'The grant\\'s current balance including all posted deductions. If the grant has expired, this amount will be 0.'\n              },\n              including_pending: {\n                type: 'number',\n                description: 'The grant\\'s current balance including all posted and pending deductions. If the grant expires before the end of the customer\\'s current billing period, this amount will be 0.'\n              }\n            },\n            required: [              'effective_at',\n              'excluding_pending',\n              'including_pending'\n            ]\n          },\n          custom_fields: {\n            type: 'object',\n            additionalProperties: true\n          },\n          customer_id: {\n            type: 'string',\n            description: 'the Metronome ID of the customer'\n          },\n          deductions: {\n            type: 'array',\n            items: {\n              type: 'object',\n              properties: {\n                amount: {\n                  type: 'number',\n                  description: 'an amount representing the change to the customer\\'s credit balance'\n                },\n                created_by: {\n                  type: 'string'\n                },\n                credit_grant_id: {\n                  type: 'string',\n                  description: 'the credit grant this entry is related to'\n                },\n                effective_at: {\n                  type: 'string',\n                  format: 'date-time'\n                },\n                reason: {\n                  type: 'string'\n                },\n                running_balance: {\n                  type: 'number',\n                  description: 'the running balance for this credit type at the time of the ledger entry, including all preceding charges'\n                },\n                invoice_id: {\n                  type: 'string',\n                  description: 'if this entry is a deduction, the Metronome ID of the invoice where the credit deduction was consumed; if this entry is a grant, the Metronome ID of the invoice where the grant\\'s paid_amount was charged'\n                }\n              },\n              required: [                'amount',\n                'created_by',\n                'credit_grant_id',\n                'effective_at',\n                'reason',\n                'running_balance'\n              ]\n            }\n          },\n          effective_at: {\n            type: 'string',\n            format: 'date-time'\n          },\n          expires_at: {\n            type: 'string',\n            format: 'date-time'\n          },\n          grant_amount: {\n            type: 'object',\n            description: 'the amount of credits initially granted',\n            properties: {\n              amount: {\n                type: 'number'\n              },\n              credit_type: {\n                type: 'object',\n                description: 'the credit type for the amount granted',\n                properties: {\n                  id: {\n                    type: 'string'\n                  },\n                  name: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'id',\n                  'name'\n                ]\n              }\n            },\n            required: [              'amount',\n              'credit_type'\n            ]\n          },\n          name: {\n            type: 'string'\n          },\n          paid_amount: {\n            type: 'object',\n            description: 'the amount paid for this credit grant',\n            properties: {\n              amount: {\n                type: 'number'\n              },\n              credit_type: {\n                type: 'object',\n                description: 'the credit type for the amount paid',\n                properties: {\n                  id: {\n                    type: 'string'\n                  },\n                  name: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'id',\n                  'name'\n                ]\n              }\n            },\n            required: [              'amount',\n              'credit_type'\n            ]\n          },\n          pending_deductions: {\n            type: 'array',\n            items: {\n              type: 'object',\n              properties: {\n                amount: {\n                  type: 'number',\n                  description: 'an amount representing the change to the customer\\'s credit balance'\n                },\n                created_by: {\n                  type: 'string'\n                },\n                credit_grant_id: {\n                  type: 'string',\n                  description: 'the credit grant this entry is related to'\n                },\n                effective_at: {\n                  type: 'string',\n                  format: 'date-time'\n                },\n                reason: {\n                  type: 'string'\n                },\n                running_balance: {\n                  type: 'number',\n                  description: 'the running balance for this credit type at the time of the ledger entry, including all preceding charges'\n                },\n                invoice_id: {\n                  type: 'string',\n                  description: 'if this entry is a deduction, the Metronome ID of the invoice where the credit deduction was consumed; if this entry is a grant, the Metronome ID of the invoice where the grant\\'s paid_amount was charged'\n                }\n              },\n              required: [                'amount',\n                'created_by',\n                'credit_grant_id',\n                'effective_at',\n                'reason',\n                'running_balance'\n              ]\n            }\n          },\n          priority: {\n            type: 'number'\n          },\n          credit_grant_type: {\n            type: 'string'\n          },\n          invoice_id: {\n            type: 'string',\n            description: 'the Metronome ID of the invoice with the purchase charge for this credit grant, if applicable'\n          },\n          products: {\n            type: 'array',\n            description: 'The products which these credits will be applied to. (If unspecified, the credits will be applied to charges for all products.)',\n            items: {\n              type: 'object',\n              properties: {\n                id: {\n                  type: 'string'\n                },\n                name: {\n                  type: 'string'\n                }\n              },\n              required: [                'id',\n                'name'\n              ]\n            }\n          },\n          reason: {\n            type: 'string'\n          },\n          uniqueness_key: {\n            type: 'string',\n            description: 'Prevents the creation of duplicates. If a request to create a record is made with a previously used uniqueness key, a new record will not be created and the request will fail with a 409 error.'\n          }\n        },\n        required: [          'id',\n          'balance',\n          'custom_fields',\n          'customer_id',\n          'deductions',\n          'effective_at',\n          'expires_at',\n          'grant_amount',\n          'name',\n          'paid_amount',\n          'pending_deductions',\n          'priority'\n        ]\n      }\n    },\n    next_page: {\n      type: 'string'\n    }\n  },\n  required: [    'data',\n    'next_page'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'Max number of results that should be returned',
      },
      next_page: {
        type: 'string',
        description: 'Cursor that indicates where the next page of results should start.',
      },
      credit_grant_ids: {
        type: 'array',
        description:
          'An array of credit grant IDs. If this is specified, neither credit_type_ids nor customer_ids may be specified.',
        items: {
          type: 'string',
        },
      },
      credit_type_ids: {
        type: 'array',
        description:
          'An array of credit type IDs. This must not be specified if credit_grant_ids is specified.',
        items: {
          type: 'string',
        },
      },
      customer_ids: {
        type: 'array',
        description:
          'An array of Metronome customer IDs. This must not be specified if credit_grant_ids is specified.',
        items: {
          type: 'string',
        },
      },
      effective_before: {
        type: 'string',
        description: 'Only return credit grants that are effective before this timestamp (exclusive).',
        format: 'date-time',
      },
      not_expiring_before: {
        type: 'string',
        description: 'Only return credit grants that expire at or after this timestamp.',
        format: 'date-time',
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
  const response = await client.v1.creditGrants.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
