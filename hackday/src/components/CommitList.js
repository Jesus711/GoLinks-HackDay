import CommitItem from "./CommitItem";



function CommitList( { commits }){
    
    let sorted_commits = [...commits];
    sorted_commits.sort((a, b) => {
        let aDate = new Date(a.commit.committer.date)
        let bDate = new Date(b.commit.committer.date)
        if (aDate > bDate){
            return -1;
        }

        if (aDate < bDate){
            return 1;
        }

        return 0
    })

    return (
        <div className="commit-table">
            <table className="table table-dark">
                <thead>
                    <tr>
                    <th scope="col">Commit Message</th>
                    <th scope="col">Commit Username</th>
                    <th scope="col">Commit Hash</th>
                    <th scope="col">Date Created</th>
                    </tr>
                </thead>
                <tbody>
                    {sorted_commits.map(commit => {
                        return (
                        <CommitItem key={commit.id} commitItem={commit}/>
                        )
                    })}
                </tbody>
            </table>
        </div>
    ) 
}

export default CommitList;