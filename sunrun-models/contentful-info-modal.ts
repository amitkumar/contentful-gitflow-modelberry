/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type infoModal}
 * - {@displayField title}
 * - {@description An info icon that shows a modal with text when clicked. Used to help customers fill out forms and answer possible questions}
 * - {@name Info Modal}
 */
export interface ContentfulInfoModal {
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
   */
  title: string;
  /** @modelberry
   * - {@name Icon}
   * - {@type Object}
   */
  icon?: string;
  /** @modelberry
   * - {@name Body Text}
   * - {@required true}
   * - {@type Text}
   */
  bodyText: string;
}
