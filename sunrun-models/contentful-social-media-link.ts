/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type socialMediaLink}
 * - {@displayField title}
 * - {@name Social Media Link}
 */
export interface ContentfulSocialMediaLink {
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
   * - {@name URL}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   * - {@helpText Use the path format, e.g. /path/to/resource, for internal links, and absolute URL, e.g. htttps://investors.sunrun.com, for external links.}
   * - {@validations regexp-4}
   */
  url?: string;
}
