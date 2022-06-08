const api_key="8f29102f29dba4fc0e1eab7b4322f533";

async function getDataForTrends(){
    const url= `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
   let res=await fetch(url);
   let data=res.json();
   return data;
   
}
async function getMovies()
{
   let all_movies= await getDataForTrends();
   appendTrend(all_movies.results);
   console.log(all_movies.results);
}
getMovies();
let appendTrend=(data)=>{
    data.forEach((ele)=>{
        if(ele.title!=undefined)
        {
            
            let tcard=document.createElement("div");
            
            let th3=document.createElement("h3");
            th3.style.backgroundColor="darkblue";
           th3.innerText=ele.title;
           let tdate=document.createElement("h3");
           
           tdate.innerText=`Release Date: ${ele.release_date}`;
           let trating=document.createElement("h3");
           
           trating.innerText=`Ratings: ${ele.vote_average}`;
           let tbox=document.createElement("div");
           tbox.setAttribute("id","img_tbox");
           let tposter=document.createElement("img");
           tposter.src="https://image.tmdb.org/t/p/original"+ele.poster_path;
           tposter.setAttribute("id","tposter");
           tbox.append(tposter);
           
           tcard.append(th3,tdate,trating,tbox);
            console.log(ele.title);
            document.getElementById("bag").append(tcard);
        }
        else if(ele.name!=undefined)
        {
            
            let tcard=document.createElement("div");
            
            let th3=document.createElement("h3");
            th3.innerText=ele.name;
            let tdate=document.createElement("h3");
           
           tdate.innerText=`Release Date: ${ele.release_date}`;
           let trating=document.createElement("h3");
           
           trating.innerText=`Ratings: ${ele.vote_average}`;
            let tbox=document.createElement("div");
           tbox.setAttribute("id","img_tbox");
           let tposter=document.createElement("img");
           tposter.src=ele.poster_path;
           tposter.setAttribute("id","tposter")
           tbox.append(tposter);
           tcard.append(th3,tdate,trating,tbox);
            console.log(ele.name);
           document.getElementById("bag").append(tcard);
        }
    })
    
   
}