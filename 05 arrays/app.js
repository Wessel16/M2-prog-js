class App
{
    runApplication()
    {
        console.log("hello world!");
        //code gaat hier!
        
        let array = ["Drake", "Travis scott", "pop smoke"]
        
        console.log(array)

        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            console.log(element + [i])
        }   
        let array2 = [2, 4, 6, 8, 10 ]
        
        console.log(array2)

        for (let i = 0; i < array2.length; i++) {
            const element = array2[i];
            console.log(element)
        }
    }
}

let app = new App();
app.runApplication();