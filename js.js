var aContent=[
	"新年到，新气象，要开始做一个比上一年更好的自己~~~~~",
	"世上再找不到另一个我，生的再平凡，也是限量版~~~~~",
	"不管天气怎样，自己的世界总要一片晴朗~~~~~",
	"生活即便不完美，但它依然拥有美~~~~~",
	"做好眼前事，珍惜身边人，走好脚下路~~~~~~",
	"无论如何不要舍弃你的快乐和微笑~~~~~",
	"人生路漫漫总有遗憾，好在路边不乏美好~~~~~",
	"再烦，也别忘记微笑；再急，也要注意语气；再苦，也要继续坚持；再累，也要爱自己！~~~~~~",
	"人生是一场荒芜的旅行，苦乐在心，冷暖自知~~~~~",
	"现在事，现在心，随缘即可；未来事，未来心，何须劳心~~~~~",
	"除了生死都不过是小事，何苦难为自己~~~~~~",
	"美好的留在心底，遗憾的随风散去，活在当下，且行且珍惜~~~~~~"
];
var img=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg','img/10.jpg','img/11.jpg','img/12.jpg'];

window.onload=function(){
    var oCalender=document.getElementById('calender');
    var oli=oCalender.getElementsByTagName('ul')[0].getElementsByTagName('li');
    var i=0;
    for (i = 0; i < oli.length; i++) {
        oli[i].onmouseover=select;    
    }
};

function select(){
    var oCalender=document.getElementById('calender');
    var oli=oCalender.getElementsByTagName('ul')[0].getElementsByTagName('li');
    var i=0;
	var oTextContent=oCalender.getElementsByTagName('div')[0];
	var tInnerHTML='';
    
    for(i=0;i<oli.length;i++){
    	oli[i].className='';
    }
    for(i=0;i<oli.length;i++){
    	if(oli[i]===this){
    		oli[i].className='active';
            oli[i].background=img[i].values;
    		tInnerHTML="<h2>"+(i+1)+"月活动</h2>";
    		tInnerHTML+="<p>"+aContent[i]+"</p>";
            oTextContent.innerHTML=tInnerHTML;
    	}
    }
}