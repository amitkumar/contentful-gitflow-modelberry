import { ContentfulSeoFields } from "./contentful-seo-fields";
import { ContentfulReference } from "./contentful-reference";
import { ContentfulHeader } from "./contentful-header";
import { ContentfulSection } from "./contentful-section";
import { ContentfulFooter } from "./contentful-footer";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type page}
 * - {@displayField path}
 * - {@name Page}
 */
export interface ContentfulPage {
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
   * - {@name Site}
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId dropdown}
   * - {@helpText This specifies the site that a new page should be added to}
   * - {@validations in-cms.sunrun.com-cms2.sunrun.com-quote.sunrun.com}
   */
  site: string;
  /** @modelberry
   * - {@name Path}
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   * - {@helpText URL path following https://sunrun.com}
   * - {@validations regexp-1}
   */
  path: string;
  /** @modelberry
   * - {@name SEO Fields}
   * - {@required true}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-seoFields}
   */
  seoFields: ContentfulSeoFields | ContentfulReference;
  /** @modelberry
   * - {@localized true}
   * - {@name Preview image}
   * - {@type Object}
   * - {@widgetId 5wHGALSJtz7y2EQOLfGhKH}
   * - {@widgetNamespace app}
   */
  previewImage?: string;
  /** @modelberry
   * - {@name Header}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-header}
   */
  header?: ContentfulHeader | ContentfulReference;
  /** @modelberry
   * - {@name Sections}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-section}
   * - {@widgetId entryLinksEditor}
   */
  sectionsCollection?: {
    items: (ContentfulSection | ContentfulReference)[];
  };
  /** @modelberry
   * - {@name Footer}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-footer}
   */
  footer?: ContentfulFooter | ContentfulReference;
}
