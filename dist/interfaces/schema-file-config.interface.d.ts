export interface AliasDirectiveImport {
  name: string;
  as: string;
}
export declare type FederationVersion = 1 | 2;
export declare type FederationConfig = Federation2Config;
export interface Federation2Config {
  version: 2;
  /**
   * The imported directives
   * @default ['@key', '@shareable', '@external', '@override', '@requires']
   */
  directives?: (string | AliasDirectiveImport)[];
  /**
   * The import link
   * @default 'https://specs.apollo.dev/federation/v2.0'
   */
  importUrl?: string;
}
export interface SchemaFileConfig {
  /**
   * Federation version and its configuration,
   *
   * @default 1
   */
  federation?: FederationVersion | FederationConfig;
  /**
   * Path to the schema file.
   */
  path?: string;
}
export declare type AutoSchemaFileValue = boolean | string | SchemaFileConfig;
//# sourceMappingURL=schema-file-config.interface.d.ts.map
