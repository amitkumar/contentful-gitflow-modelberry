import { ContentfulCta } from "./contentful-cta";
import { ContentfulReference } from "./contentful-reference";
import { ContentfulMenu } from "./contentful-menu";
import { ContentfulSocialMediaLink } from "./contentful-social-media-link";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type footer}
 * - {@displayField name}
 * - {@name Footer}
 */
export interface ContentfulFooter {
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
   * - {@validations unique-true}
   */
  name: string;
  /** @modelberry
   * - {@name Top Text}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   * - {@helpText Appears in the top section of the footer, next to the CTA button.}
   */
  topText?: string;
  /** @modelberry
   * - {@name CTA}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-cta}
   */
  cta?: ContentfulCta | ContentfulReference;
  /** @modelberry
   * - {@name Categories}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-menu}
   * - {@widgetId entryLinksEditor}
   */
  categoriesCollection?: {
    items: (ContentfulMenu | ContentfulReference)[];
  };
  /** @modelberry
   * - {@name Legal Links}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-menu}
   */
  legalLinks?: ContentfulMenu | ContentfulReference;
  /** @modelberry
   * - {@name Social Links}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-socialMediaLink}
   * - {@widgetId entryLinksEditor}
   */
  socialLinksCollection?: {
    items: (ContentfulSocialMediaLink | ContentfulReference)[];
  };
  /** @modelberry
   * - {@name Copyright Text}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  copyrightText?: string;
}
