/*

    Hello! I noticed you're looking at the parser. I am
    a bit embarassed to admit but it definitely is not 
    the best code I've written. However, it works well
    and gives the results it should, so I'm not going 
    to spend too much time on it.

    Please contribute if you have optimizations! 

*/

var fs = require('fs');
var path = require('path');
var csvjson = require('csvjson');

var data = fs.readFileSync(path.join(__dirname, "raw/data.csv"), { encoding: "utf-8"});

var dataObject = csvjson.toObject(data, {
    delimiter: ',',
    quote: '"'
});

const KEYS = {
  "1-location": "location",
  "2-years-professional": "years_professional",
  "3-organization-type": "organization_type",
  "4-organization-industry": "organization_industry",
  "5-organization-size": "organization_size",
  "6-team-member-count": "team_member_count",
  "7-num-you-manage": "team_member_manage",
  "8-organization-position": "organization_position",
  "9-seniority": "seniority",
  "10-design-categories": "design_categories",
  "11-years-at-organization-composite": "years_at_organization_composite",
  "11.1-years-at-organization": "years_at_organization",
  "11.2-years-at-organization-feedback": "years_at_organization_feedback",
  "12-how-hired": "how_hired",
  "13-have-portfolio": "has_portfolio",
  "14-job-stability-concern": "job_stability_concern",
  "15-have-career-path": "has_career_path",
  "16-does-your-organization-provide-opportunities-devel": "organization_opportunities_provided",
  "17-organization-work-impact": "organization_work_impace",
  "18-organization-value": "organization_value",
  "19-job-searching": "job_searching",
  "20-salary-composite": "salary_composite",
  "20.1-annual-salary-input": "annual_salary_input",
  "20.2-hourly-rate-input": "hourly_rate_input",
  "21-total-compensation-input": "total_compensation_input",
  "22-extra-sources-income": "extra_income_sources",
  "23-benefits": "benefits",
  "24-compensation-satisfaction": "compentsation_satisfaction",
  "25-hire-freelancers": "hire_freelancers",
  "26-skills-to-develop": "skills_to_develop",
  "27-daily-responsibilities": "daily_responsibilities",
  "28-percent-enjoyable": "percent_enjoyable",
  "29-life-work-balance": "work_life_balance",
  "30-weekly-hours-composite": "weekly_hours_composite",
  "30.1-weekly-hours": "weekly_hours",
  "30.2-weekly-hours-feedback": "weekly_hours_Feedback",
  "31-level-independence": "independence_level",
  "32-rushed-often": "often_rushed",
  "33-software-usage": "software_usage",
  "34-workspace-type": "workspace_type",
  "35-highest-level-education": "highest_level_education",
  "36-how-received-education": "how_received_education",
  "37-learning-preference": "learning_preference",
  "38-commute-composite": "commute_composite",
  "38.1-commute-time": "commute_time",
  "38.2-commute-feedback": "commute_feedback",
  "39-age": "age",
  "40-gender": "gender",
  "41-ethnicity": "ethnicity",
  "42-languages-spoken": "languages_spoken",
  "43-languages-at-work": "lanugages_at_work",
  "44-sexual-orientation": "sexual_orientation",
  "45-have-children": "has_children",
  "46-have-pets": "has_pets",
  "47-num-coffee-daily": "daily_coffee_count",
  "48-design-communities": "design_communities",
  "49-design-conferences": "design_conferences",
  "50-social-media": "social_media",
  "53-design-joke": "design_joke",
  "54-future-three-words": "future_three_words",
}

// /* For testing, only parses the first 10 items */
// dataObject = dataObject.slice(0, 3);

let newData = dataObject.map((response, index) => {
    console.log(`Parsing item ${index}`);

    let data = {};
    Object.keys(response).forEach(item => {
        const val = KEYS[item];
        data[val] = response[item];

        if (data[val].includes(';')) {
            data[val] = data[val]
                .split(';')
                .filter(n => n !== "0");
        }

    });
    return data;
});

newData = JSON.stringify(newData, null, 2);
fs.writeFile(path.join(__dirname, 'parsed/data.json'), newData, () => console.log('Done'))