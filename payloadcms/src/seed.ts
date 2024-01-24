import { Payload } from "payload";
import { site } from "./collections/fields/site";

export const seed = async (payload: Payload): Promise<void> => {
  const site1 = await payload.create<"sites">({
    collection: "sites",
    data: {
      name: "Site 1",
      domains: [{ domain: "site1.local", id: "site1" }],
    },
  });
  const site2 = await payload.create<"sites">({
    collection: "sites",
    data: {
      name: "Site 2",
      domains: [{ domain: "site2.local", id: "site2" }],
    },
  });

  // Local API methods skip all access control by default
  // so we can easily create an admin user directly in init
  await payload.create<"users">({
    collection: "users",
    data: {
      email: "dev@admin.local",
      password: "test",
      firstName: "Payload",
      lastName: "CMS",
      roles: ["super-admin"],
    },
  });
  // This user will be created with the default role of `editor`
  await payload.create<"users">({
    collection: "users",
    data: {
      email: "dev@site1.local",
      password: "test",
      firstName: "Site1",
      lastName: "User",
      roles: ["user"],
      sites: [
        {
          site: site1.id,
          roles: ["admin"],
        },
      ],
      lastLoggedInSite: site1.id,
    },
  });
  // This user will be created with the default role of `editor`
  await payload.create<"users">({
    collection: "users",
    data: {
      email: "dev@site2.local",
      password: "test",
      firstName: "Site1",
      lastName: "User",
      roles: ["user"],
      sites: [
        {
          site: site2.id,
          roles: ["admin"],
        },
      ],
      lastLoggedInSite: site2.id,
    },
  });

  const callForActions = await payload.create<"form-call-for-actions">({
    collection: "form-call-for-actions",
    data: {
      id: "65b0c11e1e58321a64174b82",
      name: "Submit",
      caption: "SUBMIT",
      type: "submit",
      _status: "published",
      createdAt: "2024-01-24T07:49:50.399Z",
      updatedAt: "2024-01-24T07:49:50.399Z",
      site: site1.id,
    },
  });

  // Markdown statement
  const question1 = await payload.create<"form-questions">({
    collection: "form-questions",
    data: {
      id: "65b0befe2f80d6edf6ed2270",
      name: "statement",
      type: "markdown",
      label:
        "This promotion is open to Malaysians aged 18 or over, excluding\\nemployees of AIA Malaysia, its agents and anyone professionally\\nassociated with this Promotion",
      _status: "published",
      createdAt: "2024-01-24T07:40:46.234Z",
      updatedAt: "2024-01-24T07:40:46.234Z",
      site: site1.id,
    },
  });

  const requiredRegisterConfig = await payload.create<"form-register-configs">({
    collection: "form-register-configs",
    data: {
      id: "65b0bf1d2f80d6edf6ed2284",
      name: "Required",
      required: true,
      _status: "published",
      createdAt: "2024-01-24T07:41:17.111Z",
      updatedAt: "2024-01-24T07:41:17.111Z",
      site: site1.id,
    },
  });

  const requiredErrorMessage = await payload.create<"form-error-messages">({
    collection: "form-error-messages",
    data: {
      id: "65b0bf2d2f80d6edf6ed2297",
      name: "Required",
      required: "Required",
      _status: "published",
      createdAt: "2024-01-24T07:41:33.344Z",
      updatedAt: "2024-01-24T07:41:33.344Z",
      site: site1.id,
    },
  });

  // First Name
  const question2 = await payload.create<"form-questions">({
    collection: "form-questions",
    data: {
      id: "65b0bf342f80d6edf6ed22a9",
      name: "first_name",
      type: "input",
      label: "First Name*",
      placeholder: "First Name*",
      registerConfig: requiredRegisterConfig.id,
      errorMessages: requiredErrorMessage.id,
      _status: "published",
      createdAt: "2024-01-24T07:41:40.181Z",
      updatedAt: "2024-01-24T07:41:40.181Z",
      site: site1.id,
    },
  });

  // Last Name
  const question3 = await payload.create<"form-questions">({
    collection: "form-questions",
    data: {
      id: "65b0bf4c2f80d6edf6ed22c2",
      name: "last_name",
      type: "input",
      label: "Last Name*",
      placeholder: "Last Name*",
      registerConfig: requiredRegisterConfig.id,
      errorMessages: requiredErrorMessage.id,
      _status: "published",
      createdAt: "2024-01-24T07:42:04.323Z",
      updatedAt: "2024-01-24T07:42:04.323Z",
      site: site1.id,
    },
  });

  const emailRegisterConfig = await payload.create<"form-register-configs">({
    collection: "form-register-configs",
    data: {
      id: "65b0bf772f80d6edf6ed22d9",
      name: "Email",
      required: true,
      pattern:
        "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\\\.[a-zA-Z0-9-]+)*$",
      _status: "published",
      createdAt: "2024-01-24T07:42:47.822Z",
      updatedAt: "2024-01-24T07:42:47.822Z",
      site: site1.id,
    },
  });

  const emailErrorMessage = await payload.create<"form-error-messages">({
    collection: "form-error-messages",
    data: {
      id: "65b0bf8c2f80d6edf6ed22ec",
      name: "Email",
      required: "Required",
      pattern: "Email is not in the correct format",
      _status: "published",
      createdAt: "2024-01-24T07:43:08.537Z",
      updatedAt: "2024-01-24T07:43:08.537Z",
      site: site1.id,
    },
  });
  // Email
  const question4 = await payload.create<"form-questions">({
    collection: "form-questions",
    data: {
      id: "65b0bf8f2f80d6edf6ed22fe",
      name: "email",
      type: "input",
      label: "Email Address*",
      placeholder: "Email Address*",
      registerConfig: emailRegisterConfig.id,
      errorMessages: emailErrorMessage.id,
      _status: "published",
      createdAt: "2024-01-24T07:43:11.346Z",
      updatedAt: "2024-01-24T07:43:11.346Z",
      site: site1.id,
    },
  });

  const optionVietnam1 = await payload.create<"form-options">({
    collection: "form-options",
    data: {
      id: "65b0c09e1e58321a64174b18",
      label: "Đồng Nai",
      value: "đồng_nai",
      _status: "published",
      createdAt: "2024-01-24T07:47:42.620Z",
      updatedAt: "2024-01-24T07:47:42.620Z",
      site: site1.id,
    },
  });
  const optionVietnam2 = await payload.create<"form-options">({
    collection: "form-options",
    data: {
      id: "65b0c0b11e58321a64174b2b",
      label: "Đồng Tháp",
      value: "đồng_tháp",
      _status: "published",
      createdAt: "2024-01-24T07:48:01.866Z",
      updatedAt: "2024-01-24T07:48:01.866Z",
      site: site1.id,
    },
  });
  const configVietnamRegion = await payload.create<"form-configs">({
    collection: "form-configs",
    data: {
      id: "65b0c0b41e58321a64174b3d",
      name: "Vietnam Region Options",
      options: [optionVietnam1.id, optionVietnam2.id],
      _status: "published",
      createdAt: "2024-01-24T07:48:04.552Z",
      updatedAt: "2024-01-24T07:48:04.552Z",
      site: site1.id,
    },
  });
  const questionVietnamRegion = await payload.create<"form-questions">({
    collection: "form-questions",
    data: {
      id: "65b0c0c71e58321a64174b55",
      name: "Vietnam Region",
      type: "select",
      label: "Region*",
      placeholder: "Region*",
      config: configVietnamRegion.id,
      registerConfig: requiredRegisterConfig.id,
      errorMessages: requiredErrorMessage.id,
      priorityOptions: [],
      _status: "published",
      createdAt: "2024-01-24T07:48:23.790Z",
      updatedAt: "2024-01-24T07:48:23.790Z",
      site: site1.id,
    },
  });

  const dependentQuestion = await payload.create<"form-dependent-questions">({
    collection: "form-dependent-questions",
    data: {
      id: "65b0c0cb1e58321a64174b67",
      name: "Vietnam Region",
      conditions: ["VN"],
      questions: questionVietnamRegion.id,
      _status: "published",
      createdAt: "2024-01-24T07:48:27.356Z",
      updatedAt: "2024-01-24T07:48:27.356Z",
      site: site1.id,
    },
  });
  const question5 = await payload.create<"form-questions">({
    collection: "form-questions",
    data: {
      id: "65b0bff71e58321a64174a69",
      name: "country_of_residence",
      type: "country",
      label: "Country of Residence*",
      priorityOptions: ["MY"],
      _status: "published",
      createdAt: "2024-01-24T07:44:55.912Z",
      updatedAt: "2024-01-24T07:48:54.714Z",
      registerConfig: requiredRegisterConfig.id,
      errorMessages: requiredErrorMessage.id,
      placeholder: "Country of Residence*",
      dependentQuestions: dependentQuestion.id,
      site: site1.id,
    },
  });

  const form = await payload.create<"forms">({
    collection: "forms",
    data: {
      id: "5",
      name: "Enter To Win user contact form",
      titleForm:
        "Enter your details below to confirm your vote and be in the running",
      enabled: true,
      _status: "published",
      createdAt: "2024-01-24T07:45:23.097Z",
      updatedAt: "2024-01-24T07:49:52.529Z",
      callForActions: callForActions.id,
      questions: [
        question1.id,
        question2.id,
        question3.id,
        question4.id,
        question5.id,
      ],
      site: site1.id,
    },
  });

  // This page will be created and assigned to Site 1
  await payload.create<"pages1">({
    collection: "pages1",
    data: {
      id: "65b0becc2f80d6edf6ed2231",
      name: "Enter to Win user contact form layout",
      form: form.id,
      site: site1.id,
      _status: "published",
      createdAt: "2024-01-24T07:39:56.973Z",
      updatedAt: "2024-01-24T07:59:01.524Z",
    },
    depth: 99,
  });
};
