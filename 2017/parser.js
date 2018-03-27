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
    "1 -- I've worked in design for:": "time_in_industry",
    "2 --I primarily work in:": "field",
    "3 --I'm also good at:": "secondary_field",
    "4 --I am currently:": "employment_status",
    "5 --My company specializes in:": "company_specialty",
    "6 --My company is:": "company",
    "7 --I teach:": "teach",
    "8 --I'm not working because:": "not_working_reason",
    "9 --My organization has:": "organization_size",
    "10 --My immediate team is:":  "team_site",
    "11 --My work touches these industries or sectors:": "sectors",
    "12 --I’ve been at my current place of work for:": "current_employment",
    "13 --My role is:": "role",
    "16 --I've been in my current role for:": "length_in_role",
    "17 --I typically work:": "typical_work_hours",
    "18 --My annual salary is:": "annual_salary",
    "19 --My job provides:": "employer_perks",
    "20 --In my current role }, there is:":  "advancement_opportunity",
    "21 --In my current role }, I am:": "currently_learning",
    "22 --My job is:": "job_satisfaction",
    "23 --My job stability is:": "job_stability",
    "24 --In addition to my job }, I also:": "extracurriculars",
    "25 --I fuel my daily creativity with coffee:": "coffee_consumption",
    "26 --Highest level of education I've completed:": "education_level",
    "27 --I learned design:": "education_methods",
    "28 --My major focus of study was:": "education_focus",
    "29 --Over my career }, I've had:": "job_count",
    "30 --I've shifted my specialty or focus area:": "focus_shift_count",
    "31 --I stay current with design by:": "stay_current_method",
    "32 --I'm a member of:": "membership",
    "33 --I'd like to get better at:": "goals",
    "34 --I am:": "open_to_opportunities",
    "35 --Right now }, I can't stop listening to:": "listens_to",
    "36 --I live in:": "postal_code",
    "37 --My age is:": "age",
    "38 --I am:": "gender",
    "39 --I consider myself:": "sexuality",
    "40 --My ethnicity is:": "ethnicity",
    "41 --The most critical issues and challenges currently facing design are (answer optional):": "challenges",
    "42 --The emerging trends and technologies that will have the biggest impact on design are (answer optional):": "trends",
    "43 --The most valuable design skills for the future will be (answer optional):": "future_skills"
};

/* For testing, only parses the first 10 items */
// dataObject = dataObject.slice(0, 10);

let newData = dataObject.map((response, index) => {
    console.log(`Parsing item ${index}`);

    let data = {};
    Object.keys(response).forEach(item => {
        const val = KEYS[item];
        data[val] = response[item];

        if (data[val].includes('|')) {
            data[val] = data[val]
                .split('|')
                .filter(n => n !== "");
        }

    });
    return data;
});

newData = JSON.stringify(newData, null, 2);
fs.writeFile(path.join(__dirname, 'parsed/data.json'), newData, () => console.log('Done'))