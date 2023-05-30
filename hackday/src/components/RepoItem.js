import '../App.css'


function RepoItem( { repoItem}){

    function handleRepoClick() {

        console.log(repoItem)
        try { 
            let commit_url = repoItem["commits_url"]
            console.log(commit_url)
            commit_url = commit_url.substring(0, commit_url.length - 6)

            let result = fetch(commit_url)
            .then(res => {
                return res.json()
            })
      
            console.log(result)  
        }
        catch (error) {
          console.log("Something Went Wrong")
        }
    }


    return (
        <>
            <tr>
                <th scope="row">{repoItem.name}</th>
                <td>{repoItem.language}</td>
                <td>{repoItem.description}</td>
                <td>{repoItem.stargazers_count}</td>
                <td>{repoItem.forks}</td>
                <td>{repoItem.created_at}</td>               
            </tr>

        </>
    ) 
}

export default RepoItem;