function ComeAlive() {
    var code = document.querySelectorAll("pre code")
    console.log("GG")
    for (var i = 0; i < code.length; i++) {
        if (i == 3 || i == 5) {
            continue
        }
        var div = document.createElement("div")
        div.innerText = "Run"
        div.onclick = Run
        div.classList.add("run")
        code[i].appendChild(div)
    }
}

function Run(e) {
    let {
        target
    } = e

    let script=target.parentNode.innerText.substring(0, target.parentNode.innerText.length - 3)
    // script=script.replace(/console.log\(/g,"mLog(")    

    let mConsole=document.createElement("p")
    target.appendChild(mConsole)

    // const mLog = (str)=>{
        // mConsole.innerHTML+=str+"<br>"
    // }
    

    target.classList.add("ing")
    eval(script)
    // console.log=log

}


function Bark() {
    console.log("汪汪")
}

function Bark_Delay() {
    setTimeout(function() {
        Bark()
    }, 1000)
}

function Bark_Delay_Callback(callBack) {
    setTimeout(function() {
        Bark()
        callBack()
    }, 1000)
}

function Bark_Delay_Promise() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            Bark()
            resolve("這個字串會傳進 then 裡面的 value")
        }, 1000)
    })
}

function Bark_Delay_3000() {
    return new Promise(function(res, rej) {
        setTimeout(function() {
            Bark()
            res(new Date().toLocaleTimeString())
        }, 3000)
    })
}

function Bark_Delay_5000() {
    return new Promise(function(res, rej) {
        setTimeout(function() {
            Bark()
            res(new Date().toLocaleTimeString())
        }, 5000)
    })
}