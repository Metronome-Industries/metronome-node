// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ProductOrdersAPI from './product-orders';
import * as Shared from '../../shared';

export class ProductOrders extends APIResource {
  /**
   * Updates ordering of specified products
   */
  update(
    body: ProductOrderUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProductOrderUpdateResponse> {
    return this._client.post('/contract-pricing/rate-cards/moveRateCardProducts', { body, ...options });
  }

  /**
   * Sets the ordering of products within a rate card
   */
  set(body: ProductOrderSetParams, options?: Core.RequestOptions): Core.APIPromise<ProductOrderSetResponse> {
    return this._client.post('/contract-pricing/rate-cards/setRateCardProductsOrder', { body, ...options });
  }
}

export interface ProductOrderUpdateResponse {
  data: Shared.ID;
}

export interface ProductOrderSetResponse {
  data: Shared.ID;
}

export interface ProductOrderUpdateParams {
  product_moves: Array<ProductOrderUpdateParams.ProductMove>;

  /**
   * ID of the rate card to update
   */
  rate_card_id: string;
}

export namespace ProductOrderUpdateParams {
  export interface ProductMove {
    /**
     * 0-based index of the new position of the product
     */
    position: number;

    /**
     * ID of the product to move
     */
    product_id: string;
  }
}

export interface ProductOrderSetParams {
  product_order: Array<string>;

  /**
   * ID of the rate card to update
   */
  rate_card_id: string;
}

export namespace ProductOrders {
  export import ProductOrderUpdateResponse = ProductOrdersAPI.ProductOrderUpdateResponse;
  export import ProductOrderSetResponse = ProductOrdersAPI.ProductOrderSetResponse;
  export import ProductOrderUpdateParams = ProductOrdersAPI.ProductOrderUpdateParams;
  export import ProductOrderSetParams = ProductOrdersAPI.ProductOrderSetParams;
}
