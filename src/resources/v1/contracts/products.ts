// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as ProductsAPI from './products';
import * as Shared from '../../shared';
import { CursorPage, type CursorPageParams } from '../../../pagination';

export class Products extends APIResource {
  /**
   * Create a new product
   *
   * @example
   * ```ts
   * const product = await client.v1.contracts.products.create({
   *   name: 'My Product',
   *   type: 'USAGE',
   *   billable_metric_id:
   *     '13117714-3f05-48e5-a6e9-a66093f13b4d',
   * });
   * ```
   */
  create(body: ProductCreateParams, options?: Core.RequestOptions): Core.APIPromise<ProductCreateResponse> {
    return this._client.post('/v1/contract-pricing/products/create', { body, ...options });
  }

  /**
   * Get a specific product
   *
   * @example
   * ```ts
   * const product = await client.v1.contracts.products.retrieve(
   *   { id: 'd84e7f4e-7a70-4fe4-be02-7a5027beffcc' },
   * );
   * ```
   */
  retrieve(
    body: ProductRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProductRetrieveResponse> {
    return this._client.post('/v1/contract-pricing/products/get', { body, ...options });
  }

  /**
   * Update a product
   *
   * @example
   * ```ts
   * const product = await client.v1.contracts.products.update({
   *   product_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *   starting_at: '2020-01-01T00:00:00.000Z',
   *   name: 'My Updated Product',
   * });
   * ```
   */
  update(body: ProductUpdateParams, options?: Core.RequestOptions): Core.APIPromise<ProductUpdateResponse> {
    return this._client.post('/v1/contract-pricing/products/update', { body, ...options });
  }

  /**
   * List products
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const productListResponse of client.v1.contracts.products.list(
   *   { archive_filter: 'NOT_ARCHIVED' },
   * )) {
   *   // ...
   * }
   * ```
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
    return this._client.getAPIList('/v1/contract-pricing/products/list', ProductListResponsesCursorPage, {
      query: { limit, next_page },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Archive a product
   *
   * @example
   * ```ts
   * const response = await client.v1.contracts.products.archive(
   *   { product_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc' },
   * );
   * ```
   */
  archive(
    body: ProductArchiveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProductArchiveResponse> {
    return this._client.post('/v1/contract-pricing/products/archive', { body, ...options });
  }
}

export class ProductListResponsesCursorPage extends CursorPage<ProductListResponse> {}

export interface ProductListItemState {
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
   * For USAGE products only. Groups usage line items on invoices. The superset of
   * values in the pricing group key and presentation group key must be set as one
   * compound group key on the billable metric.
   */
  presentation_group_key?: Array<string>;

  /**
   * For USAGE products only. If set, pricing for this product will be determined for
   * each pricing_group_key value, as opposed to the product as a whole. The superset
   * of values in the pricing group key and presentation group key must be set as one
   * compound group key on the billable metric.
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
  quantity_conversion?: QuantityConversion | null;

  /**
   * Optional. Only valid for USAGE products. If provided, the quantity will be
   * rounded using the provided rounding method and decimal places. For example, if
   * the method is "round up" and the decimal places is 0, then the quantity will be
   * rounded up to the nearest integer.
   */
  quantity_rounding?: QuantityRounding | null;

  starting_at?: string;

  tags?: Array<string>;
}

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

export interface ProductCreateResponse {
  data: Shared.ID;
}

export interface ProductRetrieveResponse {
  data: ProductRetrieveResponse.Data;
}

export namespace ProductRetrieveResponse {
  export interface Data {
    id: string;

    current: ProductsAPI.ProductListItemState;

    initial: ProductsAPI.ProductListItemState;

    type: 'USAGE' | 'SUBSCRIPTION' | 'COMPOSITE' | 'FIXED' | 'PRO_SERVICE';

    updates: Array<Data.Update>;

    archived_at?: string | null;

    custom_fields?: Record<string, string>;
  }

  export namespace Data {
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
       * For USAGE products only. Groups usage line items on invoices. The superset of
       * values in the pricing group key and presentation group key must be set as one
       * compound group key on the billable metric.
       */
      presentation_group_key?: Array<string>;

      /**
       * For USAGE products only. If set, pricing for this product will be determined for
       * each pricing_group_key value, as opposed to the product as a whole. The superset
       * of values in the pricing group key and presentation group key must be set as one
       * compound group key on the billable metric.
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
      quantity_conversion?: ProductsAPI.QuantityConversion | null;

      /**
       * Optional. Only valid for USAGE products. If provided, the quantity will be
       * rounded using the provided rounding method and decimal places. For example, if
       * the method is "round up" and the decimal places is 0, then the quantity will be
       * rounded up to the nearest integer.
       */
      quantity_rounding?: ProductsAPI.QuantityRounding | null;

      starting_at?: string;

      tags?: Array<string>;
    }
  }
}

export interface ProductUpdateResponse {
  data: Shared.ID;
}

export interface ProductListResponse {
  id: string;

  current: ProductListItemState;

  initial: ProductListItemState;

  type: 'USAGE' | 'SUBSCRIPTION' | 'COMPOSITE' | 'FIXED' | 'PRO_SERVICE';

  updates: Array<ProductListResponse.Update>;

  archived_at?: string | null;

  custom_fields?: Record<string, string>;
}

export namespace ProductListResponse {
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
     * For USAGE products only. Groups usage line items on invoices. The superset of
     * values in the pricing group key and presentation group key must be set as one
     * compound group key on the billable metric.
     */
    presentation_group_key?: Array<string>;

    /**
     * For USAGE products only. If set, pricing for this product will be determined for
     * each pricing_group_key value, as opposed to the product as a whole. The superset
     * of values in the pricing group key and presentation group key must be set as one
     * compound group key on the billable metric.
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
    quantity_conversion?: ProductsAPI.QuantityConversion | null;

    /**
     * Optional. Only valid for USAGE products. If provided, the quantity will be
     * rounded using the provided rounding method and decimal places. For example, if
     * the method is "round up" and the decimal places is 0, then the quantity will be
     * rounded up to the nearest integer.
     */
    quantity_rounding?: ProductsAPI.QuantityRounding | null;

    starting_at?: string;

    tags?: Array<string>;
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
   * to true.
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
   * For USAGE products only. Groups usage line items on invoices. The superset of
   * values in the pricing group key and presentation group key must be set as one
   * compound group key on the billable metric.
   */
  presentation_group_key?: Array<string>;

  /**
   * For USAGE products only. If set, pricing for this product will be determined for
   * each pricing_group_key value, as opposed to the product as a whole. The superset
   * of values in the pricing group key and presentation group key must be set as one
   * compound group key on the billable metric.
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
  quantity_conversion?: QuantityConversion | null;

  /**
   * Optional. Only valid for USAGE products. If provided, the quantity will be
   * rounded using the provided rounding method and decimal places. For example, if
   * the method is "round up" and the decimal places is 0, then the quantity will be
   * rounded up to the nearest integer.
   */
  quantity_rounding?: QuantityRounding | null;

  tags?: Array<string>;
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
   * For USAGE products only. Groups usage line items on invoices. The superset of
   * values in the pricing group key and presentation group key must be set as one
   * compound group key on the billable metric.
   */
  presentation_group_key?: Array<string>;

  /**
   * For USAGE products only. If set, pricing for this product will be determined for
   * each pricing_group_key value, as opposed to the product as a whole. The superset
   * of values in the pricing group key and presentation group key must be set as one
   * compound group key on the billable metric.
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
  quantity_conversion?: QuantityConversion | null;

  /**
   * Optional. Only valid for USAGE products. If provided, the quantity will be
   * rounded using the provided rounding method and decimal places. For example, if
   * the method is "round up" and the decimal places is 0, then the quantity will be
   * rounded up to the nearest integer.
   */
  quantity_rounding?: QuantityRounding | null;

  /**
   * If not provided, defaults to product's current tags
   */
  tags?: Array<string>;
}

export interface ProductListParams extends CursorPageParams {
  /**
   * Body param: Filter options for the product list. If not provided, defaults to
   * not archived.
   */
  archive_filter?: 'ARCHIVED' | 'NOT_ARCHIVED' | 'ALL';
}

export interface ProductArchiveParams {
  /**
   * ID of the product to be archived
   */
  product_id: string;
}

Products.ProductListResponsesCursorPage = ProductListResponsesCursorPage;

export declare namespace Products {
  export {
    type ProductListItemState as ProductListItemState,
    type QuantityConversion as QuantityConversion,
    type QuantityRounding as QuantityRounding,
    type ProductCreateResponse as ProductCreateResponse,
    type ProductRetrieveResponse as ProductRetrieveResponse,
    type ProductUpdateResponse as ProductUpdateResponse,
    type ProductListResponse as ProductListResponse,
    type ProductArchiveResponse as ProductArchiveResponse,
    ProductListResponsesCursorPage as ProductListResponsesCursorPage,
    type ProductCreateParams as ProductCreateParams,
    type ProductRetrieveParams as ProductRetrieveParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
    type ProductArchiveParams as ProductArchiveParams,
  };
}
