/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthorDto } from './AuthorDto';
import type { ImageSetResponse } from './ImageSetResponse';
export type ProductDto = {
    name?: string;
    description?: string;
    featured_images?: string;
    thumbnail?: string;
    banner?: string;
    updated_at?: string;
    created_at?: string;
    image_set?: ImageSetResponse;
    author?: AuthorDto;
};

