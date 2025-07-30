// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contracts/amend',
  operationId: 'amendContract-v1',
};

export const tool: Tool = {
  name: 'amend_v1_contracts',
  description:
    'Amendments will be replaced by Contract editing. New clients should implement using the editContract endpoint. Read more about the migration to contract editing [here](https://docs.metronome.com/migrate-amendments-to-edits/) and reach out to your Metronome representative for more details. Once contract editing is enabled, access to this endpoint will be removed.\n',
  inputSchema: {
    type: 'object',
    properties: {
      contract_id: {
        type: 'string',
        description: 'ID of the contract to amend',
      },
      customer_id: {
        type: 'string',
        description: 'ID of the customer whose contract is to be amended',
      },
      starting_at: {
        type: 'string',
        description: 'inclusive start time for the amendment',
        format: 'date-time',
      },
      commits: {
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
                  description: 'Defaults to USD (cents) if not passed',
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
            custom_fields: {
              type: 'object',
            },
            description: {
              type: 'string',
              description: 'Used only in UI/API. It is not exposed to end customers.',
            },
            hierarchy_configuration: {
              type: 'object',
              description: 'Optional configuration for commit hierarchy access control',
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
            invoice_schedule: {
              type: 'object',
              description:
                'Required for "POSTPAID" commits: the true up invoice will be generated at this time and only one schedule item is allowed; the total must match access_schedule amount. Optional for "PREPAID" commits: if not provided, this will be a "complimentary" commit with no invoice.',
              properties: {
                credit_type_id: {
                  type: 'string',
                  description: 'Defaults to USD (cents) if not passed.',
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
                      enum: ['MONTHLY', 'QUARTERLY', 'SEMI_ANNUAL', 'ANNUAL'],
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
                precalculated_tax_config: {
                  type: 'object',
                  description: 'Only applicable if using PRECALCULATED as your tax type.',
                  properties: {
                    tax_amount: {
                      type: 'number',
                      description:
                        "Amount of tax to be applied. This should be in the same currency and denomination  as the commit's invoice schedule",
                    },
                    tax_name: {
                      type: 'string',
                      description:
                        'Name of the tax to be applied. This may be used in an invoice line item description.',
                    },
                  },
                  required: ['tax_amount'],
                },
                stripe_config: {
                  type: 'object',
                  description: 'Only applicable if using STRIPE as your payment gate type.',
                  properties: {
                    payment_type: {
                      type: 'string',
                      description: 'If left blank, will default to INVOICE',
                      enum: ['INVOICE', 'PAYMENT_INTENT'],
                    },
                    invoice_metadata: {
                      type: 'object',
                      description:
                        'Metadata to be added to the Stripe invoice. Only applicable if using INVOICE as your payment type.',
                    },
                  },
                  required: ['payment_type'],
                },
                tax_type: {
                  type: 'string',
                  description:
                    'Stripe tax is only supported for Stripe payment gateway. Select NONE if you do not wish Metronome to calculate tax on your behalf. Leaving this field blank will default to NONE.',
                  enum: ['NONE', 'STRIPE', 'ANROK', 'PRECALCULATED'],
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
      credits: {
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
                  description: 'Defaults to USD (cents) if not passed',
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
            hierarchy_configuration: {
              type: 'object',
              description: 'Optional configuration for credit hierarchy access control',
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
              },
            },
          },
          required: ['access_schedule', 'product_id'],
        },
      },
      custom_fields: {
        type: 'object',
      },
      discounts: {
        type: 'array',
        description: "This field's availability is dependent on your client's configuration.",
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
                  description: 'Defaults to USD (cents) if not passed.',
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
                      enum: ['MONTHLY', 'QUARTERLY', 'SEMI_ANNUAL', 'ANNUAL'],
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
      netsuite_sales_order_id: {
        type: 'string',
        description: "This field's availability is dependent on your client's configuration.",
      },
      overrides: {
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
              description:
                'tags identifying products whose rates are being overridden. Cannot be used in conjunction with override_specifiers.',
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
                'Indicates whether the override should only apply to commits. Defaults to `false`. If `true`, you can specify relevant commits in `override_specifiers` by passing `commit_ids`. if you do not specify `commit_ids`, then the override will apply when consuming any prepaid or postpaid commit.',
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
                  billing_frequency: {
                    type: 'string',
                    enum: ['MONTHLY', 'QUARTERLY', 'ANNUAL', 'WEEKLY'],
                  },
                  commit_ids: {
                    type: 'array',
                    description:
                      'Can only be used for commit specific overrides. Must be used in conjunction with one of product_id, product_tags, pricing_group_values, or presentation_group_values. If provided, the override will only apply to the specified commits. If not provided, the override will apply to all commits.',
                    items: {
                      type: 'string',
                    },
                  },
                  presentation_group_values: {
                    type: 'object',
                    description:
                      'A map of group names to values. The override will only apply to line items with the specified presentation group values.',
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
                      'Can only be used for commit specific overrides. Must be used in conjunction with one of product_id, product_tags, pricing_group_values, or presentation_group_values. If provided, the override will only apply to credits created by the specified recurring credit ids.',
                    items: {
                      type: 'string',
                    },
                  },
                },
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
              required: ['rate_type'],
            },
            priority: {
              type: 'number',
              description:
                'Required for EXPLICIT multiplier prioritization scheme and all TIERED overrides. Under EXPLICIT prioritization, overwrites are prioritized first, and then tiered and multiplier overrides are prioritized by their priority value (lowest first). Must be > 0.',
            },
            product_id: {
              type: 'string',
              description:
                'ID of the product whose rate is being overridden. Cannot be used in conjunction with override_specifiers.',
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
      professional_services: {
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
      reseller_royalties: {
        type: 'array',
        description: "This field's availability is dependent on your client's configuration.",
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
      salesforce_opportunity_id: {
        type: 'string',
        description: "This field's availability is dependent on your client's configuration.",
      },
      scheduled_charges: {
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
                  description: 'Defaults to USD (cents) if not passed.',
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
                      enum: ['MONTHLY', 'QUARTERLY', 'SEMI_ANNUAL', 'ANNUAL'],
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
      total_contract_value: {
        type: 'number',
        description: "This field's availability is dependent on your client's configuration.",
      },
    },
    required: ['contract_id', 'customer_id', 'starting_at'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.contracts.amend(body));
};

export default { metadata, tool, handler };
