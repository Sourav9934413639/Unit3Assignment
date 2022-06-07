var api_key="f010920e";

let container=document.getElementById("container");
let gif="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhAQEhIVFhUVGBYXFhcXFRcYFxgaFRYYFhgWGhYYHSggGhooHhgWJTEhJSorLi4vGB8zODMsNygtLisBCgoKDg0OGBAPGi0lHSUvLS0tLSstNS0tLS0tLS0tLS0rLS0vLS8tLS0tLS0tLS0tLS0rLy0rLS0tNS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCBAcDAf/EAEAQAAIBAgMFBAYGCQUBAQAAAAECAAMRBAUhBhIxQVEiYXGBExQykaGxBxZCksHSIzRSU3Oy0eHwYnKCk6JjJP/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgMF/8QAIhEBAQEAAQQBBQEAAAAAAAAAAAERAhIhMUEDEyJCUWEy/9oADAMBAAIRAxEAPwDqMRE6PFIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAn0W5z5EDJiJjOcZ7tRXau/oarLTXsru21txbhzN/K02dlcdjMTXVWruUTtPw1A4Lw5n4Xhnrm4v0RENEREBMXqKOJA8SBPLGYynRUvUcKo5n5AcSe4SoZptdRd7JQ9KLED0gFibg3C2J5d0Jbi41cQqrvE3Glt0Fr36Bb3mOFxlOqCyG4HOxHzAlLGd5iwXcwoVQQVAouBp58IxO1WMVWWvhgAwIvuunEW4m4hOpeVqKdAQbdCJ6IhPCVjJtocDVa4RaNQ34qovfkHGnvtLQtUgWFoa42Xy9Gw+mk8CJ6+nbumL1SeMN3p9MIieGPxa0ab1W4ICT39B4k6Qw94nL22rxpJPpbXJ0CrYd3CW3YnEYnELUrVqhZPZQWUXI9o6DwHvhmcpVjiZMsxhoiIgIiICIiAiIgIiICIiB9DWi8+RAREQEgtsc09XoEKbPU7K9QPtN7viRJ2cr2pzT1muzA9hewngDq3mb/AAhnlciInTtjss9Xw4LCz1O23UD7K+74kyk7K5Z6xiFBHYTtv4Aiw8zbyvOpwzwnsiIh0JFbQZ0mEp7x7Ttoi9T1PRRJKtVVFZ2NlUEk9ABcyiZNhjmWKqYiqP0SWsp/8U/Dmf7wlrLLckr5gwxOKdgh9kDQkdFH2V7+fxlxwGW0aAtSpqveB2j4txM24gkwg9IiFQOcbKYeuCVHo3/aUaH/AHLwPwMgstzbEZdUGGxVzT5HjYftKea9Ry+Evcjs9ypMVSam2jcUb9luR8OsJZ7jfRwwDAgggEEcCDqDMpTthsxdWqYKroyE7l+Vj21/EecuMLLpKP8ASDmlymFU8LO/j9lfx90uGYYxaFN6r8EF/HoPEmwnIcViGqu9RzdnJY+JhjnexhMO1V0pr7TkKPM8fCdfwGFWhTSknBAB49T5m585Tvo+yy5fEsNBdE8ftH8PMy8QcJ219vPkRDZERAREQEREBERAREQEREBERAREQIDbPNPQUCqmz1bqvcPtH3aec5nJbafNPWa7uD2F7KeAPHzOvun3ZfK/WcQqkdhe0/gOXmbD3w5crtXbY3K/QYcMws9Szt1A+yvu18zPbarM6mFoCpTtvb6r2hcWIP8ASTErX0gfqo/iJ8mh0vaK99dsX0p/dP5pfcsrmpRo1GtvPTRjbhdlBNu7WcdM67kX6thv4VL+QQzwttRe3mL9HhSo41GCeWrH5fGbeymD9DhaItqw328X1+Vh5SG+ktSKeHuPtP8AyiWvCgBEtw3V+Qhr8nrERCkREBERAo21I9Wx2HxK6b+6T37pCv8A+SJeZTPpJA3cMed6nyT+0s2Lxq0KBrPwVAfEkAAeZIEMzzVS+kHNLsuFU6LZ38T7K+Q18xKnhsO1R0pqLsxCjxMYmu1R2qMbsxLHxMtn0f5ZdnxLDRbonifabyGnmYc/9Vcsvwa0KaUl4ILeJ4k+ZufOV7anaSrhKq00VCCobtA3vcjke6Wmc9+kP9Yp/wAMfzNDpy7Ts2sr2xr1a1KkyUwHYKbBr6nlrLxOSbP/AK1h/wCIvznW4OF2ERENEREBERAREQEREBE+q1uV59dr8oVjERCEhdscW1LC1CuhayX6BjY/C8mpD7WYCpiMOadIXYsptcDQHXUwXw5ZJLKM8rYUMKW52iCSVudOAvfhx983Pqfjv3a/9if1nz6oY392v/Yn9Yccr1+umM60/uf3mnmm0WIxKejqFN24bRbG4vzv3z3GyGN/dr/2J/Wa2ZbP4nDp6SqgC3C3DKdTe2gPdB9yLk7htrcXTRKalN1FCi6a2UWGt5BSRpZJiHVWVRZgCO0vAi45wm4mM8xtTFYCjWqWLCsw7IsAN08vdLhs7ihVw1B+e6AfFeyflILJcGvq9LC1+yWerfgdGptY3Gl7zW2SxjYStUwNfS7dknhv6fBhYjy6w3L31eIiIdCIiAiJrZjjUoU3qubKo8yeSjvMCl7f1TVr0aC6lFJPi9j8lB8567f4xrYeiPZK757yNB7tffPLZ3DPiXxWOqDgtTd/3FCNO5V085tbX5PiMQ1BqVMsBTAJuosb35kQ5+rVHk/gNrK9CmlJEpbqiwurXPMk9riTPD6rY79wfvJ+affqtjv3B+8n5oZmxvfXjFfs0vut+aQ+cZrUxTipUCghd3sggWuTzJ6za+q2O/cH7yfmmhj8vq0GCVU3WIuBcHThyJ6QW32kdm8GCy1r6o62HK/pKa6/fJ/4mb+J21xSsy7tI7pIvutrb/lIDLa1UNuUvaqdm2mpPD2tAe+brbLY7X9AfvJ+aRrftmeXUaRJVWPMA+8XmUxoFgiqeSgW8hMpXUiIhCIiAiIgIiICIiAmNSoFBJNgJlNDOK4RVvzPloDCW5Gz62nZ7Q7XD/OUyp1lY2H+akfhK966vEADyOnheQm0mbUApo1a5pX3GDAkX4E2t0vY+MMced5XFk2j2jTDWpChVql1PaTUKb2sZ4piLoGJsNwE3NgLtzJ05yt5XjKbUi1HEmtukDT2r7yix4cmJ8AZMU8fhxQ9FWqUxvqwZahClhuaaE8L3ki/LO0atLBYikxrPindAGO5qEUMbk+1bdA/CeW1mavUVMIKblf0b+lAuvA8x4zLCZ9hMBTNKpvPTAampXtiwVWZLlr2G8RY9Jr5ZmGFdHp0CygHtKWvYMjdr2m7I9GBbTlJtjfTL39K9QwlSpvCmpcryHja8vGTuFp0hWBTdCqRfgbBQPfaVJczwK4gVExYQ/oxui9jbd0ItzsLycxhp1C16hU3V7BwOYZdOGlr8I3uxy+PIksWy+kpqDzYgc7brC9vOfc5yf16mGTTEUxp/wDRRwBPUcj/AIIapSRqu+ldgybwvvbw9nesAb3voNOZk3gMzRClQm3C4PfxEsuuWdNytfItqih9Xxl1dTu75Hwccj/q4dest1NwwDKQQeBBuD5yvZ9jMrxQ/SvZgNHUWcf1HcZTamIOFb/8uKLKTyVl96nsmV23P66rMlQmcyp7ZYwfaQ+KD8LTDEbW46poa24P9IC/EC8HXHQs3zOjhV3qrgdFGrHwX8eEpZOIzaqNClBD5D81Q/C/v88py3Bs3pMTiTUY6lVvr/udu0fhLrRzbCKoROyoGgVNB7oZ3fLJ8MlLDvTQWVabgD/idfGe1Gum6o3hew5900cVm1MowS5NukisLXJaxPGFvP8ASyesp1nk+MHgSbC54/3lb2gWhWFMGrTV6ToyN6TdZDuMTry4DTuF5pZttLgalIUa+8KikPorAq26WBDLw7J5SVrjepdqNM8Sx8JRPpD/AFin/DH8zTco57RFFHFYimUUbxYga76bpJ1uCh79RIbJMdSqOaZxQxG8N3cLBmsWA0N72F5WbtlaWz/61h/4i/OdbnPaVHCU3pVw24Qd4KSN0kHhY628Jbaee0yBcHvtw8YZ48pG7i2IAtw6/hNQsesyOc0DzP3Zp1MwpX0Jt4SVrqiWwbluzzHynvIOlmaKQbn3ScvEallIiJVIiICIiAiIgJq5ll1PE02pVBdTz5qRwZTyIm1EDnByv1AmnWfeFyaZsd0i/EW+1wv0m6MwS7J2eyLnoPOW3NcrpYlPR1RpxBBsVNrXBnNq+zeL9OmH3SBULWe2m6p7TE8tLG3eOsOXL49qXxGdUUuCy3HS5+AnzD5xSqaKwOhY6HQDqfwmltjkaYZ6e4D6NlFrm53lFmuep0PmZhhdl8TUSkyJo4LamwUXstyevHTujE6b4SdLM6TKH3lAN7X09njoZrNtDhxbtDXop+Okj8bs1iqVZaQpFy40dLlOV7k2C2537pG5jlb0GZKiFW42PDxB5g9ZMXM8rRhs2o1CApBJ3jax0C2uT04zGvm1BN27L2uBAJ4eA0lToUyCqKCzuQABxJPITbo5fUqMypTLOgYkW1G7x89LeMYmLDRzygQWUrpodCCfLiZhUzXDvfeAIPHstrPlHYnFFFa9NWIJ3CTcaaAkC1/lInJMoq4rErh3UoKWtXkQAdR4nQD3yn0+7Tx5VHUrc021BII4GxAJ42mGKrKtgtiTr10nRttckWthf0agNQBZAB9kDtIB4fECU3ZHZdsYRUe60AdTwLn9le7qeXyOkmMMgpNi6q0VWxI7RA7KqOJPwHiRLd9RKJKk1alha4AQA+driT+Ayqhhy5o01Qvuhrc93QTdhpzjbDZxcJTFakxKlwpVuK3BN94cRcAecgKeCrstBxSO7XYpTI5sDu2PTn7j0nVs+y0YqhUoXtvWsehBBv8ACbeHw6U0SmosqABR0AFhDPTFExuynqyirUqbygjeAUgC/Ak34XmVHH0QEtbtmwvx424W0EvdakrqyMLhgQQeYPGVWtsdSfENoVoejFt0m+/qvE9LBu8mGOXx6jq2Lwq6uKetxwHnfSayZxhHsAAdQANzrw5cJE5ls/iMNUqIys6BSwqAHdK3tc9DqLiZ5TkVWulR6S33Sot1LEaXPQany6xiZZ2TYxtC7p2BuWLXACi/lbjPCrmmEQkHcuDY2UH5D3zZwewbuL1qir0CjePmdB85A55kNXDPaoLjk4B3W8TyPd85MXLPKUXO8K3TTquupAsLjXjNmtjqNINfdG7a4A117hKrlOWtWqpTXixsO4cSx8BczezvKWoV2oWLXtuaasG9nQc+XiIxKmKOeYZiFBF+8ED3kTNc0pVSECszHgFUk6dLCYYnYqqlH0oYNUC3amF1/wBqtfUyzbLZCMIm81jVb2j+yP2B+J5mU+ntVvL8qpY+tvq9RVpWJGttWHZ16gNedAnnSoIm9uqBvHeawtcnS579J6Q68ZkIiIUiIgIiICIiAiIgIiIGhnGVJikVH4Kyt7jqPMXHnN4ACwGgHKfYgJXdtMoOIpB0W9SmdAOLKeI+R98sUQWaqey2ypw9V61WzMtlpd11G83jckDwPWWXD4OnTao6KA1Q7znqbf57zPeIMJgtJQWYKAzWubam3C552vM4gJjTphQFUAACwAFgB0AmUQEREBERAREQMK1JXVkYXDAgjuIsZrZRly4aklFdd3iebE8WM3IgJq5pglxFKpSbgw0PQ8QfI2m1ECr7F5G1APVqi1QkoB0VTYnzI9wHWWGpg6bOlVlBdAQrdN7j/neZ7xBJhERA9Etzn1iDznlED6wnyIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgf/Z";
async function getData(){
    var movie=document.getElementById("searchMovie").value;
    const url="https://www.omdbapi.com/?s="+movie+"&apikey="+api_key;
    document.getElementById("results").innerText=`Showing all results of '${movie}'`;
        try{
        let res=await fetch(url);
        let users=await res.json();
        container.innerHTML=null;
        recommend.innerHTML=null;
        append(users.Search);
        console.log(users.Search)
        }catch(err){
          container.innerHTML=null;
          let pic=document.createElement("img");
          pic.setAttribute("src",gif);
          container.append(pic);
          document.getElementById("sortedResults").innerHTML=null;
        }
}
function append(data){
    
    data.forEach(function(ele){
        let imdbID=ele.imdbID;
        getDataByID(ele,imdbID);
        let cards=document.createElement("div");
        cards.setAttribute("id","cards");
        let img_box=document.createElement("div");
        img_box.setAttribute("id","img_box");
        let image=document.createElement("img");
        image.src=ele.Poster;
        img_box.append(image);
        let center=document.createElement("div");
        center.setAttribute("id","center");
        let title=document.createElement("p");
        title.innerText=ele.Title;
        let year=document.createElement("p");
        year.innerText=ele.Year;
        center.append(title,year);
        cards.append(img_box,center);
        container.append(cards);
        cards.style.cursor="pointer";
    })
}
async function getDataByID(ele,imdbID){
        const url2=`http://www.omdbapi.com/?apikey=${api_key}&i=${imdbID}`;
        let res=await fetch(url2);
        let users=await res.json();
        let count=0;
        if(users.imdbRating>4.5)
        {
           appendRecommend(ele);
           count++;
        }
        if(count>0)
        {
            document.getElementById("sortedResults").innerText="Recommended Movies";
        }
}
function appendRecommend(ele){
      
        let recommend=document.getElementById("recommend");
        let rcards=document.createElement("div");
        rcards.setAttribute("id","rcards");
        let rimg_box=document.createElement("div");
        rimg_box.setAttribute("id","rimg_box");
        let rimage=document.createElement("img");
        rimage.src=ele.Poster;
        rimg_box.append(rimage);
        let rcenter=document.createElement("div");
        rcenter.setAttribute("id","rcenter");
        let rtitle=document.createElement("p");
        rtitle.innerText=ele.Title;
        let ryear=document.createElement("p");
        ryear.innerText=ele.Year;
        rcenter.append(rtitle,ryear);
        rcards.append(rimg_box,rcenter);
        recommend.append(rcards);
        rcards.style.cursor="pointer";
}
