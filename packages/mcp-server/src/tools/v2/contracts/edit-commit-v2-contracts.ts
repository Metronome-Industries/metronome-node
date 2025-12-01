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
  httpPath: '/v2/contracts/commits/edit',
  operationId: 'editCommit-v2',
};

export const tool: Tool = {
  name: 'edit_commit_v2_contracts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEdit specific details for a contract-level or customer-level commit. Use this endpoint to modify individual commit access schedules, invoice schedules, applicable products, invoicing contracts, or other fields. \n\n### Usage guidelines:\n- As with all edits in Metronome, draft invoices will reflect the edit immediately, while finalized invoices are untouched unless voided and regenerated.\n- If a commit's invoice schedule item is associated with a finalized invoice, you cannot remove or update the invoice schedule item.\n- If a commit's invoice schedule item is associated with a voided invoice, you cannot remove the invoice schedule item.\n- You cannot remove an commit access schedule segment that was applied to a finalized invoice. You can void the invoice beforehand and then remove the access schedule segment.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/contract_edit_commit_response',\n  $defs: {\n    contract_edit_commit_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/id'\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    id: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        }\n      },\n      required: [        'id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      commit_id: {
        type: 'string',
        description: 'ID of the commit to edit',
      },
      customer_id: {
        type: 'string',
        description: 'ID of the customer whose commit is being edited',
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
          'Which products the commit applies to. If applicable_product_ids, applicable_product_tags or specifiers are not provided, the commit applies to all products.',
        items: {
          type: 'string',
        },
      },
      applicable_product_tags: {
        type: 'array',
        description:
          'Which tags the commit applies to. If applicable_product_ids, applicable_product_tags or specifiers are not provided, the commit applies to all products.',
        items: {
          type: 'string',
        },
      },
      description: {
        type: 'string',
        description: 'Updated description for the commit',
      },
      hierarchy_configuration: {
        $ref: '#/$defs/commit_hierarchy_configuration',
      },
      invoice_contract_id: {
        type: 'string',
        description: 'ID of contract to use for invoicing',
      },
      invoice_schedule: {
        type: 'object',
        properties: {
          add_schedule_items: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                timestamp: {
                  type: 'string',
                  format: 'date-time',
                },
                amount: {
                  type: 'number',
                },
                quantity: {
                  type: 'number',
                },
                unit_price: {
                  type: 'number',
                },
              },
              required: ['timestamp'],
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
                quantity: {
                  type: 'number',
                },
                timestamp: {
                  type: 'string',
                  format: 'date-time',
                },
                unit_price: {
                  type: 'number',
                },
              },
              required: ['id'],
            },
          },
        },
      },
      name: {
        type: 'string',
        description: 'Updated name for the commit',
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
          'If provided, updates the commit to use the specified rate type for current and future invoices. Previously finalized invoices will need to be voided and regenerated to reflect the rate type change.',
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
    required: ['commit_id', 'customer_id'],
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.v2.contracts.editCommit(body)));
  } catch (error) {
    if (error instanceof Metronome.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
