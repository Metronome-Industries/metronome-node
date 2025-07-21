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
  httpPath: '/v1/credits/listEntries',
  operationId: 'listCreditLedgerEntries-v1',
};

export const tool: Tool = {
  name: 'list_entries_v1_credit_grants',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches a list of credit ledger entries. Returns lists of ledgers per customer. Ledger entries are returned in chronological order. Ledger entries associated with voided credit grants are not included.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          customer_id: {\n            type: 'string'\n          },\n          ledgers: {\n            type: 'array',\n            items: {\n              type: 'object',\n              properties: {\n                credit_type: {\n                  $ref: '#/$defs/credit_type_data'\n                },\n                ending_balance: {\n                  type: 'object',\n                  description: 'the effective balances at the end of the specified time window',\n                  properties: {\n                    effective_at: {\n                      type: 'string',\n                      description: 'the ending_before request parameter (if supplied) or the current billing period\\'s end date',\n                      format: 'date-time'\n                    },\n                    excluding_pending: {\n                      type: 'number',\n                      description: 'the ending balance, including the balance of all grants that have not expired before the effective_at date and deductions that happened before the effective_at date'\n                    },\n                    including_pending: {\n                      type: 'number',\n                      description: 'the excluding_pending balance plus any pending invoice deductions and expirations that will happen by the effective_at date'\n                    }\n                  },\n                  required: [                    'effective_at',\n                    'excluding_pending',\n                    'including_pending'\n                  ]\n                },\n                entries: {\n                  type: 'array',\n                  items: {\n                    $ref: '#/$defs/credit_ledger_entry'\n                  }\n                },\n                pending_entries: {\n                  type: 'array',\n                  items: {\n                    $ref: '#/$defs/credit_ledger_entry'\n                  }\n                },\n                starting_balance: {\n                  type: 'object',\n                  properties: {\n                    effective_at: {\n                      type: 'string',\n                      description: 'the starting_on request parameter (if supplied) or the first credit grant\\'s effective_at date',\n                      format: 'date-time'\n                    },\n                    excluding_pending: {\n                      type: 'number',\n                      description: 'the starting balance, including all posted grants, deductions, and expirations that happened at or before the effective_at timestamp'\n                    },\n                    including_pending: {\n                      type: 'number',\n                      description: 'the excluding_pending balance plus any pending activity that has not been posted at the time of the query'\n                    }\n                  },\n                  required: [                    'effective_at',\n                    'excluding_pending',\n                    'including_pending'\n                  ]\n                }\n              },\n              required: [                'credit_type',\n                'ending_balance',\n                'entries',\n                'pending_entries',\n                'starting_balance'\n              ]\n            }\n          }\n        },\n        required: [          'customer_id',\n          'ledgers'\n        ]\n      }\n    },\n    next_page: {\n      type: 'string'\n    }\n  },\n  required: [    'data',\n    'next_page'\n  ],\n  $defs: {\n    credit_type_data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'name'\n      ]\n    },\n    credit_ledger_entry: {\n      type: 'object',\n      properties: {\n        amount: {\n          type: 'number',\n          description: 'an amount representing the change to the customer\\'s credit balance'\n        },\n        created_by: {\n          type: 'string'\n        },\n        credit_grant_id: {\n          type: 'string',\n          description: 'the credit grant this entry is related to'\n        },\n        effective_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        reason: {\n          type: 'string'\n        },\n        running_balance: {\n          type: 'number',\n          description: 'the running balance for this credit type at the time of the ledger entry, including all preceding charges'\n        },\n        invoice_id: {\n          type: 'string',\n          description: 'if this entry is a deduction, the Metronome ID of the invoice where the credit deduction was consumed; if this entry is a grant, the Metronome ID of the invoice where the grant\\'s paid_amount was charged'\n        }\n      },\n      required: [        'amount',\n        'created_by',\n        'credit_grant_id',\n        'effective_at',\n        'reason',\n        'running_balance'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      next_page: {
        type: 'string',
        description: 'Cursor that indicates where the next page of results should start.',
      },
      sort: {
        type: 'string',
        description: 'Ledgers sort order by date, asc or desc. Defaults to asc.',
        enum: ['asc', 'desc'],
      },
      credit_type_ids: {
        type: 'array',
        description:
          'A list of Metronome credit type IDs to fetch ledger entries for. If absent, ledger entries for all credit types will be returned.',
        items: {
          type: 'string',
        },
      },
      customer_ids: {
        type: 'array',
        description:
          'A list of Metronome customer IDs to fetch ledger entries for. If absent, ledger entries for all customers will be returned.',
        items: {
          type: 'string',
        },
      },
      ending_before: {
        type: 'string',
        description:
          "If supplied, ledger entries will only be returned with an effective_at before this time. This timestamp must not be in the future. If no timestamp is supplied, all entries up to the start of the customer's next billing period will be returned.",
        format: 'date-time',
      },
      starting_on: {
        type: 'string',
        description: 'If supplied, only ledger entries effective at or after this time will be returned.',
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
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v1.creditGrants.listEntries(body)));
};

export default { metadata, tool, handler };
