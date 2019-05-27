//init github
const github = new Github;


//init UI
const ui = new UI;

//console.log(github.getUser('tku207410415'));

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) =>{
    const userText =e.target.value;
    //console.log(userText);
    if(userText !== ''){

        github.getUser(userText)
        .then(data =>{
            //console.log(data);
            if(data.profile.message === 'Not Found'){
                ui.showAlert('User not found','alert alert-danger');
            }else{
                //show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }else{
        //Clear profile
        ui.clearProfile();
    }
});
