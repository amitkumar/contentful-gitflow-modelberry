import { ContentfulTextFormInput } from "./contentful-text-form-input";
import { ContentfulReference } from "./contentful-reference";
import { ContentfulButton } from "./contentful-button";
import { ContentfulRadioButtonFormInput } from "./contentful-radio-button-form-input";
import { ContentfulLeadCreatedModal } from "./contentful-lead-created-modal";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type leadForm}
 * - {@displayField name}
 * - {@name Lead Form}
 */
export interface ContentfulLeadForm {
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
   * - {@name Name}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  name?: string;
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
   * - {@name First Name Input}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-textFormInput}
   */
  firstNameInput?: ContentfulTextFormInput | ContentfulReference;
  /** @modelberry
   * - {@name Last Name Input}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-textFormInput}
   */
  lastNameInput?: ContentfulTextFormInput | ContentfulReference;
  /** @modelberry
   * - {@name Phone Input}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-textFormInput}
   */
  phoneInput?: ContentfulTextFormInput | ContentfulReference;
  /** @modelberry
   * - {@name Zip Code Input}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-textFormInput}
   */
  zipCodeInput?: ContentfulTextFormInput | ContentfulReference;
  /** @modelberry
   * - {@name Email Input}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-textFormInput}
   */
  emailInput?: ContentfulTextFormInput | ContentfulReference;
  /** @modelberry
   * - {@name Terms of Service}
   * - {@type Text}
   * - {@widgetId markdown}
   */
  termsOfService?: string;
  /** @modelberry
   * - {@name Submit Button}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-button}
   */
  submitButton?: ContentfulButton | ContentfulReference;
  /** @modelberry
   * - {@name Home Ownership Radio}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-radioButtonFormInput}
   */
  homeOwnershipRadio?: ContentfulRadioButtonFormInput | ContentfulReference;
  /** @modelberry
   * - {@name Lead Created Modal}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-leadCreatedModal}
   */
  leadCreatedModal?: ContentfulLeadCreatedModal | ContentfulReference;
  /** @modelberry
   * - {@name Lead Not In Service Modal}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-leadCreatedModal}
   */
  leadNotInServiceModal?: ContentfulLeadCreatedModal | ContentfulReference;
  /** @modelberry
   * - {@name Hide If In State}
   * - {@required true}
   * - {@type Boolean}
   * - {@widgetId boolean}
   */
  hideIfInState: boolean;
}
