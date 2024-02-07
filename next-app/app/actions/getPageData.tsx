import {NextResponse} from "next/server";
import {PageDataModel} from "@/app/actions/models";


export async function getPageData(locale: string): Promise<PageDataModel> {
  return locale === "en" ?
    {
      "name": "Enter to Win user contact form layout",
      "title": "Title",
      "backgroundImage": "https://images.ctfassets.net/zq302znxt4f0/3O5DdkfB1RJ0VFUIXdoaNZ/999cf3a3dcf8c1f2db021809fda75aa2/background.png",
      "form": {
        "name": "Enter To Win user contact form",
        "id": 5,
        "titleForm": [
          "Enter your details below to confirm your vote and be in the running",
          "to win a signed Tottenham Hotspur jersey or Fitbit Inspire smartwatch"
        ],
        "enabled": true,
        "questions": [
          {
            "name": "statement",
            "type": "markdown",
            "label": "This promotion is open to Malaysians aged 18 or over, excluding\nemployees of AIA Malaysia, its agents and anyone professionally\nassociated with this Promotion",
            "registerConfig": {
              "required": true,
              "pattern": "^\\d{6}-\\d{2}-\\d{4}$"
            }
          },
          {
            "name": "first_name",
            "type": "input",
            "placeholder": "First Name*",
            "errorMessages": {
              "required": "Required",
              "maximumLen": "Select up to 3",
              "pattern": "The input is not in the correct format"
            },
            "registerConfig": {
              "required": true
            }
          },
          {
            "name": "last_name",
            "type": "input",
            "placeholder": "Last Name*",
            "errorMessages": {
              "required": "Required",
              "maximumLen": "Select up to 3",
              "pattern": "The input is not in the correct format"
            },
            "registerConfig": {
              "required": true
            }
          },
          {
            "name": "email",
            "type": "input",
            "placeholder": "Email Address*",
            "errorMessages": {
              "required": "Required",
              "maximumLen": "Select up to 3",
              "pattern": "The input is not in the correct format"
            },
            "registerConfig": {
              "required": true,
              "pattern": "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"
            }
          },
          {
            "name": "phone_number",
            "type": "input",
            "placeholder": "Mobile Phone Number*",
            "errorMessages": {
              "required": "Required",
              "maximumLen": "Select up to 3",
              "pattern": "The input is not in the correct format"
            },
            "registerConfig": {
              "required": true,
              "pattern": "^(\\(?\\+[0-9]{1,3}\\)?)?[0-9_\\- \\(\\)]{3,}$"
            },
            "config": {
              "options": [
                {
                  "value": "+44"
                },
                {
                  "value": "uk"
                }
              ]
            }
          },
          {
            "name": "country_of_residence",
            "type": "country",
            "placeholder": "Country of Residence*",
            "errorMessages": {
              "required": "Required",
              "maximumLen": "Select up to 3",
              "pattern": "The input is not in the correct format"
            },
            "registerConfig": {
              "required": true
            },
            "priorityOptions": [
              "MY"
            ],
            "dependentQuestions": [
              {
                "condition": "VN",
                "label": "Vietnam",
                "question": {
                  "type": "select",
                  "name": "region",
                  "id": "",
                  "placeholder": "Region*",
                  "registerConfig": {
                    "required": true
                  },
                  "errorMessages": {
                    "required": "Required",
                    "maximumLen": "Select up to 3",
                    "pattern": "The input is not in the correct format"
                  },
                  "config": {
                    "options": [
                      {
                        "label": "Đồng Nai",
                        "value": "đồng_nai"
                      },
                      {
                        "label": "Đồng Tháp",
                        "value": "đồng_tháp"
                      },
                      {
                        "label": "Gia Lai",
                        "value": "gia_lai"
                      },
                    ]
                  },
                  "dependentQuestions": []
                }
              },
              {
                "condition": "TH",
                "label": "Thailand",
                "question": {
                  "type": "select",
                  "name": "region",
                  "id": "",
                  "placeholder": "Region*",
                  "registerConfig": {
                    "required": true
                  },
                  "errorMessages": {
                    "required": "Required",
                    "maximumLen": "Select up to 3",
                    "pattern": "The input is not in the correct format"
                  },
                  "config": {
                    "options": [
                      {
                        "label": "Amnat Charoen",
                        "value": "amnat_charoen"
                      },
                      {
                        "label": "Ang Thong",
                        "value": "ang_thong"
                      },
                      {
                        "label": "Bangkok",
                        "value": "bangkok"
                      },
                      {
                        "label": "Bueng Kan",
                        "value": "bueng_kan"
                      },
                      {
                        "label": "Buri Ram",
                        "value": "buri_ram"
                      },
                    ]
                  },
                  "dependentQuestions": []
                }
              },
              {
                "condition": "SG",
                "label": "Singapore",
                "question": {
                  "type": "select",
                  "name": "region",
                  "id": "",
                  "placeholder": "Region*",
                  "registerConfig": {
                    "required": true
                  },
                  "errorMessages": {
                    "required": "Required",
                    "maximumLen": "Select up to 3",
                    "pattern": "The input is not in the correct format"
                  },
                  "config": {
                    "options": [
                      {
                        "label": "Central Singapore",
                        "value": "central_singapore"
                      },
                      {
                        "label": "North East",
                        "value": "north_east"
                      },
                      {
                        "label": "North West",
                        "value": "north_west"
                      },
                      {
                        "label": "South East",
                        "value": "south_east"
                      },
                      {
                        "label": "South West",
                        "value": "south_west"
                      }
                    ]
                  },
                  "dependentQuestions": []
                }
              },
              {
                "condition": "MM",
                "label": "Myanmar",
                "question": {
                  "type": "select",
                  "name": "region",
                  "id": "",
                  "placeholder": "Region*",
                  "registerConfig": {
                    "required": true
                  },
                  "errorMessages": {
                    "required": "Required",
                    "maximumLen": "Select up to 3",
                    "pattern": "The input is not in the correct format"
                  },
                  "config": {
                    "options": [
                      {
                        "label": "Ayeyarwady",
                        "value": "ayeyarwady"
                      },
                      {
                        "label": "Bago",
                        "value": "bago"
                      },
                      {
                        "label": "Chin",
                        "value": "chin"
                      },
                      {
                        "label": "Kachin",
                        "value": "kachin"
                      },
                      {
                        "label": "Kayah",
                        "value": "kayah"
                      },
                    ]
                  },
                  "dependentQuestions": []
                }
              },
              {
                "condition": "MY",
                "label": "Malaysia",
                "question": {
                  "type": "select",
                  "name": "region",
                  "id": "",
                  "placeholder": "Region*",
                  "registerConfig": {
                    "required": true
                  },
                  "errorMessages": {
                    "required": "Required",
                    "maximumLen": "Select up to 3",
                    "pattern": "The input is not in the correct format"
                  },
                  "config": {
                    "options": [
                      {
                        "label": "Johor",
                        "value": "johor"
                      },
                      {
                        "label": "Kedah",
                        "value": "kedah"
                      },
                      {
                        "label": "Kelantan",
                        "value": "kelantan"
                      },
                      {
                        "label": "Melaka",
                        "value": "melaka"
                      },
                      {
                        "label": "Negeri Sembilan",
                        "value": "negeri_sembilan"
                      },
                    ]
                  },
                  "dependentQuestions": []
                }
              },
              {
                "condition": "KR",
                "label": "Korea, Republic of",
                "question": {
                  "type": "select",
                  "name": "region",
                  "id": "",
                  "placeholder": "Region*",
                  "registerConfig": {
                    "required": true
                  },
                  "errorMessages": {
                    "required": "Required",
                    "maximumLen": "Select up to 3",
                    "pattern": "The input is not in the correct format"
                  },
                  "config": {
                    "options": [
                      {
                        "label": "Chungch ongbuk-do",
                        "value": "chungch_ongbuk-do"
                      },
                      {
                        "label": "Chungch ongnam-do",
                        "value": "chungch_ongnam-do"
                      },
                      {
                        "label": "Cheju-do",
                        "value": "cheju-do"
                      },
                      {
                        "label": "Chollabuk-do",
                        "value": "chollabuk-do"
                      },
                      {
                        "label": "Chollanam-do",
                        "value": "chollanam-do"
                      },
                    ]
                  },
                  "dependentQuestions": []
                }
              },
              {
                "condition": "ID",
                "label": "Indonesia",
                "question": {
                  "type": "select",
                  "name": "region",
                  "id": "",
                  "placeholder": "Region*",
                  "registerConfig": {
                    "required": true
                  },
                  "errorMessages": {
                    "required": "Required",
                    "maximumLen": "Select up to 3",
                    "pattern": "The input is not in the correct format"
                  },
                  "config": {
                    "options": [
                      {
                        "label": "Aceh",
                        "value": "aceh"
                      },
                      {
                        "label": "Bali",
                        "value": "bali"
                      },
                      {
                        "label": "Bangka Belitung",
                        "value": "bangka_belitung"
                      },
                      {
                        "label": "Banten",
                        "value": "banten"
                      },
                      {
                        "label": "Bengkulu",
                        "value": "bengkulu"
                      },
                      {
                        "label": "Gorontalo",
                        "value": "gorontalo"
                      },
                      {
                        "label": "Jakarta Raya",
                        "value": "jakarta_raya"
                      },
                      {
                        "label": "Jambi",
                        "value": "jambi"
                      },
                    ]
                  },
                  "dependentQuestions": []
                }
              },
              {
                "condition": "CN",
                "label": "China",
                "question": {
                  "type": "select",
                  "name": "region",
                  "id": "",
                  "placeholder": "Region*",
                  "registerConfig": {
                    "required": true
                  },
                  "errorMessages": {
                    "required": "Required",
                    "maximumLen": "Select up to 3",
                    "pattern": "The input is not in the correct format"
                  },
                  "config": {
                    "options": [
                      {
                        "label": "Anhui",
                        "value": "anhui"
                      },
                      {
                        "label": "Beijing",
                        "value": "beijing"
                      },
                      {
                        "label": "Chongqing",
                        "value": "chongqing"
                      },
                      {
                        "label": "Fujian",
                        "value": "fujian"
                      },
                      {
                        "label": "Gansu",
                        "value": "gansu"
                      },
                      {
                        "label": "Guangdong",
                        "value": "guangdong"
                      },
                    ]
                  },
                  "dependentQuestions": []
                }
              },
              {
                "condition": "KH",
                "label": "Cambodia",
                "question": {
                  "type": "select",
                  "name": "region",
                  "id": "",
                  "placeholder": "Region*",
                  "registerConfig": {
                    "required": true
                  },
                  "errorMessages": {
                    "required": "Required",
                    "maximumLen": "Select up to 3",
                    "pattern": "The input is not in the correct format"
                  },
                  "config": {
                    "options": [
                      {
                        "label": "Baat Dambang",
                        "value": "baat_dambang"
                      },
                      {
                        "label": "Banteay Mean Chey",
                        "value": "banteay_mean_chey"
                      },
                      {
                        "label": "Kampong Chaam",
                        "value": "kampong_chaam"
                      },
                      {
                        "label": "Kampong Chhnang",
                        "value": "kampong_chhnang"
                      },
                    ]
                  },
                  "dependentQuestions": []
                }
              }
            ]
          },
          {
            "name": "aia_enter_to_win_2023_nationality_malaysian",
            "type": "select",
            "placeholder": "Your Nationality*",
            "dependentQuestions": [
              {
                "conditions": [
                  "yes"
                ],
                "condition": "MY",
                "question": {
                  "name": "aia_enter_to_win_2023_malaysia_national_id_number",
                  "type": "input",
                  "placeholder": "Please enter your NRIC number ",
                  "errorMessages": {
                    "required": "Required",
                    "noEmpty": "This field can't be empty",
                    "maximumLen": "Your ID number is too long",
                    "minimumLen": "Your ID number is too short",
                    "pattern": "Please enter a valid Malaysian ID number by including the dash symbol"
                  },
                  "registerConfig": {
                    "required": true,
                    "pattern": "^\\d{6}-\\d{2}-\\d{4}$"
                  }
                }
              }
            ],
            "errorMessages": {
              "required": "Required",
              "noEmpty": "This field can't be empty",
              "maximumLen": "Your ID number is too long",
              "minimumLen": "Your ID number is too short",
              "pattern": "Please enter a valid Malaysian ID number by including the dash symbol"
            },
            "registerConfig": {},
            "config": {
              "options": [
                {
                  "label": "Malaysian ",
                  "value": "yes"
                },
                {
                  "label": "Non Malaysian ",
                  "value": "no"
                }
              ]
            }
          },
          {
            "name": "age",
            "type": "select",
            "placeholder": "Age Range*",
            "errorMessages": {
              "required": "Required",
              "maximumLen": "Select up to 3",
              "pattern": "The input is not in the correct format"
            },
            "registerConfig": {
              "required": true
            },
            "config": {
              "options": [
                {
                  "label": "18-24",
                  "value": "18-24"
                },
                {
                  "label": "25-34",
                  "value": "25-34"
                },
                {
                  "label": "35-44",
                  "value": "35-44"
                },
                {
                  "label": "45-54",
                  "value": "45-54"
                },
                {
                  "label": "55-64",
                  "value": "55-64"
                },
                {
                  "label": "65+",
                  "value": "65+"
                }
              ]
            }
          },
          {
            "name": "gender",
            "type": "select",
            "placeholder": "Gender*",
            "errorMessages": {
              "required": "Required",
              "maximumLen": "Select up to 3",
              "pattern": "The input is not in the correct format"
            },
            "registerConfig": {
              "required": true
            },
            "config": {
              "options": [
                {
                  "label": "Male",
                  "value": "male"
                },
                {
                  "label": "Female",
                  "value": "female"
                }
              ]
            }
          },
          {
            "name": "aia_enter_to_win_2023_what_is_your_current_occupation",
            "masterName": "master_aia_what_is_your_current_occupation",
            "type": "select",
            "label": "What is your current occupation?*",
            "dependentQuestions": [
              {
                "conditions": [
                  "other"
                ],
                "condition": "others",
                "question": {
                  "name": "aia_potm_2023_what_is_your_current_occupation_my_others",
                  "type": "input",
                  "label": "Please specify*",
                  "errorMessages": {
                    "required": "Required"
                  },
                  "registerConfig": {
                    "required": true
                  }
                }
              }
            ],
            "errorMessages": {
              "required": "Required",
              "noEmpty": "This field can't be empty",
              "maximumLen": "Your ID number is too long",
              "minimumLen": "Your ID number is too short",
              "pattern": "Please enter a valid Malaysian ID number by including the dash symbol"
            },
            "registerConfig": {
              "required": true
            },
            "config": {
              "options": [
                {
                  "label": "Business owner ",
                  "value": "business_owner"
                },
                {
                  "label": "Government officers",
                  "value": "government_officer"
                },
                {
                  "label": "Professional",
                  "value": "professional"
                },
                {
                  "label": "Permanent Employee",
                  "value": "permanment_employee"
                },
                {
                  "label": "Freelancer/Contract staff",
                  "value": "freelancer"
                },
                {
                  "label": "Unemployed",
                  "value": "unemployed"
                },
                {
                  "label": "Retired",
                  "value": "retired"
                },
                {
                  "label": "Housewife",
                  "value": "housewife"
                },
                {
                  "label": "Student",
                  "value": "student"
                },
                {
                  "label": "Others",
                  "value": "other"
                }
              ]
            }
          },
          {
            "name": "aia_enter_to_win_2023_i_am_an_aia",
            "masterName": "master_aia_i_am_an_aia",
            "type": "select",
            "label": "I am an AIA*",
            "errorMessages": {
              "required": "Required",
              "noEmpty": "This field can't be empty",
              "maximumLen": "Your ID number is too long",
              "minimumLen": "Your ID number is too short",
              "pattern": "Please enter a valid Malaysian ID number by including the dash symbol"
            },
            "registerConfig": {
              "required": true,
              "pattern": "^\\d{6}-\\d{2}-\\d{4}$"
            },
            "config": {
              "options": [
                {
                  "label": "Life planner",
                  "value": "life_planner"
                },
                {
                  "label": "Employee",
                  "value": "employee"
                },
                {
                  "label": "Customer",
                  "value": "customer"
                },
                {
                  "label": "None of above",
                  "value": "none_of_the_above"
                }
              ]
            }
          },
          {
            "name": "aia_enter_to_win_2023_terms_and_conditions",
            "masterName": "master_aia_opt_in",
            "type": "checkbox",
            "label": "I confirm that I am 18 years old and above. I have read, understood and agreed to be bound by the [terms & conditions](/my/entertowin/termsandconditions 'terms & conditions') of this contest. I agree that any personal information collected or held by AIA Malaysia is subject to AIA Malaysia Privacy Statement [privacy policy](https://www.aia.com.my/en/index/privacy-statement.html 'privacy policy').\n",
            "errorMessages": {
              "required": "Required",
              "maximumLen": "Select up to 3",
              "pattern": "The input is not in the correct format"
            },
            "registerConfig": {
              "required": true
            }
          },
          {
            "name": "aia_enter_to_win_2023_opt_in",
            "masterName": "master_aia_opt_in",
            "type": "checkbox",
            "label": "I agree and consent to my personal information or details being processed and used by AIA Bhd. for the purpose of marketing and publicity notification/information for its product.*",
            "errorMessages": {
              "required": "Required"
            },
            "registerConfig": {
              "required": true
            }
          },
          {
            "name": "aia_enter_to_win_2023_tottenham_opt_in",
            "masterName": "master_aia_tottenham_opt_in",
            "type": "checkbox",
            "label": "Please send me club products, events, news and offers from Tottenham Hotspur by email.",
            "registerConfig": {
              "required": false
            }
          }
        ],
        "callForAction": [
          {
            "caption": "SUBMIT",
            "type": "submit"
          }
        ]
      }
    } : {
      "name": "Enter to Win - layout de formulario de contacto de usuario",
      "title": "Title",
      "backgroundImage": "https://images.ctfassets.net/zq302znxt4f0/3O5DdkfB1RJ0VFUIXdoaNZ/999cf3a3dcf8c1f2db021809fda75aa2/background.png",
      "form": {
        "name": "Enter To Win - formulario de contacto de usuario",
        "id": 5,
        "titleForm": [
          "Ingrese sus datos a continuación para confirmar su voto y participar",
          "para ganar una camiseta firmada del Tottenham Hotspur o un reloj inteligente Fitbit Inspire"
        ],
        "enabled": true,
        "questions": [
          {
            "name": "statement",
            "type": "markdown",
            "label": "Esta promoción está abierta a malasios mayores de 18 años, excluyendo\nempleados de AIA Malaysia, sus agentes y cualquier persona profesionalmente\nasociada con esta Promoción",
            "registerConfig": {
              "required": true,
              "pattern": "^\\d{6}-\\d{2}-\\d{4}$"
            }
          },
          {
            "name": "first_name",
            "type": "input",
            "placeholder": "Nombre*",
            "errorMessages": {
              "required": "Required",
              "maximumLen": "Select up to 3",
              "pattern": "The input is not in the correct format"
            },
            "registerConfig": {
              "required": true
            }
          },
          {
            "name": "last_name",
            "type": "input",
            "placeholder": "Apellido*",
            "errorMessages": {
              "required": "Required",
              "maximumLen": "Select up to 3",
              "pattern": "The input is not in the correct format"
            },
            "registerConfig": {
              "required": true
            }
          },
          {
            "name": "email",
            "type": "input",
            "placeholder": "Email Address*",
            "errorMessages": {
              "required": "Required",
              "maximumLen": "Select up to 3",
              "pattern": "The input is not in the correct format"
            },
            "registerConfig": {
              "required": true,
              "pattern": "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"
            }
          },
          {
            "name": "phone_number",
            "type": "input",
            "placeholder": "Mobile Phone Number*",
            "errorMessages": {
              "required": "Required",
              "maximumLen": "Select up to 3",
              "pattern": "The input is not in the correct format"
            },
            "registerConfig": {
              "required": true,
              "pattern": "^(\\(?\\+[0-9]{1,3}\\)?)?[0-9_\\- \\(\\)]{3,}$"
            },
            "config": {
              "options": [
                {
                  "value": "+44"
                },
                {
                  "value": "uk"
                }
              ]
            }
          },
          {
            "name": "country_of_residence",
            "type": "country",
            "placeholder": "Country of Residence*",
            "errorMessages": {
              "required": "Required",
              "maximumLen": "Select up to 3",
              "pattern": "The input is not in the correct format"
            },
            "registerConfig": {
              "required": true
            },
            "priorityOptions": [
              "MY"
            ],
            "dependentQuestions": [
              {
                "condition": "VN",
                "label": "Vietnam",
                "question": {
                  "type": "select",
                  "name": "region",
                  "id": "",
                  "placeholder": "Region*",
                  "registerConfig": {
                    "required": true
                  },
                  "errorMessages": {
                    "required": "Required",
                    "maximumLen": "Select up to 3",
                    "pattern": "The input is not in the correct format"
                  },
                  "config": {
                    "options": [
                      {
                        "label": "Đồng Nai",
                        "value": "đồng_nai"
                      },
                      {
                        "label": "Đồng Tháp",
                        "value": "đồng_tháp"
                      },
                      {
                        "label": "Gia Lai",
                        "value": "gia_lai"
                      },
                    ]
                  },
                  "dependentQuestions": []
                }
              },
              {
                "condition": "TH",
                "label": "Thailand",
                "question": {
                  "type": "select",
                  "name": "region",
                  "id": "",
                  "placeholder": "Region*",
                  "registerConfig": {
                    "required": true
                  },
                  "errorMessages": {
                    "required": "Required",
                    "maximumLen": "Select up to 3",
                    "pattern": "The input is not in the correct format"
                  },
                  "config": {
                    "options": [
                      {
                        "label": "Amnat Charoen",
                        "value": "amnat_charoen"
                      },
                      {
                        "label": "Ang Thong",
                        "value": "ang_thong"
                      },
                      {
                        "label": "Bangkok",
                        "value": "bangkok"
                      },
                      {
                        "label": "Bueng Kan",
                        "value": "bueng_kan"
                      },
                      {
                        "label": "Buri Ram",
                        "value": "buri_ram"
                      },
                    ]
                  },
                  "dependentQuestions": []
                }
              },
              {
                "condition": "SG",
                "label": "Singapore",
                "question": {
                  "type": "select",
                  "name": "region",
                  "id": "",
                  "placeholder": "Region*",
                  "registerConfig": {
                    "required": true
                  },
                  "errorMessages": {
                    "required": "Required",
                    "maximumLen": "Select up to 3",
                    "pattern": "The input is not in the correct format"
                  },
                  "config": {
                    "options": [
                      {
                        "label": "Central Singapore",
                        "value": "central_singapore"
                      },
                      {
                        "label": "North East",
                        "value": "north_east"
                      },
                      {
                        "label": "North West",
                        "value": "north_west"
                      },
                      {
                        "label": "South East",
                        "value": "south_east"
                      },
                      {
                        "label": "South West",
                        "value": "south_west"
                      }
                    ]
                  },
                  "dependentQuestions": []
                }
              },
              {
                "condition": "MM",
                "label": "Myanmar",
                "question": {
                  "type": "select",
                  "name": "region",
                  "id": "",
                  "placeholder": "Region*",
                  "registerConfig": {
                    "required": true
                  },
                  "errorMessages": {
                    "required": "Required",
                    "maximumLen": "Select up to 3",
                    "pattern": "The input is not in the correct format"
                  },
                  "config": {
                    "options": [
                      {
                        "label": "Ayeyarwady",
                        "value": "ayeyarwady"
                      },
                      {
                        "label": "Bago",
                        "value": "bago"
                      },
                      {
                        "label": "Chin",
                        "value": "chin"
                      },
                      {
                        "label": "Kachin",
                        "value": "kachin"
                      },
                      {
                        "label": "Kayah",
                        "value": "kayah"
                      },
                    ]
                  },
                  "dependentQuestions": []
                }
              },
              {
                "condition": "MY",
                "label": "Malaysia",
                "question": {
                  "type": "select",
                  "name": "region",
                  "id": "",
                  "placeholder": "Region*",
                  "registerConfig": {
                    "required": true
                  },
                  "errorMessages": {
                    "required": "Required",
                    "maximumLen": "Select up to 3",
                    "pattern": "The input is not in the correct format"
                  },
                  "config": {
                    "options": [
                      {
                        "label": "Johor",
                        "value": "johor"
                      },
                      {
                        "label": "Kedah",
                        "value": "kedah"
                      },
                      {
                        "label": "Kelantan",
                        "value": "kelantan"
                      },
                      {
                        "label": "Melaka",
                        "value": "melaka"
                      },
                      {
                        "label": "Negeri Sembilan",
                        "value": "negeri_sembilan"
                      },
                    ]
                  },
                  "dependentQuestions": []
                }
              },
              {
                "condition": "KR",
                "label": "Korea, Republic of",
                "question": {
                  "type": "select",
                  "name": "region",
                  "id": "",
                  "placeholder": "Region*",
                  "registerConfig": {
                    "required": true
                  },
                  "errorMessages": {
                    "required": "Required",
                    "maximumLen": "Select up to 3",
                    "pattern": "The input is not in the correct format"
                  },
                  "config": {
                    "options": [
                      {
                        "label": "Chungch ongbuk-do",
                        "value": "chungch_ongbuk-do"
                      },
                      {
                        "label": "Chungch ongnam-do",
                        "value": "chungch_ongnam-do"
                      },
                      {
                        "label": "Cheju-do",
                        "value": "cheju-do"
                      },
                      {
                        "label": "Chollabuk-do",
                        "value": "chollabuk-do"
                      },
                      {
                        "label": "Chollanam-do",
                        "value": "chollanam-do"
                      },
                    ]
                  },
                  "dependentQuestions": []
                }
              },
              {
                "condition": "ID",
                "label": "Indonesia",
                "question": {
                  "type": "select",
                  "name": "region",
                  "id": "",
                  "placeholder": "Region*",
                  "registerConfig": {
                    "required": true
                  },
                  "errorMessages": {
                    "required": "Required",
                    "maximumLen": "Select up to 3",
                    "pattern": "The input is not in the correct format"
                  },
                  "config": {
                    "options": [
                      {
                        "label": "Aceh",
                        "value": "aceh"
                      },
                      {
                        "label": "Bali",
                        "value": "bali"
                      },
                      {
                        "label": "Bangka Belitung",
                        "value": "bangka_belitung"
                      },
                      {
                        "label": "Banten",
                        "value": "banten"
                      },
                      {
                        "label": "Bengkulu",
                        "value": "bengkulu"
                      },
                      {
                        "label": "Gorontalo",
                        "value": "gorontalo"
                      },
                      {
                        "label": "Jakarta Raya",
                        "value": "jakarta_raya"
                      },
                      {
                        "label": "Jambi",
                        "value": "jambi"
                      },
                    ]
                  },
                  "dependentQuestions": []
                }
              },
              {
                "condition": "CN",
                "label": "China",
                "question": {
                  "type": "select",
                  "name": "region",
                  "id": "",
                  "placeholder": "Region*",
                  "registerConfig": {
                    "required": true
                  },
                  "errorMessages": {
                    "required": "Required",
                    "maximumLen": "Select up to 3",
                    "pattern": "The input is not in the correct format"
                  },
                  "config": {
                    "options": [
                      {
                        "label": "Anhui",
                        "value": "anhui"
                      },
                      {
                        "label": "Beijing",
                        "value": "beijing"
                      },
                      {
                        "label": "Chongqing",
                        "value": "chongqing"
                      },
                      {
                        "label": "Fujian",
                        "value": "fujian"
                      },
                      {
                        "label": "Gansu",
                        "value": "gansu"
                      },
                      {
                        "label": "Guangdong",
                        "value": "guangdong"
                      },
                    ]
                  },
                  "dependentQuestions": []
                }
              },
              {
                "condition": "KH",
                "label": "Cambodia",
                "question": {
                  "type": "select",
                  "name": "region",
                  "id": "",
                  "placeholder": "Region*",
                  "registerConfig": {
                    "required": true
                  },
                  "errorMessages": {
                    "required": "Required",
                    "maximumLen": "Select up to 3",
                    "pattern": "The input is not in the correct format"
                  },
                  "config": {
                    "options": [
                      {
                        "label": "Baat Dambang",
                        "value": "baat_dambang"
                      },
                      {
                        "label": "Banteay Mean Chey",
                        "value": "banteay_mean_chey"
                      },
                      {
                        "label": "Kampong Chaam",
                        "value": "kampong_chaam"
                      },
                      {
                        "label": "Kampong Chhnang",
                        "value": "kampong_chhnang"
                      },
                    ]
                  },
                  "dependentQuestions": []
                }
              }
            ]
          },
          {
            "name": "aia_enter_to_win_2023_nationality_malaysian",
            "type": "select",
            "placeholder": "Your Nationality*",
            "dependentQuestions": [
              {
                "conditions": [
                  "yes"
                ],
                "condition": "MY",
                "question": {
                  "name": "aia_enter_to_win_2023_malaysia_national_id_number",
                  "type": "input",
                  "placeholder": "Please enter your NRIC number ",
                  "errorMessages": {
                    "required": "Required",
                    "noEmpty": "This field can't be empty",
                    "maximumLen": "Your ID number is too long",
                    "minimumLen": "Your ID number is too short",
                    "pattern": "Please enter a valid Malaysian ID number by including the dash symbol"
                  },
                  "registerConfig": {
                    "required": true,
                    "pattern": "^\\d{6}-\\d{2}-\\d{4}$"
                  }
                }
              }
            ],
            "errorMessages": {
              "required": "Required",
              "noEmpty": "This field can't be empty",
              "maximumLen": "Your ID number is too long",
              "minimumLen": "Your ID number is too short",
              "pattern": "Please enter a valid Malaysian ID number by including the dash symbol"
            },
            "registerConfig": {},
            "config": {
              "options": [
                {
                  "label": "Malaysian ",
                  "value": "yes"
                },
                {
                  "label": "Non Malaysian ",
                  "value": "no"
                }
              ]
            }
          },
          {
            "name": "age",
            "type": "select",
            "placeholder": "Age Range*",
            "errorMessages": {
              "required": "Required",
              "maximumLen": "Select up to 3",
              "pattern": "The input is not in the correct format"
            },
            "registerConfig": {
              "required": true
            },
            "config": {
              "options": [
                {
                  "label": "18-24",
                  "value": "18-24"
                },
                {
                  "label": "25-34",
                  "value": "25-34"
                },
                {
                  "label": "35-44",
                  "value": "35-44"
                },
                {
                  "label": "45-54",
                  "value": "45-54"
                },
                {
                  "label": "55-64",
                  "value": "55-64"
                },
                {
                  "label": "65+",
                  "value": "65+"
                }
              ]
            }
          },
          {
            "name": "gender",
            "type": "select",
            "placeholder": "Gender*",
            "errorMessages": {
              "required": "Required",
              "maximumLen": "Select up to 3",
              "pattern": "The input is not in the correct format"
            },
            "registerConfig": {
              "required": true
            },
            "config": {
              "options": [
                {
                  "label": "Male",
                  "value": "male"
                },
                {
                  "label": "Female",
                  "value": "female"
                }
              ]
            }
          },
          {
            "name": "aia_enter_to_win_2023_what_is_your_current_occupation",
            "masterName": "master_aia_what_is_your_current_occupation",
            "type": "select",
            "label": "What is your current occupation?*",
            "dependentQuestions": [
              {
                "conditions": [
                  "other"
                ],
                "condition": "others",
                "question": {
                  "name": "aia_potm_2023_what_is_your_current_occupation_my_others",
                  "type": "input",
                  "label": "Please specify*",
                  "errorMessages": {
                    "required": "Required"
                  },
                  "registerConfig": {
                    "required": true
                  }
                }
              }
            ],
            "errorMessages": {
              "required": "Required",
              "noEmpty": "This field can't be empty",
              "maximumLen": "Your ID number is too long",
              "minimumLen": "Your ID number is too short",
              "pattern": "Please enter a valid Malaysian ID number by including the dash symbol"
            },
            "registerConfig": {
              "required": true
            },
            "config": {
              "options": [
                {
                  "label": "Business owner ",
                  "value": "business_owner"
                },
                {
                  "label": "Government officers",
                  "value": "government_officer"
                },
                {
                  "label": "Professional",
                  "value": "professional"
                },
                {
                  "label": "Permanent Employee",
                  "value": "permanment_employee"
                },
                {
                  "label": "Freelancer/Contract staff",
                  "value": "freelancer"
                },
                {
                  "label": "Unemployed",
                  "value": "unemployed"
                },
                {
                  "label": "Retired",
                  "value": "retired"
                },
                {
                  "label": "Housewife",
                  "value": "housewife"
                },
                {
                  "label": "Student",
                  "value": "student"
                },
                {
                  "label": "Others",
                  "value": "other"
                }
              ]
            }
          },
          {
            "name": "aia_enter_to_win_2023_i_am_an_aia",
            "masterName": "master_aia_i_am_an_aia",
            "type": "select",
            "label": "I am an AIA*",
            "errorMessages": {
              "required": "Required",
              "noEmpty": "This field can't be empty",
              "maximumLen": "Your ID number is too long",
              "minimumLen": "Your ID number is too short",
              "pattern": "Please enter a valid Malaysian ID number by including the dash symbol"
            },
            "registerConfig": {
              "required": true,
              "pattern": "^\\d{6}-\\d{2}-\\d{4}$"
            },
            "config": {
              "options": [
                {
                  "label": "Life planner",
                  "value": "life_planner"
                },
                {
                  "label": "Employee",
                  "value": "employee"
                },
                {
                  "label": "Customer",
                  "value": "customer"
                },
                {
                  "label": "None of above",
                  "value": "none_of_the_above"
                }
              ]
            }
          },
          {
            "name": "aia_enter_to_win_2023_terms_and_conditions",
            "masterName": "master_aia_opt_in",
            "type": "checkbox",
            "label": "I confirm that I am 18 years old and above. I have read, understood and agreed to be bound by the [terms & conditions](/my/entertowin/termsandconditions 'terms & conditions') of this contest. I agree that any personal information collected or held by AIA Malaysia is subject to AIA Malaysia Privacy Statement [privacy policy](https://www.aia.com.my/en/index/privacy-statement.html 'privacy policy').\n",
            "errorMessages": {
              "required": "Required",
              "maximumLen": "Select up to 3",
              "pattern": "The input is not in the correct format"
            },
            "registerConfig": {
              "required": true
            }
          },
          {
            "name": "aia_enter_to_win_2023_opt_in",
            "masterName": "master_aia_opt_in",
            "type": "checkbox",
            "label": "I agree and consent to my personal information or details being processed and used by AIA Bhd. for the purpose of marketing and publicity notification/information for its product.*",
            "errorMessages": {
              "required": "Required"
            },
            "registerConfig": {
              "required": true
            }
          },
          {
            "name": "aia_enter_to_win_2023_tottenham_opt_in",
            "masterName": "master_aia_tottenham_opt_in",
            "type": "checkbox",
            "label": "Please send me club products, events, news and offers from Tottenham Hotspur by email.",
            "registerConfig": {
              "required": false
            }
          }
        ],
        "callForAction": [
          {
            "caption": "SUBMIT",
            "type": "submit"
          }
        ]
      }
    }
}