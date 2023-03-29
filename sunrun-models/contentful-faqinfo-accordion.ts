import { ContentfulCardGroup } from "./contentful-card-group";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type faqinfoAccordion}
 * - {@displayField title}
 * - {@name FAQ / Info Accordion}
 */
export interface ContentfulFaqinfoAccordion {
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
   * - {@name Subtitle}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  subtitle?: string;
  /** @modelberry
   * - {@name Title}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  title?: string;
  /** @modelberry
   * - {@name Expandable Sections}
   * - {@required true}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-cardGroup}
   * - {@widgetId entryLinksEditor}
   * - {@helpText Each Card Group title will be an expandable section title and each card within the card group will be a block of expanded content}
   */
  expandableSectionsCollection: {
    items: (ContentfulCardGroup | ContentfulReference)[];
  };
  /** @modelberry
   * - {@name Expanded Section Background Color}
   * - {@type Symbol}
   * - {@widgetId radio}
   * - {@validations in-OffWhite-White}
   */
  expandedSectionBackgroundColor?: string;
}
