import '../App.css';
function CommitItem( {commitItem }){

    return (
        <>
            <tr>
                <th scope="row">{commitItem.commit.message}</th>
                <td>{commitItem.commit.author.name}</td>
                <td>{commitItem.sha}</td>
                <td>{commitItem.commit.committer.date}</td>
            </tr>

        </>
    ) 
}

export default CommitItem;