// File generated from our OpenAPI spec by Stainless.

import * as Core from '@metronome-industries/metronome/core';
import { APIResource } from '@metronome-industries/metronome/resource';
import { isRequestOptions } from '@metronome-industries/metronome/core';
import * as CustomFieldsAPI from '@metronome-industries/metronome/resources/custom-fields';
import { Page, type PageParams } from '@metronome-industries/metronome/pagination';

export class CustomFields extends APIResource {
  /**
   * Add a key to the allow list for a given entity. There is a 100 character limit
   * on custom field keys.
   */
  addKey(body: CustomFieldAddKeyParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/customFields/addKey', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Deletes one or more custom fields on an instance of a Metronome entity.
   */
  deleteValues(body: CustomFieldDeleteValuesParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/customFields/deleteValues', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * List all active custom field keys, optionally filtered by entity type.
   */
  listKeys(
    params?: CustomFieldListKeysParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomFieldListKeysResponsesPage, CustomFieldListKeysResponse>;
  listKeys(
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomFieldListKeysResponsesPage, CustomFieldListKeysResponse>;
  listKeys(
    params: CustomFieldListKeysParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomFieldListKeysResponsesPage, CustomFieldListKeysResponse> {
    if (isRequestOptions(params)) {
      return this.listKeys({}, params);
    }
    const { next_page, ...body } = params;
    return this._client.getAPIList('/customFields/listKeys', CustomFieldListKeysResponsesPage, {
      query: { next_page },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Remove a key from the allow list for a given entity.
   */
  removeKey(body: CustomFieldRemoveKeyParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/customFields/removeKey', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Sets one or more custom fields on an instance of a Metronome entity. If a
   * key/value pair passed in this request matches one already set on the entity, its
   * value will be overwritten. Any key/value pairs that exist on the entity that do
   * not match those passed in this request will remain untouched. This endpoint is
   * transactional and will update all key/value pairs or no key/value pairs. Partial
   * updates are not supported. There is a 200 character limit on custom field
   * values.
   */
  setValues(body: CustomFieldSetValuesParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/customFields/setValues', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }
}

export class CustomFieldListKeysResponsesPage extends Page<CustomFieldListKeysResponse> {}

export interface CustomFieldListKeysResponse {
  enforce_uniqueness: boolean;

  entity: 'charge' | 'credit_grant' | 'customer' | 'customer_plan' | 'plan' | 'product' | 'billable_metric';

  key: string;
}

export interface CustomFieldAddKeyParams {
  enforce_uniqueness: boolean;

  entity: 'charge' | 'credit_grant' | 'customer' | 'customer_plan' | 'plan' | 'product' | 'billable_metric';

  key: string;
}

export interface CustomFieldDeleteValuesParams {
  entity: 'charge' | 'credit_grant' | 'customer' | 'customer_plan' | 'plan' | 'product' | 'billable_metric';

  entity_id: string;

  keys: Array<string>;
}

export interface CustomFieldListKeysParams extends PageParams {
  /**
   * Body param: Optional list of entity types to return keys for
   */
  entities?: Array<
    'charge' | 'credit_grant' | 'customer' | 'customer_plan' | 'plan' | 'product' | 'billable_metric'
  >;
}

export interface CustomFieldRemoveKeyParams {
  entity: 'charge' | 'credit_grant' | 'customer' | 'customer_plan' | 'plan' | 'product' | 'billable_metric';

  key: string;
}

export interface CustomFieldSetValuesParams {
  custom_fields: Record<string, string>;

  entity: 'charge' | 'credit_grant' | 'customer' | 'customer_plan' | 'plan' | 'product' | 'billable_metric';

  entity_id: string;
}

export namespace CustomFields {
  export import CustomFieldListKeysResponse = CustomFieldsAPI.CustomFieldListKeysResponse;
  export import CustomFieldListKeysResponsesPage = CustomFieldsAPI.CustomFieldListKeysResponsesPage;
  export import CustomFieldAddKeyParams = CustomFieldsAPI.CustomFieldAddKeyParams;
  export import CustomFieldDeleteValuesParams = CustomFieldsAPI.CustomFieldDeleteValuesParams;
  export import CustomFieldListKeysParams = CustomFieldsAPI.CustomFieldListKeysParams;
  export import CustomFieldRemoveKeyParams = CustomFieldsAPI.CustomFieldRemoveKeyParams;
  export import CustomFieldSetValuesParams = CustomFieldsAPI.CustomFieldSetValuesParams;
}
