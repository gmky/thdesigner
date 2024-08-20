/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserProfile = {
    id?: number;
    name?: string;
    email?: string;
    role?: string;
    status?: UserProfile.status;
    updated_at?: string;
    created_at?: string;
};
export namespace UserProfile {
    export enum status {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
    }
}

