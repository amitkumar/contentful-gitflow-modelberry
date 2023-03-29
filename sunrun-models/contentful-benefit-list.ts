/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type benefitList}
 * - {@displayField title}
 * - {@name BenefitList}
 */
export interface ContentfulBenefitList {
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
   * - {@name Get Quote Link}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  getQuoteLink?: string;
  /** @modelberry
   * - {@name Benefits}
   * - {@type Array}
   * - {@itemsType Symbol}
   * - {@widgetId tagEditor}
   */
  benefits?: string[];
  /** @modelberry
   * - {@name Learn More Link}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  learnMoreLink?: string;
  /** @modelberry
   * - {@name isFavorite}
   * - {@type Boolean}
   * - {@widgetId boolean}
   */
  isFavorite?: boolean;
}
