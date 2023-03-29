import { ContentfulAsset } from "./contentful-asset";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type leadFormContainer}
 * - {@displayField title}
 * - {@name Lead Form Section}
 */
export interface ContentfulLeadFormContainer {
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
   * - {@name Title Image}
   * - {@type Link}
   * - {@linkType Asset}
   * - {@widgetId assetLinkEditor}
   */
  titleImage?: ContentfulAsset | ContentfulReference;
  /** @modelberry
   * - {@name Solar Incentives List}
   * - {@type Array}
   * - {@itemsType Symbol}
   * - {@widgetId tagEditor}
   */
  solarIncentivesList?: string[];
  /** @modelberry
   * - {@name TOS}
   * - {@type Text}
   * - {@widgetId markdown}
   */
  tos?: string;
  /** @modelberry
   * - {@name Lead Created Title}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  leadCreatedTitle?: string;
  /** @modelberry
   * - {@name Lead Created Subtitle}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  leadCreatedSubtitle?: string;
  /** @modelberry
   * - {@name Lead Created Details}
   * - {@type Text}
   * - {@widgetId markdown}
   */
  leadCreatedDetails?: string;
  /** @modelberry
   * - {@name Lead Created Image}
   * - {@type Object}
   * - {@widgetId 5wHGALSJtz7y2EQOLfGhKH}
   * - {@widgetNamespace app}
   */
  leadCreatedImage?: string;
}
