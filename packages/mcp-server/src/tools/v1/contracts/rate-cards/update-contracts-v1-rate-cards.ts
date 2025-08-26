// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts.rateCards',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contract-pricing/rate-cards/update',
  operationId: 'updateRateCard-v1',
};

export const tool: Tool = {
  name: 'update_contracts_v1_rate_cards',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate the metadata properties of an existing rate card, including its name, description, and aliases. This endpoint is designed for managing rate card identity and reference aliases rather than modifying pricing rates.\n\nWhat This Endpoint Does:\nModifies the descriptive properties and alias configuration of a rate card without affecting the underlying pricing rates or schedules. This allows you to update how a rate card is identified and referenced throughout your system.\n\nUse this endpoint to:\n- Rate card renaming: Update display names or descriptions for organizational clarity\n- Alias management: Add, modify, or schedule alias transitions for seamless rate card migrations\n- Documentation updates: Keep rate card descriptions current with business context\n- Self-serve provisioning setup: Configure aliases to enable code-free rate card transitions\n\nActive contract impact:\n- Alias changes: Already-created contracts continue using their originally assigned rate cards.\n- Other changes made using this endpoint will only impact the Metronome UI.\n\nGrandfathering existing PLG customer pricing:\n- Rate card aliases support scheduled transitions, enabling seamless rate card migrations for new customers, allowing existing customers to be grandfathered into their existing prices without code. Note that there are multiple mechanisms to support grandfathering in Metronome. \n\nHow scheduled aliases work for PLG grandfathering:\nInitial setup:\n- Add alias to current rate card: Assign a stable alias (e.g., \"standard-pricing\") to your active rate card\n- Reference alias during contract creation: Configure your self-serve workflow to create contracts using rate_card_alias instead of direct rate_card_id\n- Automatic resolution: New contracts referencing the alias automatically resolve to the rate card associated with the alias at the point in time of provisioning\n\nGrandfathering process:\n- Create new rate card: Build your new rate card with updated pricing structure\n- Schedule alias transition: Add the same alias to the new rate card with a starting_at timestamp\n- Automatic cutover: Starting at the scheduled time, new contracts created in your PLG workflow using that alias will automatically reference the new rate card\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        }\n      },\n      required: [        'id'\n      ]\n    }\n  },\n  required: [    'data'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      rate_card_id: {
        type: 'string',
        description: 'ID of the rate card to update',
      },
      aliases: {
        type: 'array',
        description:
          'Reference this alias when creating a contract. If the same alias is assigned to multiple rate cards, it will reference the rate card to which it was most recently assigned. It is not exposed to end customers.',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
            ending_before: {
              type: 'string',
              format: 'date-time',
            },
            starting_at: {
              type: 'string',
              format: 'date-time',
            },
          },
          required: ['name'],
        },
      },
      description: {
        type: 'string',
      },
      name: {
        type: 'string',
        description: 'Used only in UI/API. It is not exposed to end customers.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['rate_card_id'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.v1.contracts.rateCards.update(body)));
};

export default { metadata, tool, handler };
