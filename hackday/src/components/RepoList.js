import RepoItem from './RepoItem.js'
import '../App.css'


function RepoList({ search , repos }) {

    let sorted_repos = [...repos];
    sorted_repos.sort((a, b) => {
        if (a.stargazers_count > b.stargazers_count){
            return -1;
        }

        if (a.stargazers_count < b.stargazers_count){
            return 1;
        }

        return 0
    })



    return (
        <>
            <h3>Search Results for "{search}":</h3>
            <div className="table-display">
            <table className="table table-dark">
                <thead>
                    <tr>
                    <th scope="col">Repo Name</th>
                    <th scope="col">Language</th>
                    <th scope="col">Description</th>
                    <th scope="col">Star Count</th>
                    <th scope="col">Fork Count</th>
                    <th scope="col">Date Created</th>
                    </tr>
                </thead>
                <tbody>
                    {sorted_repos.map(repo => {
                        return (
                        <RepoItem key={repo.id} repoItem={repo}/>
                        )
                    })}
                </tbody>
                </table>
            </div>


        </>


    )
}

export default RepoList;