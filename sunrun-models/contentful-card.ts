import { ContentfulCta } from "./contentful-cta";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type card}
 * - {@displayField title}
 * - {@description A card may contain an image, title, text, and CTA.}
 * - {@name Card}
 */
export interface ContentfulCard {
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
   * - {@name Image}
   * - {@type Object}
   * - {@widgetId 5wHGALSJtz7y2EQOLfGhKH}
   * - {@widgetNamespace app}
   */
  image?: string;
  /** @modelberry
   * - {@name Title}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  title?: string;
  /** @modelberry
   * - {@name Subtitle}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  subtitle?: string;
  /** @modelberry
   * - {@name Description}
   * - {@type Text}
   * - {@widgetId multipleLine}
   */
  description?: string;
  /** @modelberry
   * - {@name CTA}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-cta}
   */
  cta?: ContentfulCta | ContentfulReference;
  /** @modelberry
   * - {@name Primary Copy}
   * - {@type RichText}
   * - {@widgetId richTextEditor}
   * - {@validations enabledMarks-bold-italic-underline enabledNodeTypes-heading-2-heading-3-heading-4 richText}
   */
  primaryCopy?: {
    json?: any;
  };
}
