import { useState } from 'react'
import '../App.css'
import { Octokit } from '@octokit/core'
import CommitList from './CommitList';

function RepoItem( { repoItem }){
    const [commits, setCommitList] = useState([]);
    
    async function handleRepoClick() { 

        console.log(repoItem)

        try {
            const octokit = new Octokit({
              auth: 'token'
            })
      
            let response = await octokit.request('GET /repos/{owner}/{repo}/commits', {
                owner: repoItem['owner']['login'],
                repo:  repoItem.name,
                headers: {
                  'X-GitHub-Api-Version': '2022-11-28'
                }
              })

              setCommitList(response['data'])

              console.log(response)
          } catch (error){
            console.log("Something went wrong...")
          }
        }


    return (
        <>
            <tr onClick={handleRepoClick}>
                <th scope="row">{repoItem.name}</th>
                <td>{repoItem.language}</td>
                <td>{repoItem.description}</td>
                <td>{repoItem.stargazers_count}</td>
                <td>{repoItem.forks}</td>
                <td>{repoItem.created_at}</td>               
            </tr>

            {commits.length !== 0 && <CommitList key={0} commits={commits}/>}

        </>
    ) 
}

export default RepoItem;