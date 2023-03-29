import { ContentfulAsset } from "./contentful-asset";
import { ContentfulReference } from "./contentful-reference";
import { ContentfulCta } from "./contentful-cta";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type heroSection}
 * - {@displayField title}
 * - {@name Hero Section}
 */
export interface ContentfulHeroSection {
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
   * - {@name CTA}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-cta}
   */
  cta?: ContentfulCta | ContentfulReference;
}
