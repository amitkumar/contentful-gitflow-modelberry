import { ContentfulBenefitList } from "./contentful-benefit-list";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type comparisonTable}
 * - {@displayField title}
 * - {@name Comparison Table}
 */
export interface ContentfulComparisonTable {
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
   * - {@name Subtitle}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  subtitle?: string;
  /** @modelberry
   * - {@name Description}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  description?: string;
  /** @modelberry
   * - {@name BenefitList}
   * - {@type Array}
   * - {@itemsType Symbol}
   * - {@widgetId tagEditor}
   */
  benefitList?: string[];
  /** @modelberry
   * - {@name Monthly Lease}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-benefitList}
   */
  monthlyLease?: ContentfulBenefitList | ContentfulReference;
  /** @modelberry
   * - {@name Full Lease}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-benefitList}
   */
  fullLease?: ContentfulBenefitList | ContentfulReference;
  /** @modelberry
   * - {@name Full Purchase}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-benefitList}
   */
  fullPurchase?: ContentfulBenefitList | ContentfulReference;
  /** @modelberry
   * - {@name Monthly Loan}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-benefitList}
   */
  monthlyLoan?: ContentfulBenefitList | ContentfulReference;
}
