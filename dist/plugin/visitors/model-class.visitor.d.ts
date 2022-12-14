import * as ts from 'typescript';
import { PluginOptions } from '../merge-options';
export declare class ModelClassVisitor {
  private importsToAdd;
  visit(
    sourceFile: ts.SourceFile,
    ctx: ts.TransformationContext,
    program: ts.Program,
    pluginOptions: PluginOptions,
  ): ts.SourceFile;
  private addDescriptionToClassDecorators;
  private amendFieldsDecorators;
  private collectMetadataFromClassMembers;
  private updateClassDeclaration;
  private getOptionsFromFieldDecoratorOrUndefined;
  private getTypeFromFieldDecoratorOrUndefined;
  private createFieldMetadata;
  private getTypeUsingTypeChecker;
  private createEagerImports;
}
//# sourceMappingURL=model-class.visitor.d.ts.map
