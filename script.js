const message =
`إذا كنتِ تقرئين هذه الرسالة...

فهذا يعني أن هناك شخصًا يهتم بك كثيرًا.

قد تكون الأيام ثقيلة الآن،
وقد يبدو كل شيء متعبًا...

لكن تذكري دائمًا...

حتى أطول ليلة...
يعقبها فجر.

ابتسامتك تستحق أن تعود.

وأتمنى من كل قلبي
أن يمنحك الله راحة وسكينة
تعوضك عن كل لحظة صعبة.

اعتني بنفسك...
فأنتِ تستحقين كل الخير. ❤️`;

function openLetter(){

document.querySelector(".container").style.display="none";

document.getElementById("letter").style.display="block";

typeWriter();

}

let i=0;

function typeWriter(){

if(i<message.length){

document.getElementById("typing").innerHTML+=message.charAt(i);

i++;

setTimeout(typeWriter,45);

}

}

function nextPage(){

alert("الصفحة التالية ستكون معرض الصور والرسائل الجميلة ❤️");

}
