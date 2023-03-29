import { ContentfulCta } from "./contentful-cta";
import { ContentfulMenu } from "./contentful-menu";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type header}
 * - {@displayField name}
 * - {@name Header}
 */
export interface ContentfulHeader {
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
   * - {@name Name}
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   * - {@helpText This will be used to distinguish between different headers. Describe the location or purpose of this header.}
   * - {@validations unique-true}
   */
  name: string;
  /** @modelberry
   * - {@name Categories}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-cta-menu}
   * - {@widgetId entryLinksEditor}
   */
  categoriesCollection?: {
    items: (ContentfulCta | ContentfulMenu | ContentfulReference)[];
  };
  /** @modelberry
   * - {@name Social Media Links}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@widgetId entryLinksEditor}
   */
  socialMediaLinksCollection?: {
    items: ContentfulReference[];
  };
  /** @modelberry
   * - {@name CTA}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-cta}
   */
  cta?: ContentfulCta | ContentfulReference;
  /** @modelberry
   * - {@name CTA2}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   */
  cta2?: ContentfulReference;
  /** @modelberry
   * - {@name Appearance}
   * - {@type Symbol}
   * - {@widgetId dropdown}
   * - {@validations in-LightOverlay-DarkOverlay-PrimaryBlue}
   */
  appearance?: string;
}
