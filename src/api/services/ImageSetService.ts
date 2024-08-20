/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImageSetResponse } from '../models/ImageSetResponse';
import type { UploadImageSetRequest } from '../models/UploadImageSetRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ImageSetService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get image set with pagination
     * @param page
     * @param size
     * @returns ImageSetResponse Image set detail
     * @throws ApiError
     */
    public getImageSet(
        page?: number,
        size?: number,
    ): CancelablePromise<ImageSetResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/image-set',
            query: {
                'page': page,
                'size': size,
            },
        });
    }
    /**
     * Upload images
     * @param formData
     * @returns ImageSetResponse Upload image set ok
     * @throws ApiError
     */
    public postImageSet(
        formData?: UploadImageSetRequest,
    ): CancelablePromise<ImageSetResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/image-set',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * Delete image set by ID
     * @param id
     * @returns any Image set deleted
     * @throws ApiError
     */
    public deleteImageSet(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/image-set/{id}',
            path: {
                'id': id,
            },
        });
    }
}
