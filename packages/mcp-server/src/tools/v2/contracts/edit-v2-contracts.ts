// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v2.contracts',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_v2_contracts',
  description: 'Edit a contract. Contract editing must be enabled to use this endpoint.',
  inputSchema: {
    type: 'object',
    properties: {
      contract_id: {
        type: 'string',
        description: 'ID of the contract being edited',
      },
      customer_id: {
        type: 'string',
        description: 'ID of the customer whose contract is being edited',
      },
      add_commits: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            product_id: {
              type: 'string',
            },
            type: {
              type: 'string',
              enum: ['PREPAID', 'POSTPAID'],
            },
            access_schedule: {
              type: 'object',
              description:
                'Required: Schedule for distributing the commit to the customer. For "POSTPAID" commits only one schedule item is allowed and amount must match invoice_schedule total.',
              properties: {
                schedule_items: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      amount: {
                        type: 'number',
                      },
                      ending_before: {
                        type: 'string',
                        description: 'RFC 3339 timestamp (exclusive)',
                        format: 'date-time',
                      },
                      starting_at: {
                        type: 'string',
                        description: 'RFC 3339 timestamp (inclusive)',
                        format: 'date-time',
                      },
                    },
                    required: ['amount', 'ending_before', 'starting_at'],
                  },
                },
                credit_type_id: {
                  type: 'string',
                },
              },
              required: ['schedule_items'],
            },
            amount: {
              type: 'number',
              description: '(DEPRECATED) Use access_schedule and invoice_schedule instead.',
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
            custom_fields: {
              type: 'object',
            },
            description: {
              type: 'string',
              description: 'Used only in UI/API. It is not exposed to end customers.',
            },
            invoice_schedule: {
              type: 'object',
              description:
                'Required for "POSTPAID" commits: the true up invoice will be generated at this time and only one schedule item is allowed; the total must match access_schedule amount. Optional for "PREPAID" commits: if not provided, this will be a "complimentary" commit with no invoice.',
              properties: {
                credit_type_id: {
                  type: 'string',
                  description: 'Defaults to USD if not passed. Only USD is supported at this time.',
                },
                recurring_schedule: {
                  type: 'object',
                  description:
                    'Enter the unit price and quantity for the charge or instead only send the amount. If amount is sent, the unit price is assumed to be the amount and quantity is inferred to be 1.',
                  properties: {
                    amount_distribution: {
                      type: 'string',
                      enum: ['DIVIDED', 'DIVIDED_ROUNDED', 'EACH'],
                    },
                    ending_before: {
                      type: 'string',
                      description: 'RFC 3339 timestamp (exclusive).',
                      format: 'date-time',
                    },
                    frequency: {
                      type: 'string',
                      enum: ['MONTHLY', 'QUARTERLY', 'SEMI_ANNUAL', 'ANNUAL', 'WEEKLY'],
                    },
                    starting_at: {
                      type: 'string',
                      description: 'RFC 3339 timestamp (inclusive).',
                      format: 'date-time',
                    },
                    amount: {
                      type: 'number',
                      description:
                        'Amount for the charge. Can be provided instead of unit_price and quantity. If amount is sent, the unit_price is assumed to be the amount and quantity is inferred to be 1.',
                    },
                    quantity: {
                      type: 'number',
                      description:
                        'Quantity for the charge. Will be multiplied by unit_price to determine the amount and must be specified with unit_price. If specified amount cannot be provided.',
                    },
                    unit_price: {
                      type: 'number',
                      description:
                        'Unit price for the charge. Will be multiplied by quantity to determine the amount and must be specified with quantity. If specified amount cannot be provided.',
                    },
                  },
                  required: ['amount_distribution', 'ending_before', 'frequency', 'starting_at'],
                },
                schedule_items: {
                  type: 'array',
                  description: 'Either provide amount or provide both unit_price and quantity.',
                  items: {
                    type: 'object',
                    properties: {
                      timestamp: {
                        type: 'string',
                        description: 'timestamp of the scheduled event',
                        format: 'date-time',
                      },
                      amount: {
                        type: 'number',
                        description:
                          'Amount for the charge. Can be provided instead of unit_price and quantity. If amount is sent, the unit_price is assumed to be the amount and quantity is inferred to be 1.',
                      },
                      quantity: {
                        type: 'number',
                        description:
                          'Quantity for the charge. Will be multiplied by unit_price to determine the amount and must be specified with unit_price. If specified amount cannot be provided.',
                      },
                      unit_price: {
                        type: 'number',
                        description:
                          'Unit price for the charge. Will be multiplied by quantity to determine the amount and must be specified with quantity. If specified amount cannot be provided.',
                      },
                    },
                    required: ['timestamp'],
                  },
                },
              },
              required: [],
            },
            name: {
              type: 'string',
              description: 'displayed on invoices',
            },
            netsuite_sales_order_id: {
              type: 'string',
              description: "This field's availability is dependent on your client's configuration.",
            },
            payment_gate_config: {
              type: 'object',
              description: 'optionally payment gate this commit',
              properties: {
                payment_gate_type: {
                  type: 'string',
                  description:
                    'Gate access to the commit balance based on successful collection of payment. Select STRIPE for Metronome to facilitate payment via Stripe. Select EXTERNAL to facilitate payment using your own payment integration. Select NONE if you do not wish to payment gate the commit balance.',
                  enum: ['NONE', 'STRIPE', 'EXTERNAL'],
                },
                stripe_config: {
                  type: 'object',
                  description: 'Only applicable if using Stripe as your payment gateway through Metronome.',
                  properties: {
                    payment_type: {
                      type: 'string',
                      description: 'If left blank, will default to INVOICE',
                      enum: ['INVOICE', 'PAYMENT_INTENT'],
                    },
                  },
                  required: ['payment_type'],
                },
                tax_type: {
                  type: 'string',
                  description:
                    'Stripe tax is only supported for Stripe payment gateway. Select NONE if you do not wish Metronome to calculate tax on your behalf. Leaving this field blank will default to NONE.',
                  enum: ['NONE', 'STRIPE'],
                },
              },
              required: ['payment_gate_type'],
            },
            priority: {
              type: 'number',
              description:
                'If multiple commits are applicable, the one with the lower priority will apply first.',
            },
            rate_type: {
              type: 'string',
              enum: ['COMMIT_RATE', 'LIST_RATE'],
            },
            rollover_fraction: {
              type: 'number',
              description: 'Fraction of unused segments that will be rolled over. Must be between 0 and 1.',
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
                    description:
                      'If provided, the specifier will only apply to the product with the specified ID.',
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
            temporary_id: {
              type: 'string',
              description:
                'A temporary ID for the commit that can be used to reference the commit for commit specific overrides.',
            },
          },
          required: ['product_id', 'type'],
        },
      },
      add_credits: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            access_schedule: {
              type: 'object',
              description: 'Schedule for distributing the credit to the customer.',
              properties: {
                schedule_items: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      amount: {
                        type: 'number',
                      },
                      ending_before: {
                        type: 'string',
                        description: 'RFC 3339 timestamp (exclusive)',
                        format: 'date-time',
                      },
                      starting_at: {
                        type: 'string',
                        description: 'RFC 3339 timestamp (inclusive)',
                        format: 'date-time',
                      },
                    },
                    required: ['amount', 'ending_before', 'starting_at'],
                  },
                },
                credit_type_id: {
                  type: 'string',
                },
              },
              required: ['schedule_items'],
            },
            product_id: {
              type: 'string',
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
            custom_fields: {
              type: 'object',
            },
            description: {
              type: 'string',
              description: 'Used only in UI/API. It is not exposed to end customers.',
            },
            name: {
              type: 'string',
              description: 'displayed on invoices',
            },
            netsuite_sales_order_id: {
              type: 'string',
              description: "This field's availability is dependent on your client's configuration.",
            },
            priority: {
              type: 'number',
              description:
                'If multiple credits are applicable, the one with the lower priority will apply first.',
            },
            rate_type: {
              type: 'string',
              enum: ['COMMIT_RATE', 'LIST_RATE'],
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
                    description:
                      'If provided, the specifier will only apply to the product with the specified ID.',
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
          required: ['access_schedule', 'product_id'],
        },
      },
      add_discounts: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            product_id: {
              type: 'string',
            },
            schedule: {
              type: 'object',
              description: 'Must provide either schedule_items or recurring_schedule.',
              properties: {
                credit_type_id: {
                  type: 'string',
                  description: 'Defaults to USD if not passed. Only USD is supported at this time.',
                },
                recurring_schedule: {
                  type: 'object',
                  description:
                    'Enter the unit price and quantity for the charge or instead only send the amount. If amount is sent, the unit price is assumed to be the amount and quantity is inferred to be 1.',
                  properties: {
                    amount_distribution: {
                      type: 'string',
                      enum: ['DIVIDED', 'DIVIDED_ROUNDED', 'EACH'],
                    },
                    ending_before: {
                      type: 'string',
                      description: 'RFC 3339 timestamp (exclusive).',
                      format: 'date-time',
                    },
                    frequency: {
                      type: 'string',
                      enum: ['MONTHLY', 'QUARTERLY', 'SEMI_ANNUAL', 'ANNUAL', 'WEEKLY'],
                    },
                    starting_at: {
                      type: 'string',
                      description: 'RFC 3339 timestamp (inclusive).',
                      format: 'date-time',
                    },
                    amount: {
                      type: 'number',
                      description:
                        'Amount for the charge. Can be provided instead of unit_price and quantity. If amount is sent, the unit_price is assumed to be the amount and quantity is inferred to be 1.',
                    },
                    quantity: {
                      type: 'number',
                      description:
                        'Quantity for the charge. Will be multiplied by unit_price to determine the amount and must be specified with unit_price. If specified amount cannot be provided.',
                    },
                    unit_price: {
                      type: 'number',
                      description:
                        'Unit price for the charge. Will be multiplied by quantity to determine the amount and must be specified with quantity. If specified amount cannot be provided.',
                    },
                  },
                  required: ['amount_distribution', 'ending_before', 'frequency', 'starting_at'],
                },
                schedule_items: {
                  type: 'array',
                  description: 'Either provide amount or provide both unit_price and quantity.',
                  items: {
                    type: 'object',
                    properties: {
                      timestamp: {
                        type: 'string',
                        description: 'timestamp of the scheduled event',
                        format: 'date-time',
                      },
                      amount: {
                        type: 'number',
                        description:
                          'Amount for the charge. Can be provided instead of unit_price and quantity. If amount is sent, the unit_price is assumed to be the amount and quantity is inferred to be 1.',
                      },
                      quantity: {
                        type: 'number',
                        description:
                          'Quantity for the charge. Will be multiplied by unit_price to determine the amount and must be specified with unit_price. If specified amount cannot be provided.',
                      },
                      unit_price: {
                        type: 'number',
                        description:
                          'Unit price for the charge. Will be multiplied by quantity to determine the amount and must be specified with quantity. If specified amount cannot be provided.',
                      },
                    },
                    required: ['timestamp'],
                  },
                },
              },
              required: [],
            },
            custom_fields: {
              type: 'object',
            },
            name: {
              type: 'string',
              description: 'displayed on invoices',
            },
            netsuite_sales_order_id: {
              type: 'string',
              description: "This field's availability is dependent on your client's configuration.",
            },
          },
          required: ['product_id', 'schedule'],
        },
      },
      add_overrides: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            starting_at: {
              type: 'string',
              description: 'RFC 3339 timestamp indicating when the override will start applying (inclusive)',
              format: 'date-time',
            },
            applicable_product_tags: {
              type: 'array',
              description: 'tags identifying products whose rates are being overridden',
              items: {
                type: 'string',
              },
            },
            ending_before: {
              type: 'string',
              description: 'RFC 3339 timestamp indicating when the override will stop applying (exclusive)',
              format: 'date-time',
            },
            entitled: {
              type: 'boolean',
            },
            is_commit_specific: {
              type: 'boolean',
              description:
                'Indicates whether the override should only apply to commits. Defaults to `false`. If `true`, you can specify relevant commits in `override_specifiers` by passing `commit_ids`.',
            },
            multiplier: {
              type: 'number',
              description: 'Required for MULTIPLIER type. Must be >=0.',
            },
            override_specifiers: {
              type: 'array',
              description:
                'Cannot be used in conjunction with product_id or applicable_product_tags. If provided, the override will apply to all products with the specified specifiers.',
              items: {
                type: 'object',
                properties: {
                  commit_ids: {
                    type: 'array',
                    description:
                      'If provided, the override will only apply to the specified commits. Can only be used for commit specific overrides. If not provided, the override will apply to all commits.',
                    items: {
                      type: 'string',
                    },
                  },
                  presentation_group_values: {
                    type: 'object',
                    description:
                      'A map of group names to values. The override will only apply to line items with the specified presentation group values. Can only be used for multiplier overrides.',
                  },
                  pricing_group_values: {
                    type: 'object',
                    description:
                      'A map of pricing group names to values. The override will only apply to products with the specified pricing group values.',
                  },
                  product_id: {
                    type: 'string',
                    description:
                      'If provided, the override will only apply to the product with the specified ID.',
                  },
                  product_tags: {
                    type: 'array',
                    description:
                      'If provided, the override will only apply to products with all the specified tags.',
                    items: {
                      type: 'string',
                    },
                  },
                  recurring_commit_ids: {
                    type: 'array',
                    description:
                      'Can only be used for commit specific overrides. Must be used in conjunction with one of product_id, product_tags, pricing_group_values, or presentation_group_values. If provided, the override will only apply to commits created by the specified recurring commit ids.',
                    items: {
                      type: 'string',
                    },
                  },
                  recurring_credit_ids: {
                    type: 'array',
                    description:
                      'Can only be used for commit specific overrides. Must be used in conjunction with one of product_id, product_tags, pricing_group_values, or presentation_group_values. If provided, the override will only apply to commits created by the specified recurring credit ids.',
                    items: {
                      type: 'string',
                    },
                  },
                },
                required: [],
              },
            },
            overwrite_rate: {
              type: 'object',
              description: 'Required for OVERWRITE type.',
              properties: {
                rate_type: {
                  type: 'string',
                  enum: ['FLAT', 'PERCENTAGE', 'SUBSCRIPTION', 'TIERED', 'CUSTOM'],
                },
                credit_type_id: {
                  type: 'string',
                },
                custom_rate: {
                  type: 'object',
                  description:
                    'Only set for CUSTOM rate_type. This field is interpreted by custom rate processors.',
                },
                is_prorated: {
                  type: 'boolean',
                  description:
                    'Default proration configuration. Only valid for SUBSCRIPTION rate_type. Must be set to true.',
                },
                price: {
                  type: 'number',
                  description:
                    'Default price. For FLAT rate_type, this must be >=0. For PERCENTAGE rate_type, this is a decimal fraction, e.g. use 0.1 for 10%; this must be >=0 and <=1.',
                },
                quantity: {
                  type: 'number',
                  description: 'Default quantity. For SUBSCRIPTION rate_type, this must be >=0.',
                },
                tiers: {
                  type: 'array',
                  description: 'Only set for TIERED rate_type.',
                  items: {
                    $ref: '#/$defs/tier',
                  },
                },
              },
              required: ['rate_type'],
            },
            priority: {
              type: 'number',
              description:
                'Required for EXPLICIT multiplier prioritization scheme and all TIERED overrides. Under EXPLICIT prioritization, overwrites are prioritized first, and then tiered and multiplier overrides are prioritized by their priority value (lowest first). Must be > 0.',
            },
            product_id: {
              type: 'string',
              description: 'ID of the product whose rate is being overridden',
            },
            target: {
              type: 'string',
              description:
                'Indicates whether the override applies to commit rates or list rates. Can only be used for overrides that have `is_commit_specific` set to `true`. Defaults to `"LIST_RATE"`.',
              enum: ['COMMIT_RATE', 'LIST_RATE'],
            },
            tiers: {
              type: 'array',
              description: 'Required for TIERED type. Must have at least one tier.',
              items: {
                type: 'object',
                properties: {
                  multiplier: {
                    type: 'number',
                  },
                  size: {
                    type: 'number',
                  },
                },
                required: ['multiplier'],
              },
            },
            type: {
              type: 'string',
              description: 'Overwrites are prioritized over multipliers and tiered overrides.',
              enum: ['OVERWRITE', 'MULTIPLIER', 'TIERED'],
            },
          },
          required: ['starting_at'],
        },
      },
      add_prepaid_balance_threshold_configuration: {
        type: 'object',
        properties: {
          commit: {
            type: 'object',
            properties: {
              product_id: {
                type: 'string',
                description:
                  'The commit product that will be used to generate the line item for commit payment.',
              },
              applicable_product_ids: {
                type: 'array',
                description:
                  'Which products the threshold commit applies to. If both applicable_product_ids and applicable_product_tags are not provided, the commit applies to all products.',
                items: {
                  type: 'string',
                },
              },
              applicable_product_tags: {
                type: 'array',
                description:
                  'Which tags the threshold commit applies to. If both applicable_product_ids and applicable_product_tags are not provided, the commit applies to all products.',
                items: {
                  type: 'string',
                },
              },
              description: {
                type: 'string',
              },
              name: {
                type: 'string',
                description:
                  'Specify the name of the line item for the threshold charge. If left blank, it will default to the commit product name.',
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
                      description:
                        'If provided, the specifier will only apply to the product with the specified ID.',
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
            required: ['product_id'],
          },
          is_enabled: {
            type: 'boolean',
            description:
              'When set to false, the contract will not be evaluated against the threshold_amount. Toggling to true will result an immediate evaluation, regardless of prior state.',
          },
          payment_gate_config: {
            type: 'object',
            properties: {
              payment_gate_type: {
                type: 'string',
                description:
                  'Gate access to the commit balance based on successful collection of payment. Select STRIPE for Metronome to facilitate payment via Stripe. Select EXTERNAL to facilitate payment using your own payment integration. Select NONE if you do not wish to payment gate the commit balance.',
                enum: ['NONE', 'STRIPE', 'EXTERNAL'],
              },
              stripe_config: {
                type: 'object',
                description: 'Only applicable if using Stripe as your payment gateway through Metronome.',
                properties: {
                  payment_type: {
                    type: 'string',
                    description: 'If left blank, will default to INVOICE',
                    enum: ['INVOICE', 'PAYMENT_INTENT'],
                  },
                },
                required: ['payment_type'],
              },
              tax_type: {
                type: 'string',
                description:
                  'Stripe tax is only supported for Stripe payment gateway. Select NONE if you do not wish Metronome to calculate tax on your behalf. Leaving this field blank will default to NONE.',
                enum: ['NONE', 'STRIPE'],
              },
            },
            required: ['payment_gate_type'],
          },
          recharge_to_amount: {
            type: 'number',
            description: 'Specify the amount the balance should be recharged to.',
          },
          threshold_amount: {
            type: 'number',
            description:
              "Specify the threshold amount for the contract. Each time the contract's balance lowers to this amount, a threshold charge will be initiated.",
          },
        },
        required: ['commit', 'is_enabled', 'payment_gate_config', 'recharge_to_amount', 'threshold_amount'],
      },
      add_professional_services: {
        type: 'array',
        description: "This field's availability is dependent on your client's configuration.",
        items: {
          type: 'object',
          properties: {
            max_amount: {
              type: 'number',
              description: 'Maximum amount for the term.',
            },
            product_id: {
              type: 'string',
            },
            quantity: {
              type: 'number',
              description:
                'Quantity for the charge. Will be multiplied by unit_price to determine the amount.',
            },
            unit_price: {
              type: 'number',
              description:
                'Unit price for the charge. Will be multiplied by quantity to determine the amount and must be specified.',
            },
            custom_fields: {
              type: 'object',
            },
            description: {
              type: 'string',
            },
            netsuite_sales_order_id: {
              type: 'string',
              description: "This field's availability is dependent on your client's configuration.",
            },
          },
          required: ['max_amount', 'product_id', 'quantity', 'unit_price'],
        },
      },
      add_recurring_commits: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            access_amount: {
              type: 'object',
              description: 'The amount of commit to grant.',
              properties: {
                credit_type_id: {
                  type: 'string',
                },
                quantity: {
                  type: 'number',
                },
                unit_price: {
                  type: 'number',
                },
              },
              required: ['credit_type_id', 'quantity', 'unit_price'],
            },
            commit_duration: {
              type: 'object',
              description: 'The amount of time the created commits will be valid for.',
              properties: {
                unit: {
                  type: 'string',
                  enum: ['PERIODS'],
                },
                value: {
                  type: 'number',
                },
              },
              required: ['unit', 'value'],
            },
            priority: {
              type: 'number',
              description: 'Will be passed down to the individual commits',
            },
            product_id: {
              type: 'string',
            },
            starting_at: {
              type: 'string',
              description: 'determines the start time for the first commit',
              format: 'date-time',
            },
            applicable_product_ids: {
              type: 'array',
              description: 'Will be passed down to the individual commits',
              items: {
                type: 'string',
              },
            },
            applicable_product_tags: {
              type: 'array',
              description: 'Will be passed down to the individual commits',
              items: {
                type: 'string',
              },
            },
            description: {
              type: 'string',
              description: 'Will be passed down to the individual commits',
            },
            ending_before: {
              type: 'string',
              description: 'Determines when the contract will stop creating recurring commits. optional',
              format: 'date-time',
            },
            invoice_amount: {
              type: 'object',
              description: 'The amount the customer should be billed for the commit. Not required.',
              properties: {
                credit_type_id: {
                  type: 'string',
                },
                quantity: {
                  type: 'number',
                },
                unit_price: {
                  type: 'number',
                },
              },
              required: ['credit_type_id', 'quantity', 'unit_price'],
            },
            name: {
              type: 'string',
              description: 'displayed on invoices. will be passed through to the individual commits',
            },
            netsuite_sales_order_id: {
              type: 'string',
              description: 'Will be passed down to the individual commits',
            },
            proration: {
              type: 'string',
              description:
                'Determines whether the first and last commit will be prorated. If not provided, the default is FIRST_AND_LAST (i.e. prorate both the first and last commits).',
              enum: ['NONE', 'FIRST', 'LAST', 'FIRST_AND_LAST'],
            },
            rate_type: {
              type: 'string',
              description: 'Whether the created commits will use the commit rate or list rate',
              enum: ['COMMIT_RATE', 'LIST_RATE'],
            },
            recurrence_frequency: {
              type: 'string',
              description:
                "The frequency at which the recurring commits will be created. If not provided: - The commits will be created on the usage invoice frequency. If provided: - The period defined in the duration will correspond to this frequency. - Commits will be created aligned with the recurring commit's starting_at rather than the usage invoice dates.",
              enum: ['MONTHLY', 'QUARTERLY', 'ANNUAL', 'WEEKLY'],
            },
            rollover_fraction: {
              type: 'number',
              description:
                'Will be passed down to the individual commits. This controls how much of an individual unexpired commit will roll over upon contract transition. Must be between 0 and 1.',
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
                    description:
                      'If provided, the specifier will only apply to the product with the specified ID.',
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
            temporary_id: {
              type: 'string',
              description:
                'A temporary ID that can be used to reference the recurring commit for commit specific overrides.',
            },
          },
          required: ['access_amount', 'commit_duration', 'priority', 'product_id', 'starting_at'],
        },
      },
      add_recurring_credits: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            access_amount: {
              type: 'object',
              description: 'The amount of commit to grant.',
              properties: {
                credit_type_id: {
                  type: 'string',
                },
                quantity: {
                  type: 'number',
                },
                unit_price: {
                  type: 'number',
                },
              },
              required: ['credit_type_id', 'quantity', 'unit_price'],
            },
            commit_duration: {
              type: 'object',
              description: 'The amount of time the created commits will be valid for.',
              properties: {
                unit: {
                  type: 'string',
                  enum: ['PERIODS'],
                },
                value: {
                  type: 'number',
                },
              },
              required: ['unit', 'value'],
            },
            priority: {
              type: 'number',
              description: 'Will be passed down to the individual commits',
            },
            product_id: {
              type: 'string',
            },
            starting_at: {
              type: 'string',
              description: 'determines the start time for the first commit',
              format: 'date-time',
            },
            applicable_product_ids: {
              type: 'array',
              description: 'Will be passed down to the individual commits',
              items: {
                type: 'string',
              },
            },
            applicable_product_tags: {
              type: 'array',
              description: 'Will be passed down to the individual commits',
              items: {
                type: 'string',
              },
            },
            description: {
              type: 'string',
              description: 'Will be passed down to the individual commits',
            },
            ending_before: {
              type: 'string',
              description: 'Determines when the contract will stop creating recurring commits. optional',
              format: 'date-time',
            },
            name: {
              type: 'string',
              description: 'displayed on invoices. will be passed through to the individual commits',
            },
            netsuite_sales_order_id: {
              type: 'string',
              description: 'Will be passed down to the individual commits',
            },
            proration: {
              type: 'string',
              description:
                'Determines whether the first and last commit will be prorated. If not provided, the default is FIRST_AND_LAST (i.e. prorate both the first and last commits).',
              enum: ['NONE', 'FIRST', 'LAST', 'FIRST_AND_LAST'],
            },
            rate_type: {
              type: 'string',
              description: 'Whether the created commits will use the commit rate or list rate',
              enum: ['COMMIT_RATE', 'LIST_RATE'],
            },
            recurrence_frequency: {
              type: 'string',
              description:
                "The frequency at which the recurring commits will be created. If not provided: - The commits will be created on the usage invoice frequency. If provided: - The period defined in the duration will correspond to this frequency. - Commits will be created aligned with the recurring commit's starting_at rather than the usage invoice dates.",
              enum: ['MONTHLY', 'QUARTERLY', 'ANNUAL', 'WEEKLY'],
            },
            rollover_fraction: {
              type: 'number',
              description:
                'Will be passed down to the individual commits. This controls how much of an individual unexpired commit will roll over upon contract transition. Must be between 0 and 1.',
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
                    description:
                      'If provided, the specifier will only apply to the product with the specified ID.',
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
            temporary_id: {
              type: 'string',
              description:
                'A temporary ID that can be used to reference the recurring commit for commit specific overrides.',
            },
          },
          required: ['access_amount', 'commit_duration', 'priority', 'product_id', 'starting_at'],
        },
      },
      add_reseller_royalties: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            reseller_type: {
              type: 'string',
              enum: ['AWS', 'AWS_PRO_SERVICE', 'GCP', 'GCP_PRO_SERVICE'],
            },
            applicable_product_ids: {
              type: 'array',
              description: 'Must provide at least one of applicable_product_ids or applicable_product_tags.',
              items: {
                type: 'string',
              },
            },
            applicable_product_tags: {
              type: 'array',
              description: 'Must provide at least one of applicable_product_ids or applicable_product_tags.',
              items: {
                type: 'string',
              },
            },
            aws_options: {
              type: 'object',
              properties: {
                aws_account_number: {
                  type: 'string',
                },
                aws_offer_id: {
                  type: 'string',
                },
                aws_payer_reference_id: {
                  type: 'string',
                },
              },
              required: [],
            },
            ending_before: {
              type: 'string',
              description: 'Use null to indicate that the existing end timestamp should be removed.',
              format: 'date-time',
            },
            fraction: {
              type: 'number',
            },
            gcp_options: {
              type: 'object',
              properties: {
                gcp_account_id: {
                  type: 'string',
                },
                gcp_offer_id: {
                  type: 'string',
                },
              },
              required: [],
            },
            netsuite_reseller_id: {
              type: 'string',
            },
            reseller_contract_value: {
              type: 'number',
            },
            starting_at: {
              type: 'string',
              format: 'date-time',
            },
          },
          required: ['reseller_type'],
        },
      },
      add_scheduled_charges: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            product_id: {
              type: 'string',
            },
            schedule: {
              type: 'object',
              description: 'Must provide either schedule_items or recurring_schedule.',
              properties: {
                credit_type_id: {
                  type: 'string',
                  description: 'Defaults to USD if not passed. Only USD is supported at this time.',
                },
                recurring_schedule: {
                  type: 'object',
                  description:
                    'Enter the unit price and quantity for the charge or instead only send the amount. If amount is sent, the unit price is assumed to be the amount and quantity is inferred to be 1.',
                  properties: {
                    amount_distribution: {
                      type: 'string',
                      enum: ['DIVIDED', 'DIVIDED_ROUNDED', 'EACH'],
                    },
                    ending_before: {
                      type: 'string',
                      description: 'RFC 3339 timestamp (exclusive).',
                      format: 'date-time',
                    },
                    frequency: {
                      type: 'string',
                      enum: ['MONTHLY', 'QUARTERLY', 'SEMI_ANNUAL', 'ANNUAL', 'WEEKLY'],
                    },
                    starting_at: {
                      type: 'string',
                      description: 'RFC 3339 timestamp (inclusive).',
                      format: 'date-time',
                    },
                    amount: {
                      type: 'number',
                      description:
                        'Amount for the charge. Can be provided instead of unit_price and quantity. If amount is sent, the unit_price is assumed to be the amount and quantity is inferred to be 1.',
                    },
                    quantity: {
                      type: 'number',
                      description:
                        'Quantity for the charge. Will be multiplied by unit_price to determine the amount and must be specified with unit_price. If specified amount cannot be provided.',
                    },
                    unit_price: {
                      type: 'number',
                      description:
                        'Unit price for the charge. Will be multiplied by quantity to determine the amount and must be specified with quantity. If specified amount cannot be provided.',
                    },
                  },
                  required: ['amount_distribution', 'ending_before', 'frequency', 'starting_at'],
                },
                schedule_items: {
                  type: 'array',
                  description: 'Either provide amount or provide both unit_price and quantity.',
                  items: {
                    type: 'object',
                    properties: {
                      timestamp: {
                        type: 'string',
                        description: 'timestamp of the scheduled event',
                        format: 'date-time',
                      },
                      amount: {
                        type: 'number',
                        description:
                          'Amount for the charge. Can be provided instead of unit_price and quantity. If amount is sent, the unit_price is assumed to be the amount and quantity is inferred to be 1.',
                      },
                      quantity: {
                        type: 'number',
                        description:
                          'Quantity for the charge. Will be multiplied by unit_price to determine the amount and must be specified with unit_price. If specified amount cannot be provided.',
                      },
                      unit_price: {
                        type: 'number',
                        description:
                          'Unit price for the charge. Will be multiplied by quantity to determine the amount and must be specified with quantity. If specified amount cannot be provided.',
                      },
                    },
                    required: ['timestamp'],
                  },
                },
              },
              required: [],
            },
            name: {
              type: 'string',
              description: 'displayed on invoices',
            },
            netsuite_sales_order_id: {
              type: 'string',
              description: "This field's availability is dependent on your client's configuration.",
            },
          },
          required: ['product_id', 'schedule'],
        },
      },
      add_spend_threshold_configuration: {
        type: 'object',
        properties: {
          commit: {
            type: 'object',
            properties: {
              product_id: {
                type: 'string',
                description:
                  'The commit product that will be used to generate the line item for commit payment.',
              },
              description: {
                type: 'string',
              },
              name: {
                type: 'string',
                description:
                  'Specify the name of the line item for the threshold charge. If left blank, it will default to the commit product name.',
              },
            },
            required: ['product_id'],
          },
          is_enabled: {
            type: 'boolean',
            description:
              'When set to false, the contract will not be evaluated against the threshold_amount. Toggling to true will result an immediate evaluation, regardless of prior state.',
          },
          payment_gate_config: {
            type: 'object',
            properties: {
              payment_gate_type: {
                type: 'string',
                description:
                  'Gate access to the commit balance based on successful collection of payment. Select STRIPE for Metronome to facilitate payment via Stripe. Select EXTERNAL to facilitate payment using your own payment integration. Select NONE if you do not wish to payment gate the commit balance.',
                enum: ['NONE', 'STRIPE', 'EXTERNAL'],
              },
              stripe_config: {
                type: 'object',
                description: 'Only applicable if using Stripe as your payment gateway through Metronome.',
                properties: {
                  payment_type: {
                    type: 'string',
                    description: 'If left blank, will default to INVOICE',
                    enum: ['INVOICE', 'PAYMENT_INTENT'],
                  },
                },
                required: ['payment_type'],
              },
              tax_type: {
                type: 'string',
                description:
                  'Stripe tax is only supported for Stripe payment gateway. Select NONE if you do not wish Metronome to calculate tax on your behalf. Leaving this field blank will default to NONE.',
                enum: ['NONE', 'STRIPE'],
              },
            },
            required: ['payment_gate_type'],
          },
          threshold_amount: {
            type: 'number',
            description:
              "Specify the threshold amount for the contract. Each time the contract's usage hits this amount, a threshold charge will be initiated.",
          },
        },
        required: ['commit', 'is_enabled', 'payment_gate_config', 'threshold_amount'],
      },
      allow_contract_ending_before_finalized_invoice: {
        type: 'boolean',
        description:
          'If true, allows setting the contract end date earlier than the end_timestamp of existing finalized invoices. Finalized invoices will be unchanged; if you want to incorporate the new end date, you can void and regenerate finalized usage invoices. Defaults to true.',
      },
      archive_commits: {
        type: 'array',
        description: 'IDs of commits to archive',
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
      archive_credits: {
        type: 'array',
        description: 'IDs of credits to archive',
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
      archive_scheduled_charges: {
        type: 'array',
        description: 'IDs of scheduled charges to archive',
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
      remove_overrides: {
        type: 'array',
        description: 'IDs of overrides to remove',
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
      update_commits: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            commit_id: {
              type: 'string',
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
            netsuite_sales_order_id: {
              type: 'string',
            },
            product_id: {
              type: 'string',
            },
            rollover_fraction: {
              type: 'number',
            },
          },
          required: ['commit_id'],
        },
      },
      update_contract_end_date: {
        type: 'string',
        description: 'RFC 3339 timestamp indicating when the contract will end (exclusive).',
        format: 'date-time',
      },
      update_credits: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            credit_id: {
              type: 'string',
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
            netsuite_sales_order_id: {
              type: 'string',
            },
            product_id: {
              type: 'string',
            },
          },
          required: ['credit_id'],
        },
      },
      update_prepaid_balance_threshold_configuration: {
        type: 'object',
        properties: {
          commit: {
            type: 'object',
            properties: {
              product_id: {
                type: 'string',
                description:
                  'The commit product that will be used to generate the line item for commit payment.',
              },
              applicable_product_ids: {
                type: 'array',
                description:
                  'Which products the threshold commit applies to. If both applicable_product_ids and applicable_product_tags are not provided, the commit applies to all products.',
                items: {
                  type: 'string',
                },
              },
              applicable_product_tags: {
                type: 'array',
                description:
                  'Which tags the threshold commit applies to. If both applicable_product_ids and applicable_product_tags are not provided, the commit applies to all products.',
                items: {
                  type: 'string',
                },
              },
              description: {
                type: 'string',
              },
              name: {
                type: 'string',
                description:
                  'Specify the name of the line item for the threshold charge. If left blank, it will default to the commit product name.',
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
                      description:
                        'If provided, the specifier will only apply to the product with the specified ID.',
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
            required: ['product_id'],
          },
          is_enabled: {
            type: 'boolean',
            description:
              'When set to false, the contract will not be evaluated against the threshold_amount. Toggling to true will result an immediate evaluation, regardless of prior state.',
          },
          payment_gate_config: {
            type: 'object',
            properties: {
              payment_gate_type: {
                type: 'string',
                description:
                  'Gate access to the commit balance based on successful collection of payment. Select STRIPE for Metronome to facilitate payment via Stripe. Select EXTERNAL to facilitate payment using your own payment integration. Select NONE if you do not wish to payment gate the commit balance.',
                enum: ['NONE', 'STRIPE', 'EXTERNAL'],
              },
              stripe_config: {
                type: 'object',
                description: 'Only applicable if using Stripe as your payment gateway through Metronome.',
                properties: {
                  payment_type: {
                    type: 'string',
                    description: 'If left blank, will default to INVOICE',
                    enum: ['INVOICE', 'PAYMENT_INTENT'],
                  },
                },
                required: ['payment_type'],
              },
              tax_type: {
                type: 'string',
                description:
                  'Stripe tax is only supported for Stripe payment gateway. Select NONE if you do not wish Metronome to calculate tax on your behalf. Leaving this field blank will default to NONE.',
                enum: ['NONE', 'STRIPE'],
              },
            },
            required: ['payment_gate_type'],
          },
          recharge_to_amount: {
            type: 'number',
            description: 'Specify the amount the balance should be recharged to.',
          },
          threshold_amount: {
            type: 'number',
            description:
              "Specify the threshold amount for the contract. Each time the contract's balance lowers to this amount, a threshold charge will be initiated.",
          },
        },
        required: [],
      },
      update_scheduled_charges: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            scheduled_charge_id: {
              type: 'string',
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
            netsuite_sales_order_id: {
              type: 'string',
            },
          },
          required: ['scheduled_charge_id'],
        },
      },
      update_spend_threshold_configuration: {
        type: 'object',
        properties: {
          commit: {
            type: 'object',
            properties: {
              description: {
                type: 'string',
              },
              name: {
                type: 'string',
                description:
                  'Specify the name of the line item for the threshold charge. If left blank, it will default to the commit product name.',
              },
              product_id: {
                type: 'string',
              },
            },
            required: [],
          },
          is_enabled: {
            type: 'boolean',
            description:
              'When set to false, the contract will not be evaluated against the threshold_amount. Toggling to true will result an immediate evaluation, regardless of prior state.',
          },
          payment_gate_config: {
            type: 'object',
            properties: {
              payment_gate_type: {
                type: 'string',
                description:
                  'Gate access to the commit balance based on successful collection of payment. Select STRIPE for Metronome to facilitate payment via Stripe. Select EXTERNAL to facilitate payment using your own payment integration. Select NONE if you do not wish to payment gate the commit balance.',
                enum: ['NONE', 'STRIPE', 'EXTERNAL'],
              },
              stripe_config: {
                type: 'object',
                description: 'Only applicable if using Stripe as your payment gateway through Metronome.',
                properties: {
                  payment_type: {
                    type: 'string',
                    description: 'If left blank, will default to INVOICE',
                    enum: ['INVOICE', 'PAYMENT_INTENT'],
                  },
                },
                required: ['payment_type'],
              },
              tax_type: {
                type: 'string',
                description:
                  'Stripe tax is only supported for Stripe payment gateway. Select NONE if you do not wish Metronome to calculate tax on your behalf. Leaving this field blank will default to NONE.',
                enum: ['NONE', 'STRIPE'],
              },
            },
            required: ['payment_gate_type'],
          },
          threshold_amount: {
            type: 'number',
            description:
              "Specify the threshold amount for the contract. Each time the contract's usage hits this amount, a threshold charge will be initiated.",
          },
        },
        required: [],
      },
    },
    $defs: {
      tier: {
        type: 'object',
        properties: {
          price: {
            type: 'number',
          },
          size: {
            type: 'number',
          },
        },
        required: ['price'],
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.contracts.edit(body);
};

export default { metadata, tool, handler };
