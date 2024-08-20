/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateUserRequest = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    role: CreateUserRequest.role;
};
export namespace CreateUserRequest {
    export enum role {
        ADMIN = 'ADMIN',
        NORMAL_USER = 'NORMAL_USER',
        EDITOR = 'EDITOR',
    }
}

