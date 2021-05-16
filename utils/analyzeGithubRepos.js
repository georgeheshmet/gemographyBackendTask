/*
function name: analyzeGitHubRepos
description: this function will take the array of the 100 most trending repos , it will analyze the languages used and return an object with the anlayzed data
Input : array of repos from github , each repo in the array whas language & id properties in addition to other properties
output : it returns the following data structure:

{
    languages_count: number,
    lanugages_list : [languages],
    languages_details :{
        language_1:{name: name, repos_number: no of repos in the top 100 using this language, repos_array: [list of repos]}
    }
}
*/



export const analyzeGitHubRepos = (repos = {}) =>{
    const reposArray =  repos
    let repos_analyzed_object = {languages_count: 0, languages_list : [], languages_details :{} }

    reposArray.forEach(repo => {
        let repo_language =repo.language
        let repo_id =  repo.id
        /* if language not found in structure then create an entry for it*/
        if((repo_language in repos_analyzed_object.languages_details) === false){
            repos_analyzed_object.languages_count = repos_analyzed_object.languages_count + 1
            repos_analyzed_object.languages_list = repos_analyzed_object.languages_list.concat(repo_language)
            repos_analyzed_object.languages_details[ repo_language ] = {name :repo_language, repos_number:1, repos_array :[repo] }
        }
        else{
            let language_repos_number = repos_analyzed_object.languages_details[repo.language].repos_number
            let language_repos = repos_analyzed_object.languages_details[repo.language].repos_array
            repos_analyzed_object.languages_details[ repo_language ] = {... repos_analyzed_object.languages_details[repo_language], repos_number : language_repos_number+1, repos_array: language_repos.concat(repo) } 
        }
    })
    return repos_analyzed_object
    // console.log(JSON.stringify(repos_analyzed_object))
}