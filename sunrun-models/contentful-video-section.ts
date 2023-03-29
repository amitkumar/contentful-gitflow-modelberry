/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type videoSection}
 * - {@displayField title}
 * - {@description Title with a video}
 * - {@name Video Section}
 */
export interface ContentfulVideoSection {
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
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  title: string;
  /** @modelberry
   * - {@name Link}
   * - {@required true}
   * - {@type Text}
   * - {@widgetId singleLine}
   */
  link: string;
  /** @modelberry
   * - {@name Thumbnail}
   * - {@required true}
   * - {@type Object}
   * - {@widgetId 5wHGALSJtz7y2EQOLfGhKH}
   * - {@widgetNamespace app}
   */
  thumbnail: string;
}
