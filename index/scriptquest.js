function regis(event){
    event.preventDefault();
    let soal1 = document.getElementById('soal1').value;
    let soal2 = document.getElementById('soal2').value;
    let soal3 = document.getElementById('soal3').value;
    let soal4 = document.getElementById('soal4').value;
    let soal5 = document.getElementById('soal5').value;
    let soal6 = document.getElementById('soal6').value;

    console.log('soal1', soal1);
    console.log('soal2', soal2);
    console.log('soal3', soal3);
    console.log('soal4', soal4);
    console.log('soal5', soal5);
    console.log('soal6', soal6);

    document.getElementById('errText').innerText = "";
    document.getElementById('errText2').innerText = "";
    document.getElementById('errText3').innerText = "";
    document.getElementById('errText4').innerText = "";
    document.getElementById('errText5').innerText = "";
    document.getElementById('errText6').innerText = "";

    if(soal1.length === 0 || soal1.length === null){
        document.getElementById('errText').innerText = "*This field must be filled";
    }
    if(soal2.length === 0 || soal2.length === null){
        document.getElementById('errText2').innerText = "*This field must be filled";
    }
    if(soal3.length === 0 || soal3.length === null){
        document.getElementById('errText3').innerText = "*This field must be filled";
    }
    if(soal4.length === 0 || soal4.length === null){
        document.getElementById('errText4').innerText = "*This field must be filled";
    }
    if(soal5.length === 0 || soal5.length === null){
        document.getElementById('errText5').innerText = "*This field must be filled";
    }
    if(soal6.length === 0 || soal6.length === null){
        document.getElementById('errText6').innerText = "*This field must be filled";
    }
}

document.getElementById('btn').addEventListener('click', regis);