//https://teachablemachine.withgoogle.com/models/sJKrhCJHk/model.json
var bark = 0;
var meow = 0;
var roar = 0;
var moo = 0;
var bn = 0;

function classify(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/sJKrhCJHk/model.json", model_ready);
}

function model_ready(){
    classifier.classify(got_result);
}

function got_result(error, result){
    console.log("got Result");
    if(error){
        console.error(error);
    }
    else{
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);

        console.log(result);
        document.getElementById("result_label").innerHTML = "Detected voice is "+result[0].label;
        if(result[0].label == "Background Noise"){
            bn = bn + 1;
            document.getElementById("numberOfTimes1").innerHTML = "Background noise - " + bn;
        }
        if(result[0].label == "barking"){
            bark = bark + 1;
            document.getElementById("numberOfTimes2").innerHTML = "Barking - " + bark;
        }
        if(result[0].label == "meowing"){
            meow = meow + 1;
            document.getElementById("numberOfTimes3").innerHTML = "Meowing - " + meow;
        }
        if(result[0].label == "mooing"){
            moo = moo + 1;
            document.getElementById("numberOfTimes4").innerHTML = "Mooing - " + moo;
        }
        if(result[0].label == "roar"){
            roar = roar + 1;
            document.getElementById("numberOfTimes5").innerHTML = "Roaring - " + roar;
        }
        
        document.getClassById("h").style.color = "rgb(r,g,b)";
    }
}


