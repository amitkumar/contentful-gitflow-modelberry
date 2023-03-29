import { ContentfulAsset } from "./contentful-asset";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type threeColumSection}
 * - {@displayField title}
 * - {@name Three Colum Section}
 */
export interface ContentfulThreeColumSection {
  /** @modelberry
   * - {@ignore }
   */
  __typename?: string;
  /** @modelberry
   * - {@ignore }
   */
  sys?: {
    id?: string;
  };
  /** @modelberry
   * - {@name Title}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  title?: string;
  /** @modelberry
   * - {@name Column 1 Title}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  column1Title?: string;
  /** @modelberry
   * - {@name Column 2 Title}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  column2Title?: string;
  /** @modelberry
   * - {@name Column 3 Title}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  column3Title?: string;
  /** @modelberry
   * - {@name Column 1 Description}
   * - {@type RichText}
   * - {@widgetId richTextEditor}
   * - {@validations enabledNodeTypes-heading-1-heading-2-heading-3 enabledMarks-bold-italic-underline-12}
   */
  column1Description?: {
    json?: any;
  };
  /** @modelberry
   * - {@name Column 2 Description}
   * - {@type RichText}
   * - {@widgetId richTextEditor}
   * - {@validations enabledNodeTypes-heading-1-heading-2-heading-3 enabledMarks-bold-italic-underline-12}
   */
  column2Description?: {
    json?: any;
  };
  /** @modelberry
   * - {@name Column 3 Description}
   * - {@type RichText}
   * - {@widgetId richTextEditor}
   * - {@validations enabledNodeTypes-heading-1-heading-2-heading-3 enabledMarks-bold-italic-underline-12}
   */
  column3Description?: {
    json?: any;
  };
  /** @modelberry
   * - {@name Column 1 Image}
   * - {@type Link}
   * - {@linkType Asset}
   * - {@widgetId assetLinkEditor}
   */
  column1Image?: ContentfulAsset | ContentfulReference;
  /** @modelberry
   * - {@name Column 2 Image}
   * - {@type Link}
   * - {@linkType Asset}
   * - {@widgetId assetLinkEditor}
   */
  column2Image?: ContentfulAsset | ContentfulReference;
  /** @modelberry
   * - {@name Column 3 Image}
   * - {@type Link}
   * - {@linkType Asset}
   * - {@widgetId assetLinkEditor}
   */
  column3Image?: ContentfulAsset | ContentfulReference;
}
