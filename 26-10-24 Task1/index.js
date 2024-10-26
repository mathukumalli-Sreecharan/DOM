const url = 'https://jokes-always.p.rapidapi.com/common';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7864ea4f84msh73df6b56c064f83p1eecebjsn5d0efcd9aa7d',
		'x-rapidapi-host': 'jokes-always.p.rapidapi.com'
	}
};
let div=document.createElement("div")
async function jokeDay(url,options){
try {
	const response = await fetch(url, options);
	const result = await response.json();
	for(let key in result){
		let res=result[key]
		for(i=0;i<res.length;i++){
			if("?"==res[i]){
				let p1= document.createElement("p")
				let p2= document.createElement("p")
				p1.innerText=res.slice(0,i+1)
				p2.innerText=res.slice(i+1,res.length-1)
				div.append(p1,p2)
			}
		}
	} document.body.append(div)
} catch (error) {
	console.error(error);
}
}
jokeDay(url,options)
