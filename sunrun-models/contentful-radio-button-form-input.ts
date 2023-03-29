import { ContentfulInputOption } from "./contentful-input-option";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type radioButtonFormInput}
 * - {@displayField label}
 * - {@name Radio Button Form Input}
 */
export interface ContentfulRadioButtonFormInput {
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
   * - {@name Options}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-inputOption}
   * - {@widgetId entryLinksEditor}
   */
  optionsCollection?: {
    items: (ContentfulInputOption | ContentfulReference)[];
  };
}
