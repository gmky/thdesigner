/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateProductRequest = {
    name: string;
    description?: string;
    published: boolean;
    category_id?: number;
    banner: Blob;
    thumbnail: Blob;
    featured_images?: Array<Blob>;
    image_set?: Array<number>;
    author_id?: number;
};

