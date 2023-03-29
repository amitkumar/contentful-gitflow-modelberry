import { ContentfulAsset } from "./contentful-asset";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type heroSmallTwoThirdsImage}
 * - {@displayField title}
 * - {@name Hero Small Two Thirds Image}
 */
export interface ContentfulHeroSmallTwoThirdsImage {
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
   * - {@name Image}
   * - {@type Link}
   * - {@linkType Asset}
   * - {@widgetId assetLinkEditor}
   */
  image?: ContentfulAsset | ContentfulReference;
  /** @modelberry
   * - {@name Image Alignment}
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId radio}
   * - {@validations in-left-right}
   */
  imageAlignment: string;
}
