// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as Shared from '../../../shared';

export class ProductOrders extends APIResource {
  /**
   * Updates ordering of specified products
   *
   * @example
   * ```ts
   * const productOrder =
   *   await client.v1.contracts.rateCards.productOrders.update({
   *     product_moves: [
   *       {
   *         product_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *         position: 0,
   *       },
   *       {
   *         product_id: 'b086f2f4-9851-4466-9ca0-30d53e6a42ac',
   *         position: 1,
   *       },
   *     ],
   *     rate_card_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *   });
   * ```
   */
  update(
    body: ProductOrderUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProductOrderUpdateResponse> {
    return this._client.post('/v1/contract-pricing/rate-cards/moveRateCardProducts', { body, ...options });
  }

  /**
   * Sets the ordering of products within a rate card
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.contracts.rateCards.productOrders.set({
   *     product_order: [
   *       '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *       'b086f2f4-9851-4466-9ca0-30d53e6a42ac',
   *     ],
   *     rate_card_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *   });
   * ```
   */
  set(body: ProductOrderSetParams, options?: Core.RequestOptions): Core.APIPromise<ProductOrderSetResponse> {
    return this._client.post('/v1/contract-pricing/rate-cards/setRateCardProductsOrder', {
      body,
      ...options,
    });
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

export declare namespace ProductOrders {
  export {
    type ProductOrderUpdateResponse as ProductOrderUpdateResponse,
    type ProductOrderSetResponse as ProductOrderSetResponse,
    type ProductOrderUpdateParams as ProductOrderUpdateParams,
    type ProductOrderSetParams as ProductOrderSetParams,
  };
}
