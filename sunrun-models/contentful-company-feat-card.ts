/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type companyFeatCard}
 * - {@displayField title}
 * - {@description A "card" that has an image/svg and a text blurb}
 * - {@name Company Feat Card}
 */
export interface ContentfulCompanyFeatCard {
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
   * - {@name title}
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  title: string;
  /** @modelberry
   * - {@name img}
   * - {@required true}
   * - {@type Object}
   * - {@widgetId 5wHGALSJtz7y2EQOLfGhKH}
   * - {@widgetNamespace app}
   */
  img: string;
}
