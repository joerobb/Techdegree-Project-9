const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let binary = document.getElementById('binary').value;	
    const conversion = Number.parseInt(binary, 2);

    if (binary.length > 8) {
        alert("Please enter no more than 8 digits"); 
        return false; 
    }
     
    if (binary.match(/^[0-1]+$/g) === null) {
        
        alert('Please enter a value using only "0" or "1"');
    }
    else {
        document.getElementById('decimal').value = conversion;
    } 
})