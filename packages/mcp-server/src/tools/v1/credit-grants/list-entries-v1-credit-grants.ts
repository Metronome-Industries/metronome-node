// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
    'Fetches a list of credit ledger entries. Returns lists of ledgers per customer. Ledger entries are returned in chronological order. Ledger entries associated with voided credit grants are not included.',
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
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.creditGrants.listEntries(body));
};

export default { metadata, tool, handler };
