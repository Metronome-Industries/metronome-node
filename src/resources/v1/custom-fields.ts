// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import {
  CursorPageWithoutLimit,
  type CursorPageWithoutLimitParams,
  PagePromise,
} from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class CustomFields extends APIResource {
  /**
   * Creates a new custom field key for a given entity (e.g. billable metric,
   * contract, alert).
   *
   * Custom fields are properties that you can add to Metronome objects to store
   * metadata like foreign keys or other descriptors. This metadata can get
   * transferred to or accessed by other systems to contextualize Metronome data and
   * power business processes. For example, to service workflows like revenue
   * recognition, reconciliation, and invoicing, custom fields help Metronome know
   * the relationship between entities in the platform and third-party systems.
   *
   * ### Use this endpoint to:
   *
   * - Create a new custom field key for Customer objects in Metronome. You can then
   *   use the Set Custom Field Values endpoint to set the value of this key for a
   *   specific customer.
   * - Specify whether the key should enforce uniqueness. If the key is set to
   *   enforce uniqueness and you attempt to set a custom field value for the key
   *   that already exists, it will fail.
   *
   * ### Usage guidelines:
   *
   * - Custom fields set on commits, credits, and contracts can be used to scope
   *   alert evaluation. For example, you can create a spend threshold alert that
   *   only considers spend associated with contracts with custom field key
   *   `contract_type` and value `paygo`
   * - Custom fields set on products can be used in the Stripe integration to set
   *   metadata on invoices.
   * - Custom fields for customers, contracts, invoices, products, commits, scheduled
   *   charges, and subscriptions are passed down to the invoice.
   *
   * @example
   * ```ts
   * await client.v1.customFields.addKey({
   *   enforce_uniqueness: true,
   *   entity: 'customer',
   *   key: 'x_account_id',
   * });
   * ```
   */
  addKey(body: CustomFieldAddKeyParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v1/customFields/addKey', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Remove specific custom field values from a Metronome entity instance by
   * specifying the field keys to delete. Use this endpoint to clean up unwanted
   * custom field data while preserving other fields on the same entity. Requires the
   * entity type, entity ID, and array of keys to remove.
   *
   * @example
   * ```ts
   * await client.v1.customFields.deleteValues({
   *   entity: 'customer',
   *   entity_id: '99594816-e8a5-4bca-be21-8d1de0f45120',
   *   keys: ['x_account_id'],
   * });
   * ```
   */
  deleteValues(body: CustomFieldDeleteValuesParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v1/customFields/deleteValues', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve all your active custom field keys, with optional filtering by entity
   * type (customer, contract, product, etc.). Use this endpoint to discover what
   * custom field keys are available before setting values on entities or to audit
   * your custom field configuration across different entity types.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const customFieldListKeysResponse of client.v1.customFields.listKeys(
   *   { entities: ['customer'] },
   * )) {
   *   // ...
   * }
   * ```
   */
  listKeys(
    params: CustomFieldListKeysParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CustomFieldListKeysResponsesCursorPageWithoutLimit, CustomFieldListKeysResponse> {
    const { next_page, ...body } = params ?? {};
    return this._client.getAPIList(
      '/v1/customFields/listKeys',
      CursorPageWithoutLimit<CustomFieldListKeysResponse>,
      { query: { next_page }, body, method: 'post', ...options },
    );
  }

  /**
   * Removes a custom field key from the allowlist for a specific entity type,
   * preventing future use of that key across all instances of the entity. Existing
   * values for this key on entity instances will no longer be accessible once the
   * key is removed.
   *
   * @example
   * ```ts
   * await client.v1.customFields.removeKey({
   *   entity: 'customer',
   *   key: 'x_account_id',
   * });
   * ```
   */
  removeKey(body: CustomFieldRemoveKeyParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v1/customFields/removeKey', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Sets custom field values on a specific Metronome entity instance. Overwrites
   * existing values for matching keys while preserving other fields. All updates are
   * transactional—either all values are set or none are. Custom field values are
   * limited to 200 characters each.
   *
   * @example
   * ```ts
   * await client.v1.customFields.setValues({
   *   custom_fields: { x_account_id: 'KyVnHhSBWl7eY2bl' },
   *   entity: 'customer',
   *   entity_id: '99594816-e8a5-4bca-be21-8d1de0f45120',
   * });
   * ```
   */
  setValues(body: CustomFieldSetValuesParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v1/customFields/setValues', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type CustomFieldListKeysResponsesCursorPageWithoutLimit =
  CursorPageWithoutLimit<CustomFieldListKeysResponse>;

export interface CustomFieldListKeysResponse {
  enforce_uniqueness: boolean;

  entity:
    | 'alert'
    | 'billable_metric'
    | 'charge'
    | 'commit'
    | 'contract_credit'
    | 'contract_product'
    | 'contract'
    | 'credit_grant'
    | 'customer_plan'
    | 'customer'
    | 'discount'
    | 'invoice'
    | 'plan'
    | 'professional_service'
    | 'product'
    | 'rate_card'
    | 'scheduled_charge'
    | 'subscription';

  key: string;
}

export interface CustomFieldAddKeyParams {
  enforce_uniqueness: boolean;

  entity:
    | 'alert'
    | 'billable_metric'
    | 'charge'
    | 'commit'
    | 'contract_credit'
    | 'contract_product'
    | 'contract'
    | 'credit_grant'
    | 'customer_plan'
    | 'customer'
    | 'discount'
    | 'invoice'
    | 'plan'
    | 'professional_service'
    | 'product'
    | 'rate_card'
    | 'scheduled_charge'
    | 'subscription';

  key: string;
}

export interface CustomFieldDeleteValuesParams {
  entity:
    | 'alert'
    | 'billable_metric'
    | 'charge'
    | 'commit'
    | 'contract_credit'
    | 'contract_product'
    | 'contract'
    | 'credit_grant'
    | 'customer_plan'
    | 'customer'
    | 'discount'
    | 'invoice'
    | 'plan'
    | 'professional_service'
    | 'product'
    | 'rate_card'
    | 'scheduled_charge'
    | 'subscription';

  entity_id: string;

  keys: Array<string>;
}

export interface CustomFieldListKeysParams extends CursorPageWithoutLimitParams {
  /**
   * Body param: Optional list of entity types to return keys for
   */
  entities?: Array<
    | 'alert'
    | 'billable_metric'
    | 'charge'
    | 'commit'
    | 'contract_credit'
    | 'contract_product'
    | 'contract'
    | 'credit_grant'
    | 'customer_plan'
    | 'customer'
    | 'discount'
    | 'invoice'
    | 'plan'
    | 'professional_service'
    | 'product'
    | 'rate_card'
    | 'scheduled_charge'
    | 'subscription'
  >;
}

export interface CustomFieldRemoveKeyParams {
  entity:
    | 'alert'
    | 'billable_metric'
    | 'charge'
    | 'commit'
    | 'contract_credit'
    | 'contract_product'
    | 'contract'
    | 'credit_grant'
    | 'customer_plan'
    | 'customer'
    | 'discount'
    | 'invoice'
    | 'plan'
    | 'professional_service'
    | 'product'
    | 'rate_card'
    | 'scheduled_charge'
    | 'subscription';

  key: string;
}

export interface CustomFieldSetValuesParams {
  /**
   * Custom fields to be added eg. { "key1": "value1", "key2": "value2" }
   */
  custom_fields: { [key: string]: string };

  entity:
    | 'alert'
    | 'billable_metric'
    | 'charge'
    | 'commit'
    | 'contract_credit'
    | 'contract_product'
    | 'contract'
    | 'credit_grant'
    | 'customer_plan'
    | 'customer'
    | 'discount'
    | 'invoice'
    | 'plan'
    | 'professional_service'
    | 'product'
    | 'rate_card'
    | 'scheduled_charge'
    | 'subscription';

  entity_id: string;
}

export declare namespace CustomFields {
  export {
    type CustomFieldListKeysResponse as CustomFieldListKeysResponse,
    type CustomFieldListKeysResponsesCursorPageWithoutLimit as CustomFieldListKeysResponsesCursorPageWithoutLimit,
    type CustomFieldAddKeyParams as CustomFieldAddKeyParams,
    type CustomFieldDeleteValuesParams as CustomFieldDeleteValuesParams,
    type CustomFieldListKeysParams as CustomFieldListKeysParams,
    type CustomFieldRemoveKeyParams as CustomFieldRemoveKeyParams,
    type CustomFieldSetValuesParams as CustomFieldSetValuesParams,
  };
}
