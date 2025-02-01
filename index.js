let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    const text_speak= new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}


function wishMe(){
    let day= new Date()
    let hours = day.getHours()
    console.log(hours)
    if(hours>=0 && hours<12){
        speak("Good Morning sir")
    }
    else if(hours>12  && hours<4){
        speak("Good Afternoon sir ")
    } else
      speak("Good Evening sir")
}

window.addEventListener('load',()=>{
    wishMe()
})


let speechRecognition = window.SpeechRecognition  || window.webkitSpeechRecognition
recognition = new speechRecognition()
recognition.onresult=(event)=>{
    
   let currentIndex= event.resultIndex

   let transcript= event.results[currentIndex][0].transcript
content.innerText= transcript
    // console.log(event)
    
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})


function takeCommand(message){
    btn.style.display="flex"
     voice.style.display="none"

    if(message.includes("hello")|| message.includes("hey assistant")){
        speak("hello sir, what can I help you ? ")
    } else if(message.includes("who are you assistant")){
        speak("Hello, I am a virtual assistant created by alok")  
        
 } else if(message.includes("open youtube")){
    speak("openning youtube...")
    window.open("https://www.youtube.com/")
 }
 else if(message.includes("open instagram")){
    speak("openning instagram...")
    window.open("https://www.instagram.com/")
 }
 else if(message.includes("open facebook")){
    speak("openning facebook...")
    window.open("https://www.facebook.com/")
 }
 else if(message.includes("open google")){
    speak("openning google...")
    window.open("https://www.google.co.in/")
}
else if(message.includes("open whatsapp")){
    speak("openning whatsapp...")
    window.open("https://web.whatsapp.com/")
}
else if(message.includes("open calculator")){
    speak("openning calculator...")
    window.open("calculator://")
    
}

else if(message.includes("open camera")){
    speak("openning camera...")
    window.open("Camera://")
    
}
else if(message.includes("time")){
  let time = new Date().toLocaleDateString(undefined,{hour:"numeric",minute:"numeric"})
    speak(time)
}
else if(message.includes("date")){
    let date = new Date().toLocaleDateString(undefined,{day:"numeric",month:"short"})
      speak(date)
  }

        else {
         let finalText= "This is what I found on internet regarding" + message.replace("shipra","")|| message.replace("shifra","")
            speak(finalText)
            window.open(`https://www.google.com/search?q=${message.replace("shifra","")}`,"_blank")
        
}
}
