import { CollectionConfig } from "payload/types";
import { loggedIn } from "../access/loggedIn";
import { siteAdmins } from "../access/siteAdmins";
import { sites } from "../access/sites";
import { site } from "../../fields/site";

const Questions: CollectionConfig = {
  slug: "form-questions",
  labels: {
    singular: "Question",
    plural: "Questions",
  },
  admin: {
    useAsTitle: "name",
  },
  versions: {
    drafts: true,
  },
  access: {
    read: sites,
    create: loggedIn,
    update: siteAdmins,
    delete: siteAdmins,
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "type",
      label: "Type",
      type: "select",
      options: [
        { label: "Input", value: "input" },
        { label: "Select", value: "select" },
        { label: "Multiple Checkboxes", value: "multiple_checkboxes" },
        { label: "Country", value: "country" },
        { label: "Rich Text", value: "markdown" },
      ],
      required: true,
    },
    {
      name: "label",
      label: "Label",
      localized: true,
      type: "text",
    },
    {
      name: "placeholder",
      label: "Placeholder",
      localized: true,
      type: "text",
      admin: {
        condition: (_, siblingData) => siblingData.type !== "markdown",
      },
    },
    {
      name: "config",
      label: "Config",
      type: "relationship",
      relationTo: "form-configs",
      admin: {
        condition: (_, siblingData) =>
          ["select", "multiple_checkboxes"].includes(siblingData.type),
      },
    },
    {
      name: "registerConfig",
      label: "Register Config",
      type: "relationship",
      relationTo: "form-register-configs",
      admin: {
        condition: (_, siblingData) => siblingData.type !== "markdown",
      },
    },
    {
      name: "errorMessages",
      label: "Error Messages",
      type: "relationship",
      relationTo: "form-error-messages",
      admin: {
        condition: (_, siblingData) => siblingData.type !== "markdown",
      },
    },
    {
      name: "priorityOptions",
      label: "Priority Options",
      localized: true,
      type: "text",
      hasMany: true,
      admin: {
        condition: (_, siblingData) => ["country"].includes(siblingData.type),
      },
    },
    {
      name: "dependentQuestions",
      label: "Dependent Questions",
      type: "relationship",
      relationTo: "form-dependent-questions",
      admin: {
        condition: (_, siblingData) => siblingData.type !== "markdown",
      },
    },
    site,
  ],
};
export default Questions;
