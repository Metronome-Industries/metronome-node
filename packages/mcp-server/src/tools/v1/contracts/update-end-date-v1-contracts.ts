// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contracts/updateEndDate',
  operationId: 'updateContractEndDate-v1',
};

export const tool: Tool = {
  name: 'update_end_date_v1_contracts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate or add an end date to a contract. Ending a contract early will impact draft usage statements, truncate any terms, and remove upcoming scheduled invoices. Moving the date into the future will only extend the contract length. Terms and scheduled invoices are not extended. In-advance subscriptions will not be extended. Use this if a contract's end date has changed or if a perpetual contract ends.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/contract_update_end_date_response',\n  $defs: {\n    contract_update_end_date_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/id'\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    id: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        }\n      },\n      required: [        'id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      contract_id: {
        type: 'string',
        description: 'ID of the contract to update',
      },
      customer_id: {
        type: 'string',
        description: 'ID of the customer whose contract is to be updated',
      },
      allow_ending_before_finalized_invoice: {
        type: 'boolean',
        description:
          'If true, allows setting the contract end date earlier than the end_timestamp of existing finalized invoices. Finalized invoices will be unchanged; if you want to incorporate the new end date, you can void and regenerate finalized usage invoices. Defaults to true.',
      },
      ending_before: {
        type: 'string',
        description:
          'RFC 3339 timestamp indicating when the contract will end (exclusive). If not provided, the contract will be updated to be open-ended.',
        format: 'date-time',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['contract_id', 'customer_id'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.v1.contracts.updateEndDate(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
