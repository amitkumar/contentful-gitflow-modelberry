import { ContentfulAsset } from "./contentful-asset";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type titledContent}
 * - {@displayField title}
 * - {@description Text with header or header and subheader}
 * - {@name Titled Content}
 */
export interface ContentfulTitledContent {
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
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  title: string;
  /** @modelberry
   * - {@name Sub text}
   * - {@type Text}
   * - {@widgetId multipleLine}
   */
  subText?: string;
  /** @modelberry
   * - {@name Image}
   * - {@type Link}
   * - {@linkType Asset}
   * - {@widgetId assetLinkEditor}
   */
  image?: ContentfulAsset | ContentfulReference;
  /** @modelberry
   * - {@name Image Side}
   * - {@type Boolean}
   * - {@widgetId boolean}
   * - {@helpText (ignore if no image given)}
   */
  imageSide?: boolean;
  /** @modelberry
   * - {@name Alternate Title}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  alternateTitle?: string;
  /** @modelberry
   * - {@name Alternate Sub Text}
   * - {@type Text}
   * - {@widgetId markdown}
   */
  alternateSubText?: string;
  /** @modelberry
   * - {@name Hide If In State}
   * - {@required true}
   * - {@type Boolean}
   * - {@widgetId boolean}
   */
  hideIfInState: boolean;
  /** @modelberry
   * - {@name Header Size}
   * - {@type Symbol}
   * - {@widgetId dropdown}
   * - {@validations in-H1-H2-H3}
   */
  headerSize?: string;
  /** @modelberry
   * - {@name Text Content}
   * - {@type RichText}
   * - {@widgetId richTextEditor}
   * - {@validations enabledMarks-bold-italic-underline-14 enabledNodeTypes-heading-1-heading-2-heading-3-23 richText}
   */
  textContent?: {
    json?: any;
  };
}
