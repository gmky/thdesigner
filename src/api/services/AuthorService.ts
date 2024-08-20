/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthorDto } from '../models/AuthorDto';
import type { AuthorPageResponse } from '../models/AuthorPageResponse';
import type { CreateAuthorRequest } from '../models/CreateAuthorRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AuthorService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create author
     * @param formData
     * @returns AuthorDto Author created
     * @throws ApiError
     */
    public postAuthors(
        formData?: CreateAuthorRequest,
    ): CancelablePromise<AuthorDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/authors',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * Get author with pagination
     * @param page
     * @param size
     * @returns AuthorPageResponse Author with pagination
     * @throws ApiError
     */
    public getAuthors(
        page?: number,
        size?: number,
    ): CancelablePromise<AuthorPageResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/authors',
            query: {
                'page': page,
                'size': size,
            },
        });
    }
    /**
     * Get author detail by ID
     * @param id
     * @returns AuthorDto Author detail
     * @throws ApiError
     */
    public getAuthors1(
        id?: number,
    ): CancelablePromise<AuthorDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/authors/{id}',
            path: {
                'id': id,
            },
        });
    }
}
