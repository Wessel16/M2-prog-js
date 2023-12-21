function heeftEenResultaat()
{
    let resultaat = 1
    return resultaat
}
    let hetResultaat = heeftEenResultaat() //opvangen
    console.log(hetResultaat) //en gebruiken via de variable
    console.log(heeftEenResultaat()) //direct gebruiken

    let x = 9
    let a = 3 
    let b = 4
    let c = 89

    let y = (a*(x*x) ) + (b*x) +c 
    console.log(y)

    function ax2bcWiskunde(x,a,b,c)
    {
        let y = (a*(x*x) )+ (b*x) +c
        return y 
    }

    let y1 = ax2bcWiskunde(9,3,4,89)
    console.log(y1)

    let y2 = ax2bcWiskunde(3,6,5,45)
    console.log(y2)

    let y3 = ax2bcWiskunde(7,1,2,13)    
    console.log(y3)

    function eenNaampje(u,h,l)
    {
        let logY = Math.log(l) + h + Math.pow(u,2)
        console.log(logY)
    }

    eenNaampje(9,8,15)

    function argumentsAreHandy(shoutout)
{
    console.log("do you want to give a shoutout?")
    console.log(shoutout)
}
argumentsAreHandy("kaas")
argumentsAreHandy("kaas")
argumentsAreHandy("kaas")

function superMooieGlobalFunction()
{
    console.log("ik ben global")
    console.log("dus je mag mij overal aanroepen")
}

superMooieGlobalFunction()
superMooieGlobalFunction()
superMooieGlobalFunction()

class App {
    runApplication() {
        console.log("hello world!")
        superMooieGlobalFunction()
    }

    newClassFunction() {
        console.log("hello world in de nieuwClassFunction")
    }

    anotherFunctionWithArguments(aArgument) {
        console.log("kom maar met je argument")
        console.log("hier:")
        console.log(aArgument)
    }
}

    let app = new App()
    
    app.runApplication()
    app.newClassFunction()
    app.anotherFunctionWithArguments("mijn argument is iets...")



    class App2 
    {
        mario()
        {
            console.log("MARIO!!")
        }
        bwah()
        {
            return "BWAHAHA!!!" 
             
        }
        optellen(Getal1, Getal2)
        {
            return Getal1 + Getal2 
        }
        klant()
        {
            console.log("ik wil kaas")
        }
    }
    
        let class2 = new App2()
        class2.mario()
        let bwah = class2.bwah()
        let Getal3 = class2.optellen(1,2)
        class2.klant()

        console.log(Getal3)
        console.log(bwah)
    
