import { useState } from 'react';
import './App.css';
import Repolist from './components/RepoList';
import { Octokit } from "@octokit/core";

function App() {
  const [search, setSearch] = useState('');
  const [repoList, setRepoList] = useState([]);

    async function handleSearch(e) {
      e.preventDefault()

      try {
        const octokit = new Octokit({
          auth: 'token'
        })
  
        const response = await octokit.request(`GET /orgs/${search}/repos`, {
        });
  
        console.log(response)
        setRepoList(response['data'])
      } catch (error){
        console.log("Something went wrong...")
      }
    }

  return (
    <div>
      <div className="app-title">Search for a GitHub organization</div>
      <div>
        <div>
          <form className="search-form">
            <div>
              <label htmlFor="githubOrgSearch" hidden>
                Search for GitHub organization
              </label>
              <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  className="form-control form-control-lg"
                  id="githubOrgSearch"
                  aria-describedby="githubOrgSearch"
                  placeholder="Search for a GitHub Organization"
                />
            </div>
            <button type="submit" id="search-button" className="btn btn-primary btn-lg" onClick={handleSearch}>
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="repoList">
      {repoList.length !== 0 ? <Repolist key={0} search={search} repos={repoList}/> : null}
      </div>
    </div>
  );
}

export default App;
