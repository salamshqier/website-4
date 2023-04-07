let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let picture = document.getElementById ("pi");

arabic.onclick = () =>{
setlanguage("arabic");
};   



english.onclick = () =>{
setlanguage("english");
}; 

function setlanguage(getlanguage){

if(getlanguage === "arabic"){
pi.innerHTML = "الصور";
vi.innerHTML="الفيديوهات";
so.innerHTML="الأسعار";
lo.innerHTML ="لولو بيوتي";
no.innerHTML ="لولو بيوتي هي شركة عالمية تبيع مستحضرات التجميل التي يتراوح سعرها من 50 دولار إلى 300 دولار وأهم ما يميز شركتنا عن غيرها أن جميع مستحضرات التجميل وردية اللون";
}
else if(getlanguage === "english"){
pi.innerHTML = "pictures";
vi.innerHTML ="videos";
so.innerHTML="prices";
lo.innerHTML="Lulu Beauty";
no.innerHTML ="Lulu Beauty is a global company that sells cosmetics that range in price from $50 to $300. The most important thing that distinguishes our company from others is that all cosmetics are pink.";
}  }