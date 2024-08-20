/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserRequest } from '../models/CreateUserRequest';
import type { UserPageResponse } from '../models/UserPageResponse';
import type { UserProfile } from '../models/UserProfile';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UserService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get users with pagination
     * @param page
     * @param size
     * @returns UserPageResponse Get users with pagination
     * @throws ApiError
     */
    public getUsers(
        page?: string,
        size?: string,
    ): CancelablePromise<UserPageResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users',
            query: {
                'page': page,
                'size': size,
            },
        });
    }
    /**
     * Create new user
     * @param requestBody
     * @returns UserProfile User created
     * @throws ApiError
     */
    public postUsers(
        requestBody?: CreateUserRequest,
    ): CancelablePromise<UserProfile> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get user detail by ID
     * @param id
     * @returns UserProfile User profile
     * @throws ApiError
     */
    public getUsers1(
        id: number,
    ): CancelablePromise<UserProfile> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Delete user by ID
     * @param id
     * @returns any User deleted
     * @throws ApiError
     */
    public deleteUsers(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }
}
