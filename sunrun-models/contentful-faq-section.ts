import { ContentfulFaq } from "./contentful-faq";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type faqSection}
 * - {@displayField title}
 * - {@name FAQ Section}
 */
export interface ContentfulFaqSection {
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
   * - {@name FAQs}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-faq}
   * - {@widgetId entryLinksEditor}
   */
  faQsCollection?: {
    items: (ContentfulFaq | ContentfulReference)[];
  };
}
