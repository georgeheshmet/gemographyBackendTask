import bodyParser from 'body-parser'
import express from 'express'
import cors from "cors"
import { getGithubrepos }  from './controller/github-repos.controller.js'

/*export app for testing*/
export const app = express()
app.use(bodyParser.json({
    extended: true
  }));
app.use(cors());


/*/github-repos endpoint will provide an object with top coding languages found in the most popular 100 repos on github, with the following structure*/
/*{
    languages_count: number,
    lanugages_list : [languages],
    languages_details :{
        language_1:{name: name, repos_number: no of repos in the top 100 using this language, repos_array: [list of repos]},
        language_2:{...}
    }
}
*/
app.get("/github-repos", getGithubrepos )

app.listen(5000,()=>console.log("server started"))