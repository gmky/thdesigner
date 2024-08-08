/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GalleryListResponse } from '../models/GalleryListResponse';
import type { GalleryRequest } from '../models/GalleryRequest';
import type { GalleryResponse } from '../models/GalleryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GalleryService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param sort Sort by attributes ascending (asc) or descending (desc)
     * @param paginationWithCount Return page/pageSize (default: true)
     * @param paginationPage Page number (default: 0)
     * @param paginationPageSize Page size (default: 25)
     * @param paginationStart Offset value (default: 0)
     * @param paginationLimit Number of entities to return (default: 25)
     * @param fields Fields to return (ex: title,author)
     * @param populate Relations to return
     * @param filters Filters to apply
     * @param locale Locale to apply
     * @returns GalleryListResponse OK
     * @throws ApiError
     */
    public getGalleries(
        sort?: string,
        paginationWithCount?: boolean,
        paginationPage?: number,
        paginationPageSize?: number,
        paginationStart?: number,
        paginationLimit?: number,
        fields?: string,
        populate?: string,
        filters?: Record<string, any>,
        locale?: string,
    ): CancelablePromise<GalleryListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/galleries',
            query: {
                'sort': sort,
                'pagination[withCount]': paginationWithCount,
                'pagination[page]': paginationPage,
                'pagination[pageSize]': paginationPageSize,
                'pagination[start]': paginationStart,
                'pagination[limit]': paginationLimit,
                'fields': fields,
                'populate': populate,
                'filters': filters,
                'locale': locale,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns GalleryResponse OK
     * @throws ApiError
     */
    public postGalleries(
        requestBody: GalleryRequest,
    ): CancelablePromise<GalleryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/galleries',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @param id
     * @returns GalleryResponse OK
     * @throws ApiError
     */
    public getGalleriesId(
        id: number,
    ): CancelablePromise<GalleryResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/galleries/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns GalleryResponse OK
     * @throws ApiError
     */
    public putGalleriesId(
        id: number,
        requestBody: GalleryRequest,
    ): CancelablePromise<GalleryResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/galleries/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @param id
     * @returns number OK
     * @throws ApiError
     */
    public deleteGalleriesId(
        id: number,
    ): CancelablePromise<number> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/galleries/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
}
