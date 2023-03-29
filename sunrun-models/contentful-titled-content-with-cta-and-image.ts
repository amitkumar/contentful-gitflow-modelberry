import { ContentfulTitledContentWithCta } from "./contentful-titled-content-with-cta";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type titledContentWithCtaAndImage}
 * - {@displayField title}
 * - {@description Titled Content with CTA and Image}
 * - {@name Titled Content with CTA and Image}
 */
export interface ContentfulTitledContentWithCtaAndImage {
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
   * - {@name Titled Content With CTA}
   * - {@required true}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-titledContentWithCta}
   */
  titledContentWithCta: ContentfulTitledContentWithCta | ContentfulReference;
  /** @modelberry
   * - {@name Image}
   * - {@required true}
   * - {@type Object}
   * - {@widgetId 5wHGALSJtz7y2EQOLfGhKH}
   * - {@widgetNamespace app}
   * - {@validations size-min1-max1}
   */
  image: string;
}
