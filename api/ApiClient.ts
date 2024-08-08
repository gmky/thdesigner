/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';
import { GalleryService } from './services/GalleryService';
import { ProductService } from './services/ProductService';
import { UploadFileService } from './services/UploadFileService';
import { UsersPermissionsAuthService } from './services/UsersPermissionsAuthService';
import { UsersPermissionsUsersRolesService } from './services/UsersPermissionsUsersRolesService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class ApiClient {
    public readonly gallery: GalleryService;
    public readonly product: ProductService;
    public readonly uploadFile: UploadFileService;
    public readonly usersPermissionsAuth: UsersPermissionsAuthService;
    public readonly usersPermissionsUsersRoles: UsersPermissionsUsersRolesService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'http://localhost:1337/api',
            VERSION: config?.VERSION ?? '1.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.gallery = new GalleryService(this.request);
        this.product = new ProductService(this.request);
        this.uploadFile = new UploadFileService(this.request);
        this.usersPermissionsAuth = new UsersPermissionsAuthService(this.request);
        this.usersPermissionsUsersRoles = new UsersPermissionsUsersRolesService(this.request);
    }
}

