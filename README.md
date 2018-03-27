# AIGA Design Census Data

This repository contains the AIGA Design Census data from 2016 and 2017. Provided are both the raw data files (csv) and normalized data files (json).

## Motivation

The motivation behind this repo is to provide a better formatted dataset for observation and analysis. This repository also acts as a mirror for the data provided by the AIGA Design Census. 

## File Structure

    year/
    -- parsed/
    ---- data.json
    -- raw/
    ---- data.csv

## Example

Here's an example record from 2017

```js
[
  {
    "time_in_industry": "10-14 years",
    "field": [
      "Graphic Design",
      "Marketing",
      "Photography",
      "Web Design"
    ],
    "secondary_field": [
      "Brainstorming and Ideation",
      "Facilitation",
      "Leadership",
      "Mentoring",
      "Project Management"
    ],
    "employment_status": "A full-time employee at an agency or consultancy",
    "company_specialty": [
      "Advertising",
      "Branding",
      "Innovation",
      "Strategy"
    ],
    "company": "",
    "teach": "",
    "not_working_reason": "",
    "organization_size": "1-10 employees",
    "team_site": "2-4 people",
    "sectors": [
      "Advertising",
      "Arts",
      "Automotive",
      "Consulting",
      "Consumer Products",
      "Government",
      "Health Care",
      "Industrial Goods",
      "Insurance",
      "Marketing and Communications",
      "Media and Broadcasting",
      "Mining",
      "Music",
      "Publishing",
      "Retail",
      "Web Services"
    ],
    "current_employment": "Less than 1 year",
    "role": "Mid-level specialist",
    "undefined": "Looking Glass",
    "length_in_role": "Less than 1 year",
    "typical_work_hours": "41-50 hours per week",
    "annual_salary": "40000",
    "employer_perks": [
      "Education Funding",
      "Fitness Benefits"
    ],
    "job_satisfaction": "Pretty good",
    "job_stability": "Fairly stable",
    "coffee_consumption": "Other",
    "education_level": "Bachelor's degree",
    "education_methods": [
      "On my own",
      "On the job",
      "In school"
    ],
    "education_focus": [
      "Digital Media",
      "Graphic Design"
    ],
    "focus_shift_count": "Always ready for what's next",
    "stay_current_method": [
      "Discussing with peers",
      "Following design feeds",
      "Reading books/magazines",
      "Reading online publications",
      "Seeking online training"
    ],
    "membership": "None of these",
    "goals": [
      "Coding",
      "Drawing or Painting",
      "Motion Graphics",
      "Product Design",
      "Sales",
      "SEO/SEM",
      "Strategy",
      "Web Design"
    ],
    "open_to_opportunities": "Not interested in a new job right now",
    "postal_code": "76051",
    "age": "24",
    "gender": "Male",
    "sexuality": "Not LGBTQ",
    "ethnicity": "White or Caucasian",
    "challenges": [
      "Generational differences in the workforce"
    ],
    "trends": [
      "AI and machine learning",
      "Augmented Reality",
      "Behavior tracking and modeling",
      "Conversational interfaces",
      "Distributed teams and virtual workplace",
      "Image recognition",
      "Internet of Things",
      "Virtual Reality"
    ],
    "future_skills": [
      "Adaptability to tech and social change",
      "Asking good questions",
      "Communication skills",
      "Cross-functional skills",
      "Interpersonal skills",
      "Managing complexity",
      "Observation and listening",
      "Psychology and human behavior",
      "Storytelling"
    ]
  }
]
```


## Other Resouces 

* Official web page - https://designcensus.org
* 2016 Results - http://designcensus2016.aiga.org/#!/
* AIGA Github - https://github.com/AIGAGitHub