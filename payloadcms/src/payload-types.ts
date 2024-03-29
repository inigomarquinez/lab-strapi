/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    sites: Site;
    'contact-requests': ContactRequest;
    media: Media;
    forms: Form;
    'form-questions': FormQuestion;
    'form-call-for-actions': FormCallForAction;
    'form-error-messages': FormErrorMessage;
    'form-register-configs': FormRegisterConfig;
    'form-configs': FormConfig;
    'form-options': FormOption;
    'form-dependent-questions': FormDependentQuestion;
    pages1: Pages1;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {};
}
export interface User {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  roles: ('super-admin' | 'user')[];
  sites?:
    | {
        site: string | Site;
        roles: ('admin' | 'user')[];
        id?: string | null;
      }[]
    | null;
  lastLoggedInSite?: (string | null) | Site;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
export interface Site {
  id: string;
  name: string;
  domains?:
    | {
        domain: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface ContactRequest {
  id: string;
  message: string;
  site?: (string | null) | Site;
  updatedAt: string;
  createdAt: string;
}
export interface Media {
  id: string;
  alt: string;
  site?: (string | null) | Site;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
export interface Form {
  name: string;
  id: string;
  titleForm?: string | null;
  enabled?: boolean | null;
  questions?: (string | FormQuestion)[] | null;
  callForActions?: (string | null) | FormCallForAction;
  site?: (string | null) | Site;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
export interface FormQuestion {
  id: string;
  name: string;
  type: 'input' | 'select' | 'multiple_checkboxes' | 'country' | 'markdown';
  label?: string | null;
  placeholder?: string | null;
  config?: (string | null) | FormConfig;
  registerConfig?: (string | null) | FormRegisterConfig;
  errorMessages?: (string | null) | FormErrorMessage;
  priorityOptions?: string[] | null;
  dependentQuestions?: (string | null) | FormDependentQuestion;
  site?: (string | null) | Site;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
export interface FormConfig {
  id: string;
  name: string;
  options: (string | FormOption)[];
  site?: (string | null) | Site;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
export interface FormOption {
  id: string;
  label: string;
  value: string;
  site?: (string | null) | Site;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
export interface FormRegisterConfig {
  id: string;
  name: string;
  required?: boolean | null;
  maximumLen?: number | null;
  minimumLen?: number | null;
  pattern?: string | null;
  site?: (string | null) | Site;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
export interface FormErrorMessage {
  id: string;
  name: string;
  required?: string | null;
  maximumLen?: string | null;
  minimumLen?: string | null;
  pattern?: string | null;
  site?: (string | null) | Site;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
export interface FormDependentQuestion {
  id: string;
  name: string;
  conditions: string[];
  questions: string | FormQuestion;
  site?: (string | null) | Site;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
export interface FormCallForAction {
  id: string;
  name: string;
  caption: string;
  type: 'submit';
  site?: (string | null) | Site;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
export interface Pages1 {
  id: string;
  name: string;
  slug?: string | null;
  form: string | Form;
  site?: (string | null) | Site;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}