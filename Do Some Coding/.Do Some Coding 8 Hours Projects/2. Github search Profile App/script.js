const url = 'https://api.github.com/users';
const inputEl =  document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchBtn')
const profileContainer = document.querySelector('#profileContainer');
const loading = document.querySelector('#loading');




const generateProfile = (profile) =>{
    return (
        `<div class="profile-box">
        <div class="top-section flex">
            <div class="left flex">
                <div class="avatar">
                    <img src="${profile.avatar_url}"  alt="avatar" />
                </div>
                <div class="self">
                    <h1>${profile.name}</h1>
                    <h1>@${profile.login}</h1> 
                </div>
            </div>
            <a href="${profile.html_url}" target="_blank>
            <button class="btn">Check Profile</button>
            </a>
        </div>


        <div class="about">
            <h2>About</h2>
            <p>${profile.bio}</p>
        </div>


        <div class="status flex">
            <div class="status-item">
                <h3>Followers</h3>
                <p>${profile.followers}</p>
            </div>
            <div class="status-item">
                <h3>Followings</h3>
                <p>${profile.following}</p>
            </div>
            <div class="status-item">
                <h3>Repos</h3>
                <p>${profile.public_repos}</p>
            </div>
        </div>
    </div>     `

    )
}






let fetchProfile = async () =>{
    const username = inputEl.value;

    loading.innerText = "loading..."
    loading.style.color = "black";



    try{
        const res = await fetch(`${url}/${username}`);
        const profile = await res.json();


        if(profile.login){
            loading.innerText = "";
            profileContainer.innerHTML = generateProfile(profile);
        }else{
            profileContainer.innerHTML ="";
            loading.innerText ='Profile Not Found...';
            loading.style.color = "red";
        }


    }catch(error){
        console.log(error);
    }
}

searchBtn.addEventListener('click', fetchProfile);