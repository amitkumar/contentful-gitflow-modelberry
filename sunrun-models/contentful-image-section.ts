/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type imageSection}
 * - {@displayField title}
 * - {@description Section showing only a image}
 * - {@name Image Section}
 */
export interface ContentfulImageSection {
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
   * - {@name image}
   * - {@required true}
   * - {@type Object}
   * - {@widgetId 5wHGALSJtz7y2EQOLfGhKH}
   * - {@widgetNamespace app}
   * - {@validations size-minundefined-max1}
   */
  image: string;
}
