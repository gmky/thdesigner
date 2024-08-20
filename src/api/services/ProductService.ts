/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProductRequest } from '../models/CreateProductRequest';
import type { ProductDto } from '../models/ProductDto';
import type { ProductPageResponse } from '../models/ProductPageResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProductService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create new product
     * @param formData
     * @returns ProductDto Product detail
     * @throws ApiError
     */
    public postProducts(
        formData?: CreateProductRequest,
    ): CancelablePromise<ProductDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/products',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * Get all product with pagination
     * @param page
     * @param size
     * @returns ProductPageResponse Data
     * @throws ApiError
     */
    public getProducts(
        page?: number,
        size?: number,
    ): CancelablePromise<ProductPageResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/products',
            query: {
                'page': page,
                'size': size,
            },
        });
    }
    /**
     * Get product detail by ID
     * @param id
     * @returns ProductDto Product detail
     * @throws ApiError
     */
    public getProducts1(
        id: number,
    ): CancelablePromise<ProductDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/products/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Delete product by ID
     * Require ADMIN role
     * @param id
     * @returns any Product deleted
     * @throws ApiError
     */
    public deleteProducts(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/products/{id}',
            path: {
                'id': id,
            },
        });
    }
}
