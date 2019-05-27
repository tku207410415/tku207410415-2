class Github{
    constructor(){
        this.client_id = 'ba0ab3d81228d4157889';
        this.client_secret = 'd690c2f309c0e87f8e8ca3b0816c432d9bee1a64';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        console.log(profile);

        return{
            profile
        }
    }
}


/*
{
  "login": "tku207410415",
  "id": 43173934,
  "node_id": "MDQ6VXNlcjQzMTczOTM0",
  "avatar_url": "https://avatars3.githubusercontent.com/u/43173934?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/tku207410415",
  "html_url": "https://github.com/tku207410415",
  "followers_url": "https://api.github.com/users/tku207410415/followers",
  "following_url": "https://api.github.com/users/tku207410415/following{/other_user}",
  "gists_url": "https://api.github.com/users/tku207410415/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/tku207410415/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/tku207410415/subscriptions",
  "organizations_url": "https://api.github.com/users/tku207410415/orgs",
  "repos_url": "https://api.github.com/users/tku207410415/repos",
  "events_url": "https://api.github.com/users/tku207410415/events{/privacy}",
  "received_events_url": "https://api.github.com/users/tku207410415/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2018-09-11T12:20:20Z",
  "updated_at": "2019-05-27T10:24:32Z"
}

*/