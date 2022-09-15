import { Type } from '@nestjs/common';
import {
  ClassDirectiveMetadata,
  ClassExtensionsMetadata,
  ClassMetadata,
  EnumMetadata,
  FieldResolverMetadata,
  MethodArgsMetadata,
  PropertyDirectiveMetadata,
  PropertyExtensionsMetadata,
  PropertyMetadata,
  ResolverClassMetadata,
  ResolverTypeMetadata,
  UnionMetadata,
} from '../metadata';
import { InterfaceMetadata } from '../metadata/interface.metadata';
import { ObjectTypeMetadata } from '../metadata/object-type.metadata';
export declare class TypeMetadataStorageHost {
  private queries;
  private mutations;
  private subscriptions;
  private fieldResolvers;
  private readonly enums;
  private readonly unions;
  private readonly metadataByTargetCollection;
  addMutationMetadata(metadata: ResolverTypeMetadata): void;
  getMutationsMetadata(): ResolverTypeMetadata[];
  addQueryMetadata(metadata: ResolverTypeMetadata): void;
  getQueriesMetadata(): ResolverTypeMetadata[];
  addSubscriptionMetadata(metadata: ResolverTypeMetadata): void;
  getSubscriptionsMetadata(): ResolverTypeMetadata[];
  addResolverPropertyMetadata(metadata: FieldResolverMetadata): void;
  addArgsMetadata(metadata: ClassMetadata): void;
  getArgumentsMetadata(): ClassMetadata[];
  getArgumentsMetadataByTarget(
    target: Type<unknown>,
  ): ClassMetadata | undefined;
  addInterfaceMetadata(metadata: InterfaceMetadata): void;
  getInterfacesMetadata(): InterfaceMetadata[];
  getInterfaceMetadataByTarget(
    target: Type<unknown>,
  ): InterfaceMetadata | undefined;
  addInputTypeMetadata(metadata: ClassMetadata): void;
  getInputTypesMetadata(): ClassMetadata[];
  getInputTypeMetadataByTarget(
    target: Type<unknown>,
  ): ObjectTypeMetadata | undefined;
  addObjectTypeMetadata(metadata: ObjectTypeMetadata): void;
  getObjectTypesMetadata(): ObjectTypeMetadata[];
  getObjectTypeMetadataByTarget(
    target: Type<unknown>,
  ): ObjectTypeMetadata | undefined;
  addEnumMetadata(metadata: EnumMetadata): void;
  getEnumsMetadata(): EnumMetadata[];
  addUnionMetadata(metadata: UnionMetadata): void;
  getUnionsMetadata(): UnionMetadata[];
  addDirectiveMetadata(metadata: ClassDirectiveMetadata): void;
  addDirectivePropertyMetadata(metadata: PropertyDirectiveMetadata): void;
  addExtensionsMetadata(metadata: ClassExtensionsMetadata): void;
  addExtensionsPropertyMetadata(metadata: PropertyExtensionsMetadata): void;
  addResolverMetadata(metadata: ResolverClassMetadata): void;
  addClassFieldMetadata(metadata: PropertyMetadata): void;
  addMethodParamMetadata(metadata: MethodArgsMetadata): void;
  compile(orphanedTypes?: (Function | object)[]): void;
  loadClassPluginMetadata(metadata: ClassMetadata[]): void;
  applyPluginMetadata(prototype: Function): void;
  compileClassMetadata(metadata: ClassMetadata[]): void;
  clear(): void;
  private getClassFieldsByPredicate;
  private compileResolversMetadata;
  private compileFieldResolverMetadata;
  private compileExternalFieldResolverMetadata;
  private findModelFieldMetadata;
  private compileExtendedResolversMetadata;
  private mergeParentResolverHandlers;
  private mergeParentFieldHandlers;
}
export declare const TypeMetadataStorage: TypeMetadataStorageHost;
//# sourceMappingURL=type-metadata.storage.d.ts.map
