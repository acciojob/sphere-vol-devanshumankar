function volume_sphere() {
    //Write your code here
	const btn=document.querySelector("[type=submit]");
	btn.addEventListener("click",(e)=>{
		e.preventDefault();
		const radius=parseInt(document.querySelector("[name=radius]").value);
		const volume=document.querySelector("[name=volume]");
		
		if(radius<0){
			volume.value="NaN";
		}else{
			v=(4/3)*(22/7*Math.pow(radius,3));
			volume.value=v.toFixed(4);
		}
	})
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
