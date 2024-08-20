/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginRequest } from '../models/LoginRequest';
import type { LoginResponse } from '../models/LoginResponse';
import type { RegisterRequest } from '../models/RegisterRequest';
import type { UserProfile } from '../models/UserProfile';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AuthenticationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Login with email and password
     * @param requestBody
     * @returns LoginResponse Login successfully
     * @throws ApiError
     */
    public postAuthLogin(
        requestBody?: LoginRequest,
    ): CancelablePromise<LoginResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Register new user
     * @param requestBody
     * @returns UserProfile Register successfully
     * @throws ApiError
     */
    public postAuthRegister(
        requestBody?: RegisterRequest,
    ): CancelablePromise<UserProfile> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get current user info
     * @returns UserProfile Current user info
     * @throws ApiError
     */
    public postAuthMe(): CancelablePromise<UserProfile> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/me',
        });
    }
}
