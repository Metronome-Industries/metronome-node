// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ProductsAPI from './products';
import * as Shared from '../shared';
import { CursorPage, type CursorPageParams } from '../../pagination';

export class Products extends APIResource {
  /**
   * Create a new product
   */
  create(body: ProductCreateParams, options?: Core.RequestOptions): Core.APIPromise<ProductCreateResponse> {
    return this._client.post('/contract-pricing/products/create', { body, ...options });
  }

  /**
   * Get a specific product
   */
  retrieve(
    body: ProductRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProductRetrieveResponse> {
    return this._client.post('/contract-pricing/products/get', { body, ...options });
  }

  /**
   * Update a product
   */
  update(body: ProductUpdateParams, options?: Core.RequestOptions): Core.APIPromise<ProductUpdateResponse> {
    return this._client.post('/contract-pricing/products/update', { body, ...options });
  }

  /**
   * List products
   */
  list(
    params?: ProductListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProductListResponsesCursorPage, ProductListResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<ProductListResponsesCursorPage, ProductListResponse>;
  list(
    params: ProductListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProductListResponsesCursorPage, ProductListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { limit, next_page, ...body } = params;
    return this._client.getAPIList('/contract-pricing/products/list', ProductListResponsesCursorPage, {
      query: { limit, next_page },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Archive a product
   */
  archive(
    body: ProductArchiveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProductArchiveResponse> {
    return this._client.post('/contract-pricing/products/archive', { body, ...options });
  }
}

export class ProductListResponsesCursorPage extends CursorPage<ProductListResponse> {}

export interface ProductCreateResponse {
  data: Shared.ID;
}

export interface ProductRetrieveResponse {
  data: ProductRetrieveResponse.Data;
}

export namespace ProductRetrieveResponse {
  export interface Data {
    id: string;

    current: Data.Current;

    initial: Data.Initial;

    type: 'USAGE' | 'SUBSCRIPTION' | 'COMPOSITE' | 'FIXED' | 'PRO_SERVICE';

    updates: Array<Data.Update>;

    archived_at?: string | null;

    custom_fields?: Record<string, string>;
  }

  export namespace Data {
    export interface Current {
      created_at: string;

      created_by: string;

      name: string;

      billable_metric_id?: string;

      composite_product_ids?: Array<string>;

      composite_tags?: Array<string>;

      exclude_free_usage?: boolean;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      is_refundable?: boolean;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      netsuite_internal_item_id?: string;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      netsuite_overage_item_id?: string;

      /**
       * For USAGE products only. Groups usage line items on invoices.
       */
      presentation_group_key?: Array<string>;

      /**
       * For USAGE products only. If set, pricing for this product will be determined for
       * each pricing_group_key value, as opposed to the product as a whole.
       */
      pricing_group_key?: Array<string>;

      /**
       * Optional. Only valid for USAGE products. If provided, the quantity will be
       * converted using the provided conversion factor and operation. For example, if
       * the operation is "multiply" and the conversion factor is 100, then the quantity
       * will be multiplied by 100. This can be used in cases where data is sent in one
       * unit and priced in another. For example, data could be sent in MB and priced in
       * GB. In this case, the conversion factor would be 1024 and the operation would be
       * "divide".
       */
      quantity_conversion?: Current.QuantityConversion | null;

      /**
       * Optional. Only valid for USAGE products. If provided, the quantity will be
       * rounded using the provided rounding method and decimal places. For example, if
       * the method is "round up" and the decimal places is 0, then the quantity will be
       * rounded up to the nearest integer.
       */
      quantity_rounding?: Current.QuantityRounding | null;

      starting_at?: string;

      tags?: Array<string>;
    }

    export namespace Current {
      /**
       * Optional. Only valid for USAGE products. If provided, the quantity will be
       * converted using the provided conversion factor and operation. For example, if
       * the operation is "multiply" and the conversion factor is 100, then the quantity
       * will be multiplied by 100. This can be used in cases where data is sent in one
       * unit and priced in another. For example, data could be sent in MB and priced in
       * GB. In this case, the conversion factor would be 1024 and the operation would be
       * "divide".
       */
      export interface QuantityConversion {
        /**
         * The factor to multiply or divide the quantity by.
         */
        conversion_factor: number;

        /**
         * The operation to perform on the quantity
         */
        operation: 'MULTIPLY' | 'DIVIDE';

        /**
         * Optional name for this conversion.
         */
        name?: string;
      }

      /**
       * Optional. Only valid for USAGE products. If provided, the quantity will be
       * rounded using the provided rounding method and decimal places. For example, if
       * the method is "round up" and the decimal places is 0, then the quantity will be
       * rounded up to the nearest integer.
       */
      export interface QuantityRounding {
        decimal_places: number;

        rounding_method: 'ROUND_UP' | 'ROUND_DOWN' | 'ROUND_HALF_UP';
      }
    }

    export interface Initial {
      created_at: string;

      created_by: string;

      name: string;

      billable_metric_id?: string;

      composite_product_ids?: Array<string>;

      composite_tags?: Array<string>;

      exclude_free_usage?: boolean;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      is_refundable?: boolean;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      netsuite_internal_item_id?: string;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      netsuite_overage_item_id?: string;

      /**
       * For USAGE products only. Groups usage line items on invoices.
       */
      presentation_group_key?: Array<string>;

      /**
       * For USAGE products only. If set, pricing for this product will be determined for
       * each pricing_group_key value, as opposed to the product as a whole.
       */
      pricing_group_key?: Array<string>;

      /**
       * Optional. Only valid for USAGE products. If provided, the quantity will be
       * converted using the provided conversion factor and operation. For example, if
       * the operation is "multiply" and the conversion factor is 100, then the quantity
       * will be multiplied by 100. This can be used in cases where data is sent in one
       * unit and priced in another. For example, data could be sent in MB and priced in
       * GB. In this case, the conversion factor would be 1024 and the operation would be
       * "divide".
       */
      quantity_conversion?: Initial.QuantityConversion | null;

      /**
       * Optional. Only valid for USAGE products. If provided, the quantity will be
       * rounded using the provided rounding method and decimal places. For example, if
       * the method is "round up" and the decimal places is 0, then the quantity will be
       * rounded up to the nearest integer.
       */
      quantity_rounding?: Initial.QuantityRounding | null;

      starting_at?: string;

      tags?: Array<string>;
    }

    export namespace Initial {
      /**
       * Optional. Only valid for USAGE products. If provided, the quantity will be
       * converted using the provided conversion factor and operation. For example, if
       * the operation is "multiply" and the conversion factor is 100, then the quantity
       * will be multiplied by 100. This can be used in cases where data is sent in one
       * unit and priced in another. For example, data could be sent in MB and priced in
       * GB. In this case, the conversion factor would be 1024 and the operation would be
       * "divide".
       */
      export interface QuantityConversion {
        /**
         * The factor to multiply or divide the quantity by.
         */
        conversion_factor: number;

        /**
         * The operation to perform on the quantity
         */
        operation: 'MULTIPLY' | 'DIVIDE';

        /**
         * Optional name for this conversion.
         */
        name?: string;
      }

      /**
       * Optional. Only valid for USAGE products. If provided, the quantity will be
       * rounded using the provided rounding method and decimal places. For example, if
       * the method is "round up" and the decimal places is 0, then the quantity will be
       * rounded up to the nearest integer.
       */
      export interface QuantityRounding {
        decimal_places: number;

        rounding_method: 'ROUND_UP' | 'ROUND_DOWN' | 'ROUND_HALF_UP';
      }
    }

    export interface Update {
      created_at: string;

      created_by: string;

      billable_metric_id?: string;

      composite_product_ids?: Array<string>;

      composite_tags?: Array<string>;

      exclude_free_usage?: boolean;

      is_refundable?: boolean;

      name?: string;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      netsuite_internal_item_id?: string;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      netsuite_overage_item_id?: string;

      /**
       * For USAGE products only. Groups usage line items on invoices.
       */
      presentation_group_key?: Array<string>;

      /**
       * For USAGE products only. If set, pricing for this product will be determined for
       * each pricing_group_key value, as opposed to the product as a whole.
       */
      pricing_group_key?: Array<string>;

      /**
       * Optional. Only valid for USAGE products. If provided, the quantity will be
       * converted using the provided conversion factor and operation. For example, if
       * the operation is "multiply" and the conversion factor is 100, then the quantity
       * will be multiplied by 100. This can be used in cases where data is sent in one
       * unit and priced in another. For example, data could be sent in MB and priced in
       * GB. In this case, the conversion factor would be 1024 and the operation would be
       * "divide".
       */
      quantity_conversion?: Update.QuantityConversion | null;

      /**
       * Optional. Only valid for USAGE products. If provided, the quantity will be
       * rounded using the provided rounding method and decimal places. For example, if
       * the method is "round up" and the decimal places is 0, then the quantity will be
       * rounded up to the nearest integer.
       */
      quantity_rounding?: Update.QuantityRounding | null;

      starting_at?: string;

      tags?: Array<string>;
    }

    export namespace Update {
      /**
       * Optional. Only valid for USAGE products. If provided, the quantity will be
       * converted using the provided conversion factor and operation. For example, if
       * the operation is "multiply" and the conversion factor is 100, then the quantity
       * will be multiplied by 100. This can be used in cases where data is sent in one
       * unit and priced in another. For example, data could be sent in MB and priced in
       * GB. In this case, the conversion factor would be 1024 and the operation would be
       * "divide".
       */
      export interface QuantityConversion {
        /**
         * The factor to multiply or divide the quantity by.
         */
        conversion_factor: number;

        /**
         * The operation to perform on the quantity
         */
        operation: 'MULTIPLY' | 'DIVIDE';

        /**
         * Optional name for this conversion.
         */
        name?: string;
      }

      /**
       * Optional. Only valid for USAGE products. If provided, the quantity will be
       * rounded using the provided rounding method and decimal places. For example, if
       * the method is "round up" and the decimal places is 0, then the quantity will be
       * rounded up to the nearest integer.
       */
      export interface QuantityRounding {
        decimal_places: number;

        rounding_method: 'ROUND_UP' | 'ROUND_DOWN' | 'ROUND_HALF_UP';
      }
    }
  }
}

export interface ProductUpdateResponse {
  data: Shared.ID;
}

export interface ProductListResponse {
  id: string;

  current: ProductListResponse.Current;

  initial: ProductListResponse.Initial;

  type: 'USAGE' | 'SUBSCRIPTION' | 'COMPOSITE' | 'FIXED' | 'PRO_SERVICE';

  updates: Array<ProductListResponse.Update>;

  archived_at?: string | null;

  custom_fields?: Record<string, string>;
}

export namespace ProductListResponse {
  export interface Current {
    created_at: string;

    created_by: string;

    name: string;

    billable_metric_id?: string;

    composite_product_ids?: Array<string>;

    composite_tags?: Array<string>;

    exclude_free_usage?: boolean;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    is_refundable?: boolean;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_internal_item_id?: string;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_overage_item_id?: string;

    /**
     * For USAGE products only. Groups usage line items on invoices.
     */
    presentation_group_key?: Array<string>;

    /**
     * For USAGE products only. If set, pricing for this product will be determined for
     * each pricing_group_key value, as opposed to the product as a whole.
     */
    pricing_group_key?: Array<string>;

    /**
     * Optional. Only valid for USAGE products. If provided, the quantity will be
     * converted using the provided conversion factor and operation. For example, if
     * the operation is "multiply" and the conversion factor is 100, then the quantity
     * will be multiplied by 100. This can be used in cases where data is sent in one
     * unit and priced in another. For example, data could be sent in MB and priced in
     * GB. In this case, the conversion factor would be 1024 and the operation would be
     * "divide".
     */
    quantity_conversion?: Current.QuantityConversion | null;

    /**
     * Optional. Only valid for USAGE products. If provided, the quantity will be
     * rounded using the provided rounding method and decimal places. For example, if
     * the method is "round up" and the decimal places is 0, then the quantity will be
     * rounded up to the nearest integer.
     */
    quantity_rounding?: Current.QuantityRounding | null;

    starting_at?: string;

    tags?: Array<string>;
  }

  export namespace Current {
    /**
     * Optional. Only valid for USAGE products. If provided, the quantity will be
     * converted using the provided conversion factor and operation. For example, if
     * the operation is "multiply" and the conversion factor is 100, then the quantity
     * will be multiplied by 100. This can be used in cases where data is sent in one
     * unit and priced in another. For example, data could be sent in MB and priced in
     * GB. In this case, the conversion factor would be 1024 and the operation would be
     * "divide".
     */
    export interface QuantityConversion {
      /**
       * The factor to multiply or divide the quantity by.
       */
      conversion_factor: number;

      /**
       * The operation to perform on the quantity
       */
      operation: 'MULTIPLY' | 'DIVIDE';

      /**
       * Optional name for this conversion.
       */
      name?: string;
    }

    /**
     * Optional. Only valid for USAGE products. If provided, the quantity will be
     * rounded using the provided rounding method and decimal places. For example, if
     * the method is "round up" and the decimal places is 0, then the quantity will be
     * rounded up to the nearest integer.
     */
    export interface QuantityRounding {
      decimal_places: number;

      rounding_method: 'ROUND_UP' | 'ROUND_DOWN' | 'ROUND_HALF_UP';
    }
  }

  export interface Initial {
    created_at: string;

    created_by: string;

    name: string;

    billable_metric_id?: string;

    composite_product_ids?: Array<string>;

    composite_tags?: Array<string>;

    exclude_free_usage?: boolean;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    is_refundable?: boolean;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_internal_item_id?: string;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_overage_item_id?: string;

    /**
     * For USAGE products only. Groups usage line items on invoices.
     */
    presentation_group_key?: Array<string>;

    /**
     * For USAGE products only. If set, pricing for this product will be determined for
     * each pricing_group_key value, as opposed to the product as a whole.
     */
    pricing_group_key?: Array<string>;

    /**
     * Optional. Only valid for USAGE products. If provided, the quantity will be
     * converted using the provided conversion factor and operation. For example, if
     * the operation is "multiply" and the conversion factor is 100, then the quantity
     * will be multiplied by 100. This can be used in cases where data is sent in one
     * unit and priced in another. For example, data could be sent in MB and priced in
     * GB. In this case, the conversion factor would be 1024 and the operation would be
     * "divide".
     */
    quantity_conversion?: Initial.QuantityConversion | null;

    /**
     * Optional. Only valid for USAGE products. If provided, the quantity will be
     * rounded using the provided rounding method and decimal places. For example, if
     * the method is "round up" and the decimal places is 0, then the quantity will be
     * rounded up to the nearest integer.
     */
    quantity_rounding?: Initial.QuantityRounding | null;

    starting_at?: string;

    tags?: Array<string>;
  }

  export namespace Initial {
    /**
     * Optional. Only valid for USAGE products. If provided, the quantity will be
     * converted using the provided conversion factor and operation. For example, if
     * the operation is "multiply" and the conversion factor is 100, then the quantity
     * will be multiplied by 100. This can be used in cases where data is sent in one
     * unit and priced in another. For example, data could be sent in MB and priced in
     * GB. In this case, the conversion factor would be 1024 and the operation would be
     * "divide".
     */
    export interface QuantityConversion {
      /**
       * The factor to multiply or divide the quantity by.
       */
      conversion_factor: number;

      /**
       * The operation to perform on the quantity
       */
      operation: 'MULTIPLY' | 'DIVIDE';

      /**
       * Optional name for this conversion.
       */
      name?: string;
    }

    /**
     * Optional. Only valid for USAGE products. If provided, the quantity will be
     * rounded using the provided rounding method and decimal places. For example, if
     * the method is "round up" and the decimal places is 0, then the quantity will be
     * rounded up to the nearest integer.
     */
    export interface QuantityRounding {
      decimal_places: number;

      rounding_method: 'ROUND_UP' | 'ROUND_DOWN' | 'ROUND_HALF_UP';
    }
  }

  export interface Update {
    created_at: string;

    created_by: string;

    billable_metric_id?: string;

    composite_product_ids?: Array<string>;

    composite_tags?: Array<string>;

    exclude_free_usage?: boolean;

    is_refundable?: boolean;

    name?: string;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_internal_item_id?: string;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_overage_item_id?: string;

    /**
     * For USAGE products only. Groups usage line items on invoices.
     */
    presentation_group_key?: Array<string>;

    /**
     * For USAGE products only. If set, pricing for this product will be determined for
     * each pricing_group_key value, as opposed to the product as a whole.
     */
    pricing_group_key?: Array<string>;

    /**
     * Optional. Only valid for USAGE products. If provided, the quantity will be
     * converted using the provided conversion factor and operation. For example, if
     * the operation is "multiply" and the conversion factor is 100, then the quantity
     * will be multiplied by 100. This can be used in cases where data is sent in one
     * unit and priced in another. For example, data could be sent in MB and priced in
     * GB. In this case, the conversion factor would be 1024 and the operation would be
     * "divide".
     */
    quantity_conversion?: Update.QuantityConversion | null;

    /**
     * Optional. Only valid for USAGE products. If provided, the quantity will be
     * rounded using the provided rounding method and decimal places. For example, if
     * the method is "round up" and the decimal places is 0, then the quantity will be
     * rounded up to the nearest integer.
     */
    quantity_rounding?: Update.QuantityRounding | null;

    starting_at?: string;

    tags?: Array<string>;
  }

  export namespace Update {
    /**
     * Optional. Only valid for USAGE products. If provided, the quantity will be
     * converted using the provided conversion factor and operation. For example, if
     * the operation is "multiply" and the conversion factor is 100, then the quantity
     * will be multiplied by 100. This can be used in cases where data is sent in one
     * unit and priced in another. For example, data could be sent in MB and priced in
     * GB. In this case, the conversion factor would be 1024 and the operation would be
     * "divide".
     */
    export interface QuantityConversion {
      /**
       * The factor to multiply or divide the quantity by.
       */
      conversion_factor: number;

      /**
       * The operation to perform on the quantity
       */
      operation: 'MULTIPLY' | 'DIVIDE';

      /**
       * Optional name for this conversion.
       */
      name?: string;
    }

    /**
     * Optional. Only valid for USAGE products. If provided, the quantity will be
     * rounded using the provided rounding method and decimal places. For example, if
     * the method is "round up" and the decimal places is 0, then the quantity will be
     * rounded up to the nearest integer.
     */
    export interface QuantityRounding {
      decimal_places: number;

      rounding_method: 'ROUND_UP' | 'ROUND_DOWN' | 'ROUND_HALF_UP';
    }
  }
}

export interface ProductArchiveResponse {
  data: Shared.ID;
}

export interface ProductCreateParams {
  /**
   * displayed on invoices
   */
  name: string;

  type: 'FIXED' | 'USAGE' | 'COMPOSITE' | 'SUBSCRIPTION' | 'PROFESSIONAL_SERVICE' | 'PRO_SERVICE';

  /**
   * Required for USAGE products
   */
  billable_metric_id?: string;

  /**
   * Required for COMPOSITE products
   */
  composite_product_ids?: Array<string>;

  /**
   * Required for COMPOSITE products
   */
  composite_tags?: Array<string>;

  /**
   * Beta feature only available for composite products. If true, products with $0
   * will not be included when computing composite usage. Defaults to false
   */
  exclude_free_usage?: boolean;

  /**
   * This field's availability is dependent on your client's configuration. Defaults
   * to true
   */
  is_refundable?: boolean;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  netsuite_internal_item_id?: string;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  netsuite_overage_item_id?: string;

  /**
   * For USAGE products only. Groups usage line items on invoices.
   */
  presentation_group_key?: Array<string>;

  /**
   * For USAGE products only. If set, pricing for this product will be determined for
   * each pricing_group_key value, as opposed to the product as a whole.
   */
  pricing_group_key?: Array<string>;

  /**
   * Optional. Only valid for USAGE products. If provided, the quantity will be
   * converted using the provided conversion factor and operation. For example, if
   * the operation is "multiply" and the conversion factor is 100, then the quantity
   * will be multiplied by 100. This can be used in cases where data is sent in one
   * unit and priced in another. For example, data could be sent in MB and priced in
   * GB. In this case, the conversion factor would be 1024 and the operation would be
   * "divide".
   */
  quantity_conversion?: ProductCreateParams.QuantityConversion | null;

  /**
   * Optional. Only valid for USAGE products. If provided, the quantity will be
   * rounded using the provided rounding method and decimal places. For example, if
   * the method is "round up" and the decimal places is 0, then the quantity will be
   * rounded up to the nearest integer.
   */
  quantity_rounding?: ProductCreateParams.QuantityRounding | null;

  tags?: Array<string>;
}

export namespace ProductCreateParams {
  /**
   * Optional. Only valid for USAGE products. If provided, the quantity will be
   * converted using the provided conversion factor and operation. For example, if
   * the operation is "multiply" and the conversion factor is 100, then the quantity
   * will be multiplied by 100. This can be used in cases where data is sent in one
   * unit and priced in another. For example, data could be sent in MB and priced in
   * GB. In this case, the conversion factor would be 1024 and the operation would be
   * "divide".
   */
  export interface QuantityConversion {
    /**
     * The factor to multiply or divide the quantity by.
     */
    conversion_factor: number;

    /**
     * The operation to perform on the quantity
     */
    operation: 'MULTIPLY' | 'DIVIDE';

    /**
     * Optional name for this conversion.
     */
    name?: string;
  }

  /**
   * Optional. Only valid for USAGE products. If provided, the quantity will be
   * rounded using the provided rounding method and decimal places. For example, if
   * the method is "round up" and the decimal places is 0, then the quantity will be
   * rounded up to the nearest integer.
   */
  export interface QuantityRounding {
    decimal_places: number;

    rounding_method: 'ROUND_UP' | 'ROUND_DOWN' | 'ROUND_HALF_UP';
  }
}

export interface ProductRetrieveParams {
  id: string;
}

export interface ProductUpdateParams {
  /**
   * ID of the product to update
   */
  product_id: string;

  /**
   * Timestamp representing when the update should go into effect. It must be on an
   * hour boundary (e.g. 1:00, not 1:30).
   */
  starting_at: string;

  /**
   * Available for USAGE products only. If not provided, defaults to product's
   * current billable metric.
   */
  billable_metric_id?: string;

  /**
   * Available for COMPOSITE products only. If not provided, defaults to product's
   * current composite_product_ids.
   */
  composite_product_ids?: Array<string>;

  /**
   * Available for COMPOSITE products only. If not provided, defaults to product's
   * current composite_tags.
   */
  composite_tags?: Array<string>;

  /**
   * Beta feature only available for composite products. If true, products with $0
   * will not be included when computing composite usage. Defaults to false
   */
  exclude_free_usage?: boolean;

  /**
   * Defaults to product's current refundability status. This field's availability is
   * dependent on your client's configuration.
   */
  is_refundable?: boolean;

  /**
   * displayed on invoices. If not provided, defaults to product's current name.
   */
  name?: string;

  /**
   * If not provided, defaults to product's current netsuite_internal_item_id. This
   * field's availability is dependent on your client's configuration.
   */
  netsuite_internal_item_id?: string;

  /**
   * Available for USAGE and COMPOSITE products only. If not provided, defaults to
   * product's current netsuite_overage_item_id. This field's availability is
   * dependent on your client's configuration.
   */
  netsuite_overage_item_id?: string;

  /**
   * For USAGE products only. Groups usage line items on invoices.
   */
  presentation_group_key?: Array<string>;

  /**
   * For USAGE products only. If set, pricing for this product will be determined for
   * each pricing_group_key value, as opposed to the product as a whole.
   */
  pricing_group_key?: Array<string>;

  /**
   * Optional. Only valid for USAGE products. If provided, the quantity will be
   * converted using the provided conversion factor and operation. For example, if
   * the operation is "multiply" and the conversion factor is 100, then the quantity
   * will be multiplied by 100. This can be used in cases where data is sent in one
   * unit and priced in another. For example, data could be sent in MB and priced in
   * GB. In this case, the conversion factor would be 1024 and the operation would be
   * "divide".
   */
  quantity_conversion?: ProductUpdateParams.QuantityConversion | null;

  /**
   * Optional. Only valid for USAGE products. If provided, the quantity will be
   * rounded using the provided rounding method and decimal places. For example, if
   * the method is "round up" and the decimal places is 0, then the quantity will be
   * rounded up to the nearest integer.
   */
  quantity_rounding?: ProductUpdateParams.QuantityRounding | null;

  /**
   * If not provided, defaults to product's current tags
   */
  tags?: Array<string>;
}

export namespace ProductUpdateParams {
  /**
   * Optional. Only valid for USAGE products. If provided, the quantity will be
   * converted using the provided conversion factor and operation. For example, if
   * the operation is "multiply" and the conversion factor is 100, then the quantity
   * will be multiplied by 100. This can be used in cases where data is sent in one
   * unit and priced in another. For example, data could be sent in MB and priced in
   * GB. In this case, the conversion factor would be 1024 and the operation would be
   * "divide".
   */
  export interface QuantityConversion {
    /**
     * The factor to multiply or divide the quantity by.
     */
    conversion_factor: number;

    /**
     * The operation to perform on the quantity
     */
    operation: 'MULTIPLY' | 'DIVIDE';

    /**
     * Optional name for this conversion.
     */
    name?: string;
  }

  /**
   * Optional. Only valid for USAGE products. If provided, the quantity will be
   * rounded using the provided rounding method and decimal places. For example, if
   * the method is "round up" and the decimal places is 0, then the quantity will be
   * rounded up to the nearest integer.
   */
  export interface QuantityRounding {
    decimal_places: number;

    rounding_method: 'ROUND_UP' | 'ROUND_DOWN' | 'ROUND_HALF_UP';
  }
}

export interface ProductListParams extends CursorPageParams {
  /**
   * Body param: Filter options for the product list
   */
  archive_filter?: 'ARCHIVED' | 'NOT_ARCHIVED' | 'ALL';
}

export interface ProductArchiveParams {
  /**
   * ID of the product to be archived
   */
  product_id: string;
}

export namespace Products {
  export import ProductCreateResponse = ProductsAPI.ProductCreateResponse;
  export import ProductRetrieveResponse = ProductsAPI.ProductRetrieveResponse;
  export import ProductUpdateResponse = ProductsAPI.ProductUpdateResponse;
  export import ProductListResponse = ProductsAPI.ProductListResponse;
  export import ProductArchiveResponse = ProductsAPI.ProductArchiveResponse;
  export import ProductListResponsesCursorPage = ProductsAPI.ProductListResponsesCursorPage;
  export import ProductCreateParams = ProductsAPI.ProductCreateParams;
  export import ProductRetrieveParams = ProductsAPI.ProductRetrieveParams;
  export import ProductUpdateParams = ProductsAPI.ProductUpdateParams;
  export import ProductListParams = ProductsAPI.ProductListParams;
  export import ProductArchiveParams = ProductsAPI.ProductArchiveParams;
}
