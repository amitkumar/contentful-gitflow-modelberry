/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type button}
 * - {@displayField label}
 * - {@name Button}
 */
export interface ContentfulButton {
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
   * - {@name Label}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  label?: string;
  /** @modelberry
   * - {@name Small Mobile Label}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  smallMobileLabel?: string;
  /** @modelberry
   * - {@name Link}
   * - {@type Text}
   * - {@widgetId markdown}
   */
  link?: string;
  /** @modelberry
   * - {@name Disabled Text}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  disabledText?: string;
  /** @modelberry
   * - {@name Variant}
   * - {@type Symbol}
   * - {@widgetId dropdown}
   * - {@validations in-PrimaryBluePill-OffWhitePill-OffWhiteCircleArrow}
   */
  variant?: string;
}
