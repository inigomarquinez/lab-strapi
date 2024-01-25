

export interface PageDataModel {
  name: string;
  title: string;
  backgroundImage: string;
  form: Form;
}
interface Form {
  name:          string;
  id:            number;
  titleForm:     string[];
  enabled:       boolean;
  questions:     QuestionElement[];
  callForAction: CallForAction[];
}

interface CallForAction {
  caption: string;
  type:    string;
}

interface QuestionElement {
  name:                string;
  type:                string;
  label?:              string;
  registerConfig:      RegisterConfig;
  placeholder?:        string;
  errorMessages?:      ErrorMessages;
  config?:             Config
  priorityOptions?:    string[];
  dependentQuestions?: DependentQuestion[];
  masterName?:         string;
}

interface Config {
  options: Option[];
}

interface Option {
  value:  string;
  label?: string;
}

interface DependentQuestion {
  condition:   string;
  label?:      string;
  question:    DependentQuestionQuestion;
  conditions?: string[];
}

interface DependentQuestionQuestion {
  type:                string;
  name:                string;
  id?:                 string;
  placeholder?:        string;
  registerConfig:      RegisterConfig;
  errorMessages:       ErrorMessages;
  config?:             Config;
  dependentQuestions?: any[];
  label?:              string;
}

interface ErrorMessages {
  required:    string;
  maximumLen?: string;
  pattern?:    string;
  noEmpty?:    string;
  minimumLen?: string;
}
interface RegisterConfig {
  required?: boolean;
  pattern?:  string;
}


