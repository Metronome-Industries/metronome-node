// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProductsAPI from './products';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Products are the items that customers purchase.
 */
export class Products extends APIResource {
  /**
   * Create a new product object. Products in Metronome represent your company's
   * individual product or service offerings. A Product can be thought of as the
   * basic unit of a line item on the invoice. This is analogous to SKUs or items in
   * an ERP system. Give the product a meaningful name as they will appear on
   * customer invoices.
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
  create(body: ProductCreateParams, options?: RequestOptions): APIPromise<ProductCreateResponse> {
    return this._client.post('/v1/contract-pricing/products/create', { body, ...options });
  }

  /**
   * Retrieve a product by its ID, including all metadata and historical changes.
   *
   * @example
   * ```ts
   * const product = await client.v1.contracts.products.retrieve(
   *   { id: 'd84e7f4e-7a70-4fe4-be02-7a5027beffcc' },
   * );
   * ```
   */
  retrieve(body: ProductRetrieveParams, options?: RequestOptions): APIPromise<ProductRetrieveResponse> {
    return this._client.post('/v1/contract-pricing/products/get', { body, ...options });
  }

  /**
   * Updates a product's configuration while maintaining billing continuity for
   * active customers. Use this endpoint to modify product names, metrics, pricing
   * rules, and composite settings without disrupting ongoing billing cycles. Changes
   * are scheduled using the starting_at timestamp, which must be on an hour
   * boundary—set future dates to schedule updates ahead of time, or past dates for
   * retroactive changes. Returns the updated product ID upon success.
   *
   * ### Usage guidance:
   *
   * - Product type cannot be changed after creation. For incorrect product types,
   *   create a new product and archive the original instead.
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
  update(body: ProductUpdateParams, options?: RequestOptions): APIPromise<ProductUpdateResponse> {
    return this._client.post('/v1/contract-pricing/products/update', { body, ...options });
  }

  /**
   * Get a paginated list of all products in your organization with their complete
   * configuration, version history, and metadata. By default excludes archived
   * products unless explicitly requested via the `archive_filter` parameter.
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
    params: ProductListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ProductListResponsesCursorPage, ProductListResponse> {
    const { limit, next_page, ...body } = params ?? {};
    return this._client.getAPIList('/v1/contract-pricing/products/list', CursorPage<ProductListResponse>, {
      query: { limit, next_page },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Archive a product. Any current rate cards associated with this product will
   * continue to function as normal. However, it will no longer be available as an
   * option for newly created rates. Once you archive a product, you can still
   * retrieve it in the UI and API, but you cannot unarchive it.
   *
   * @example
   * ```ts
   * const response = await client.v1.contracts.products.archive(
   *   { product_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc' },
   * );
   * ```
   */
  archive(body: ProductArchiveParams, options?: RequestOptions): APIPromise<ProductArchiveResponse> {
    return this._client.post('/v1/contract-pricing/products/archive', { body, ...options });
  }
}

export type ProductListResponsesCursorPage = CursorPage<ProductListResponse>;

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

    /**
     * Custom fields to be added eg. { "key1": "value1", "key2": "value2" }
     */
    custom_fields?: { [key: string]: string };
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

  /**
   * Custom fields to be added eg. { "key1": "value1", "key2": "value2" }
   */
  custom_fields?: { [key: string]: string };
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
   * Custom fields to be added eg. { "key1": "value1", "key2": "value2" }
   */
  custom_fields?: { [key: string]: string };

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
    type ProductListResponsesCursorPage as ProductListResponsesCursorPage,
    type ProductCreateParams as ProductCreateParams,
    type ProductRetrieveParams as ProductRetrieveParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
    type ProductArchiveParams as ProductArchiveParams,
  };
}
