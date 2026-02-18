# Metronome Node SDK Examples

Code examples for every method in the `@metronome/sdk` package, organized by API version.

## Prerequisites

- Node.js 20 or later
- A Metronome API token

## Setup

Set your API token as an environment variable:

```bash
export METRONOME_BEARER_TOKEN="your-api-token"
```

## Running Examples

Run any example file using `ts-node`:

```bash
npx ts-node -r tsconfig-paths/register examples/v1/customers.ts
```

## Directory Structure

```
examples/
├── common/                          # Cross-cutting patterns
│   ├── client-initialization.ts     # Client setup (env var, explicit token, custom options)
│   ├── error-handling.ts            # Error types and handling patterns
│   ├── pagination.ts                # Auto-pagination, manual pages, collect-all
│   ├── webhook-handling.ts          # Webhook verification and Express middleware
│   └── raw-response-access.ts       # Accessing headers and raw HTTP responses
├── v1/                              # V1 API examples
│   ├── alerts.ts                    # Threshold notifications
│   ├── audit-logs.ts                # Audit trail
│   ├── billable-metrics.ts          # Metric definitions
│   ├── contracts.ts                 # Contract lifecycle
│   ├── contracts-named-schedules.ts
│   ├── contracts-products.ts        # Product management
│   ├── contracts-rate-cards.ts      # Rate card management
│   ├── contracts-rate-cards-named-schedules.ts
│   ├── contracts-rate-cards-product-orders.ts
│   ├── contracts-rate-cards-rates.ts
│   ├── credit-grants.ts            # (deprecated) Use customers-commits/credits
│   ├── custom-fields.ts            # Custom metadata
│   ├── customers.ts                # Customer management
│   ├── customers-alerts.ts
│   ├── customers-billing-config.ts
│   ├── customers-commits.ts        # Prepaid/postpaid commitments
│   ├── customers-credits.ts        # Free spending allowances
│   ├── customers-invoices.ts       # Invoice management and PDF download
│   ├── customers-named-schedules.ts
│   ├── customers-plans.ts          # (deprecated) Use contracts
│   ├── dashboards.ts               # Embeddable dashboard URLs
│   ├── invoices.ts                 # Invoice regeneration and voiding
│   ├── payments.ts                 # Payment attempts and cancellation
│   ├── plans.ts                    # (deprecated) Use contracts
│   ├── pricing-units.ts            # Currency and pricing units
│   ├── services.ts                 # Service registry
│   ├── settings.ts                 # Avalara tax configuration
│   ├── settings-billing-providers.ts
│   └── usage.ts                    # Usage ingestion and querying
└── v2/                              # V2 API examples
    └── contracts.ts                 # Contract editing and history
```

## Sample Data

Examples use placeholder UUIDs and timestamps. Replace them with real values from your Metronome account before running.

## Deprecated Endpoints

Files marked as `(deprecated)` are included for reference during migration:

- **`v1/plans.ts`** and **`v1/customers-plans.ts`**: Use the Contracts API instead
- **`v1/credit-grants.ts`**: Use customer commits (`v1/customers-commits.ts`) and credits (`v1/customers-credits.ts`) instead

## API Documentation

For full API documentation, visit [docs.metronome.com](https://docs.metronome.com).
