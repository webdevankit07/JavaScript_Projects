const btnEl = document.getElementById('btn');
const jokeEL = document.getElementById('joke');

// const apiURL = ''
// const apiKey = `Ww1G/dKLnj08yxVFdVWaGA==oPwGMqpZ6Fy9aFep`;
// const options = {
//     method: "GET",
//     headers:{
//         "X-Api-Key": apiKey,
//     },
// }


btnEl.addEventListener('click', async() => {
    try{
        jokeEL.innerText = `Loading.`
        const loadingDot = setInterval(() => {
            jokeEL.innerText += `.`
        },500)

        const res = await fetch(`https://api.api-ninjas.com/v1/dadjokes?limit=1`, {
                    method: "GET",
                    headers: {
                        "X-Api-Key": "Ww1G/dKLnj08yxVFdVWaGA==oPwGMqpZ6Fy9aFep",
                    },
        });
        const data = await res.json();
        console.log(data);
        
        clearInterval(loadingDot);
        jokeEL.innerText = data[0].joke;
    }
    catch(err){
        console.log(err);
        jokeEL.innerText = `Something Error Occurred, try Again Later...`;
    }
})