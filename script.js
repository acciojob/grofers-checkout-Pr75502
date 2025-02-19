const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices=document.querySelectorAll(".price")
	let h1 = document.createElement("h1")
	h1.id="ans"
	
	let total=0;
	prices.forEach(price=>{
		total += parseInt(price.innerText)
	})
	h1.textContent=`Total Price= ${total}`
	document.body.append(h1)
	
  
};

getSumBtn.addEventListener("click", getSum);

