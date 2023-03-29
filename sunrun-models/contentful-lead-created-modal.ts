/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type leadCreatedModal}
 * - {@displayField title}
 * - {@name Lead Created Modal}
 */
export interface ContentfulLeadCreatedModal {
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
   * - {@name Action}
   * - {@type Text}
   * - {@widgetId markdown}
   */
  action?: string;
  /** @modelberry
   * - {@name MODAL IMAGE}
   * - {@type Object}
   * - {@widgetId 5wHGALSJtz7y2EQOLfGhKH}
   * - {@widgetNamespace app}
   */
  modalImage?: string;
}
