import { ContentfulAsset } from "./contentful-asset";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type contactPageInterest}
 * - {@displayField title}
 * - {@name Contact Page Interest}
 */
export interface ContentfulContactPageInterest {
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
   * - {@name title}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  title?: string;
  /** @modelberry
   * - {@name subtitle}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  subtitle?: string;
  /** @modelberry
   * - {@name image}
   * - {@type Link}
   * - {@linkType Asset}
   * - {@widgetId assetLinkEditor}
   */
  image?: ContentfulAsset | ContentfulReference;
  /** @modelberry
   * - {@name link}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  link?: string;
  /** @modelberry
   * - {@name Link Title}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  linkTitle?: string;
}
