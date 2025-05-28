// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
    'Edit a customer or contract commit. Contract commits can only be edited using this endpoint if contract editing is enabled.',
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
        required: [],
      },
      applicable_product_ids: {
        type: 'array',
        description:
          'Which products the commit applies to. If both applicable_product_ids and applicable_product_tags are not provided, the commit applies to all products.',
        items: {
          type: 'string',
        },
      },
      applicable_product_tags: {
        type: 'array',
        description:
          'Which tags the commit applies to. If both applicable_product_ids and applicable_product_tags are not provided, the commit applies to all products.',
        items: {
          type: 'string',
        },
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
        required: [],
      },
      product_id: {
        type: 'string',
      },
      specifiers: {
        type: 'array',
        description:
          "List of filters that determine what kind of customer usage draws down a commit or credit. A customer's usage needs to meet the condition of at least one of the specifiers to contribute to a commit's or credit's drawdown. This field cannot be used together with `applicable_product_ids` or `applicable_product_tags`.",
        items: {
          type: 'object',
          properties: {
            presentation_group_values: {
              type: 'object',
            },
            pricing_group_values: {
              type: 'object',
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
          required: [],
        },
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.contracts.editCommit(body);
};

export default { metadata, tool, handler };
