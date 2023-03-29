import { ContentfulCta } from "./contentful-cta";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type stateSolarIncentives}
 * - {@displayField header}
 * - {@name State Solar Incentives}
 */
export interface ContentfulStateSolarIncentives {
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
   * - {@name Header}
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  header: string;
  /** @modelberry
   * - {@name Description}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  description?: string;
  /** @modelberry
   * - {@name Links Header}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  linksHeader?: string;
  /** @modelberry
   * - {@name Links}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-cta}
   * - {@widgetId entryLinksEditor}
   * - {@validations size-minnull-max5}
   */
  linksCollection?: {
    items: (ContentfulCta | ContentfulReference)[];
  };
  /** @modelberry
   * - {@name Contact Header}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  contactHeader?: string;
  /** @modelberry
   * - {@name Contact Info}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-cta}
   */
  contactInfo?: ContentfulCta | ContentfulReference;
  /** @modelberry
   * - {@name StartYourQuote}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-cta}
   */
  startYourQuote?: ContentfulCta | ContentfulReference;
  /** @modelberry
   * - {@name Subtitle Question}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  subtitleQuestion?: string;
  /** @modelberry
   * - {@name Subtitle}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  subtitle?: string;
  /** @modelberry
   * - {@name Column 1}
   * - {@type RichText}
   * - {@widgetId richTextEditor}
   * - {@validations enabledNodeTypes-heading-1-heading-2-heading-3 enabledMarks-bold-italic-underline-12}
   */
  column1?: {
    json?: any;
  };
  /** @modelberry
   * - {@name Column 2}
   * - {@type RichText}
   * - {@widgetId richTextEditor}
   * - {@validations enabledMarks-bold-italic-underline-14 enabledNodeTypes-heading-1-heading-2-heading-3-23 richText}
   */
  column2?: {
    json?: any;
  };
  /** @modelberry
   * - {@name Column 3}
   * - {@type RichText}
   * - {@widgetId richTextEditor}
   * - {@validations enabledNodeTypes-heading-1-heading-2-heading-3 enabledMarks-bold-italic-underline-12}
   */
  column3?: {
    json?: any;
  };
  /** @modelberry
   * - {@name Footer Description}
   * - {@type RichText}
   * - {@widgetId richTextEditor}
   * - {@validations enabledMarks-bold-italic-underline-14 enabledNodeTypes-heading-1-heading-2-heading-3-23 richText}
   */
  footerDescription?: {
    json?: any;
  };
}
