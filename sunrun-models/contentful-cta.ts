/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type cta}
 * - {@displayField text}
 * - {@description Call to action}
 * - {@name CTA}
 */
export interface ContentfulCta {
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
   * - {@name Text}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  text?: string;
  /** @modelberry
   * - {@name URL}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   * - {@helpText Use the path format, e.g. /path/to/resource, for internal links, and absolute URL, e.g. htttps://investors.sunrun.com, for external links.}
   * - {@validations regexp-3}
   */
  url?: string;
  /** @modelberry
   * - {@name Type}
   * - {@type Symbol}
   * - {@widgetId radio}
   * - {@helpText May only be applicable in some situations}
   * - {@validations in-Button-Link}
   */
  type?: string;
  /** @modelberry
   * - {@name svgForText}
   * - {@type Object}
   * - {@widgetId 5wHGALSJtz7y2EQOLfGhKH}
   * - {@widgetNamespace app}
   */
  svgForText?: string;
  /** @modelberry
   * - {@name Alternate Text}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  alternateText?: string;
  /** @modelberry
   * - {@name Alternate URL}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  alternateUrl?: string;
  /** @modelberry
   * - {@name Hide If In State}
   * - {@required true}
   * - {@type Boolean}
   * - {@widgetId boolean}
   */
  hideIfInState: boolean;
}
