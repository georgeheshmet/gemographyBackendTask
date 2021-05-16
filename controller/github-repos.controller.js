import { analyzeGithubReposService } from '../services/github-repos.service.js'

/* controller to abstract any processing on the data, it will call the necessary service to get repos from github analyze them and return
and object to the user */
export const getGithubrepos =async(req, res, next) => {
    try{
        let gitHubReposObject = await analyzeGithubReposService()
        res.setHeader('content-type', 'application/json');
        res.send(JSON.stringify(gitHubReposObject))
    }
    catch( error ){
        console.log(error.message)
        res.sendStatus(500)
    }
    
}