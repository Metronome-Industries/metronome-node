// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v2.contracts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/contracts/credits/edit',
  operationId: 'editCredit-v2',
};

export const tool: Tool = {
  name: 'edit_credit_v2_contracts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEdit details for a contract-level or customer-level credit. \n\n### Use this endpoint to: \n- Extend the duration or the amount of an existing free credit like a trial \n- Modify individual credit access schedules, applicable products, priority, or other fields. \n\n### Usage guidelines:\n- As with all edits in Metronome, draft invoices will reflect the edit immediately, while finalized invoices are untouched unless voided and regenerated. \n- You cannot remove an access schedule segment that was applied to a finalized invoice. You can void the invoice beforehand and then remove the access schedule segment.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/contract_edit_credit_response',\n  $defs: {\n    contract_edit_credit_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/id'\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    id: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        }\n      },\n      required: [        'id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      credit_id: {
        type: 'string',
        description: 'ID of the credit to edit',
      },
      customer_id: {
        type: 'string',
        description: 'ID of the customer whose credit is being edited',
      },
      access_schedule: {
        type: 'object',
        properties: {
          add_schedule_items: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                amount: {
                  type: 'number',
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
              required: ['amount', 'ending_before', 'starting_at'],
            },
          },
          remove_schedule_items: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                },
              },
              required: ['id'],
            },
          },
          update_schedule_items: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                },
                amount: {
                  type: 'number',
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
              required: ['id'],
            },
          },
        },
      },
      applicable_product_ids: {
        type: 'array',
        description:
          'Which products the credit applies to. If both applicable_product_ids and applicable_product_tags are not provided, the credit applies to all products.',
        items: {
          type: 'string',
        },
      },
      applicable_product_tags: {
        type: 'array',
        description:
          'Which tags the credit applies to. If both applicable_product_ids and applicable_product_tags are not provided, the credit applies to all products.',
        items: {
          type: 'string',
        },
      },
      description: {
        type: 'string',
        description: 'Updated description for the credit',
      },
      hierarchy_configuration: {
        $ref: '#/$defs/commit_hierarchy_configuration',
      },
      name: {
        type: 'string',
        description: 'Updated name for the credit',
      },
      priority: {
        type: 'number',
        description: 'If multiple commits are applicable, the one with the lower priority will apply first.',
      },
      product_id: {
        type: 'string',
      },
      rate_type: {
        type: 'string',
        description:
          'If provided, updates the credit to use the specified rate type for current and future invoices. Previously finalized invoices will need to be voided and regenerated to reflect the rate type change.',
        enum: ['LIST_RATE', 'COMMIT_RATE'],
      },
      specifiers: {
        type: 'array',
        description:
          "List of filters that determine what kind of customer usage draws down a commit or credit. A customer's usage needs to meet the condition of at least one of the specifiers to contribute to a commit's or credit's drawdown. This field cannot be used together with `applicable_product_ids` or `applicable_product_tags`. Instead, to target usage by product or product tag, pass those values in the body of `specifiers`.",
        items: {
          $ref: '#/$defs/commit_specifier_input',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['credit_id', 'customer_id'],
    $defs: {
      commit_hierarchy_configuration: {
        type: 'object',
        properties: {
          child_access: {
            anyOf: [
              {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    enum: ['ALL'],
                  },
                },
                required: ['type'],
              },
              {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    enum: ['NONE'],
                  },
                },
                required: ['type'],
              },
              {
                type: 'object',
                properties: {
                  contract_ids: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },
                  type: {
                    type: 'string',
                    enum: ['CONTRACT_IDS'],
                  },
                },
                required: ['contract_ids', 'type'],
              },
            ],
          },
        },
        required: ['child_access'],
      },
      commit_specifier_input: {
        type: 'object',
        properties: {
          presentation_group_values: {
            type: 'object',
            additionalProperties: true,
          },
          pricing_group_values: {
            type: 'object',
            additionalProperties: true,
          },
          product_id: {
            type: 'string',
            description: 'If provided, the specifier will only apply to the product with the specified ID.',
          },
          product_tags: {
            type: 'array',
            description:
              'If provided, the specifier will only apply to products with all the specified tags.',
            items: {
              type: 'string',
            },
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.v2.contracts.editCredit(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
