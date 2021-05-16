import fetch from  "node-fetch"
import {analyzeGitHubRepos } from "../utils/analyzeGithubRepos.js"
import { getMonthAgoDate } from "../utils/date_tools.js"
const data = new Date
const URL_GITHUB_TOP_TRENDING_100REPOS_MONTH = "https://api.github.com/search/repositories?q=created:>2021-03-01&sort=stars&order=desc&page=1&per_page=100"

/*this service will fetch the url from github and get the 100 most trending repos, it will then pass the repos array to the analyzeGitHubRepos to form the 
object that will be returned to the users */
export const analyzeGithubReposService = async() =>{

    const date_month_ago = getMonthAgoDate()    
    const URL_GITHUB_TOP_TRENDING_100REPOS_MONTH = `https://api.github.com/search/repositories?q=created:>${date_month_ago}&sort=stars&order=desc&page=1&per_page=100`

    try{
        let response = await fetch(URL_GITHUB_TOP_TRENDING_100REPOS_MONTH)
        let response_object = await response.json()
        // console.log(response_object)
        return analyzeGitHubRepos(response_object.items)
    }
    catch ( error ){
        throw new Error(error.message)
    }
    
}
