var SpeechRecongnition = window.webkitSpeechRecognition;

var recongnition = new SpeechRecongnition();
function start()
{
    document.getElementById("textbox").innerHTML = "";
    recongnition.start();
}

recongnition.onresult = function(event){
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);
    
    document.getElementById("textbox").innerHTML = Content;

    if(Content == "take my selfie")
    {
        speak()
        console.log("Your selfie in 5secs");
    }
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_line = "Your Image Will Be Taken In 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_line);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        web()
        save()
    },5000)
}
    Webcam.set({
      height:360,
      width:360,
      image_format:'png',
      png_quality:90
    });
camera=document.getElementById("camera");

function web()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="snap" src="'+data_uri+'">';
    })
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("snap").src;
    link.href = image;
    link.click();
}