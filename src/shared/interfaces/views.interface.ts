import { IWidget } from "./widgets.interface";

/**
 * Interface represent a view
 */
export interface IView {
    /**
     * View id
     */
    id?: number;
    /**
     * Account id
     */
    account: number;
    /**
     * View name
     */
    name: string;
    /**
     * The database table assigned to the view
     */
    table?: string;
    /**
     * Array of instances of IViewColumn that describe the columns
     */
    columns?: IViewColumn[];
    /**
     * The table terminology, how we call the records in singular and plural.
     */
    terms?: IViewTerms;
    /**
     * The view permission (create, update, read, delete)
     */
    permissions?: IViewPermissions;
    /**
     * Creation date
     */
    creation_date: string;
    /**
     * Last modification date
     */
    modify_date?: string;
    /**
     * Array of view widgets
     */
    widgets:IWidget[];
}

/**
 * Interface represent a view column
 */
export interface IViewColumn {
    /**
     * Is column dispaled in data table
     */
    enabled: boolean;
    /**
     * Is the column searchable
     */
    searchable: boolean;
    /**
     * The column name
     */
    name: string;
    /**
     * The column type
     */
    type: string;
    /**
     * Is the column nullable
     */
    nullable?: boolean;
    /**
     * Column default value
     */
    default?: any;
    /**
     * Column key
     */
    key?: string;
    /**
     * Column extra details
     */
    extra?: string;
}

/**
 * Interface represent a view termilology
 */
export interface IViewTerms {
    /**
     * Singular - One record name. ex: create user
     */
    one: string;
    /**
     * Plural - Many records records name. ex: list of users
     */
    many: string;
}

/**
 * Interface represent a view permissions
 */
export interface IViewPermissions {
    /**
     * Is create new record are allowed
     */
    create: boolean;
    /**
     * Is read data is allowed. true by default and cannot be changed
     */
    read: boolean;
    /**
     * Is update of record are allowed
     */
    update: boolean;
    /**
     * Is delete of record are allowed
     */
    delete: boolean;
}