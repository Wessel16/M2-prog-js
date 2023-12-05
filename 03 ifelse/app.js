class App
{
    runApplication()
    {
        console.log("Hello world");
        
        let title = document.getElementById("newstitle"); 
        let newsitem1 = document.getElementsByClassName("gamenews")[0]
        let newsitem2 = document.getElementsByClassName("gamenews")[1]
        console.log(title);

        let random = Math.random();
        console.log(random);
        if(random < 0.2)
        {
            title.style.backgroundColor = "#FF0000";
            newsitem1.style.backgroundColor = "#FF0000";
            newsitem2.style.backgroundColor = "#FF0000";
        }  
        else if(random >= 0.2 && random <= 0.6)
        {
            title.style.backgroundColor = "#0000ff";
            newsitem1.style.backgroundColor = "#0000ff";
            newsitem2.style.backgroundColor = "#0000ff";
        }
        else if(random > 0.6 && random <= 0.75)
        {
            title.style.backgroundColor = "#00ff00";
            newsitem1.style.backgroundColor = "#00ff00";
            newsitem2.style.backgroundColor = "#00ff00";
        }
        else
        {
            title.style.backgroundColor = "#6600cc";
            newsitem1.style.backgroundColor = "#6600cc";
            newsitem2.style.backgroundColor = "#6600cc";
        }
        


    }  
        
}

let app = new App();
app.runApplication();
