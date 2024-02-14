// Triangle Function

function calculateTriangleArea() {

    // input-b
    const inputFieldB = document.getElementById('input-b');
    const inputTextB = inputFieldB.value;
    const inputValueB = parseFloat(inputTextB);
    // inputH
    const inputFieldH = document.getElementById('input-h');
    const inputTextH = inputFieldH.value;
    const inputValueH = parseFloat(inputTextH);
    const area = 0.5 * (inputValueB * inputValueH);
    // final output
    const result = document.getElementById('result-area');
    result.innerText = area;
    const areaCal = document.getElementById('areaContiner');
    const p = document.createElement('p');
    p.style.marginLeft = '20px';
    p.style.fontSize= '24px';
    p.innerText ='Output '+ area;
    areaCal.appendChild(p);
    document.getElementById('input-b').value ='';
    document.getElementById('input-h').value ='';

}


// Rectangle Function

function calculateRectangleArea() {

    // input-w
    const inputFieldW = document.getElementById('input-w');
    const inputTextW = inputFieldW.value;
    const inputValueW = parseFloat(inputTextW);
    // input-l
    const inputFieldL = document.getElementById('input-l');
    const inputTextL = inputFieldL.value;
    const inputValueL = parseFloat(inputTextL);
    const areaR = inputValueW * inputValueL;
    // final output
    const resultR = document.getElementById('result-areaR');
    resultR.innerText = areaR;
    const areaCal = document.getElementById('areaContiner');
    const p = document.createElement('p');
    p.style.marginLeft = '20px';
    p.style.fontSize= '24px';
    p.innerText ='Output '+ areaR;
    areaCal.appendChild(p);
    document.getElementById('input-w').value ='';
    document.getElementById('input-l').value ='';


}

// Parallelogram Function

function calculateParallelogramArea() {

    // input-b
    const inputFieldPB = document.getElementById('input-bp');
    const inputTextPB = inputFieldPB.value;
    const inputValuePB = parseFloat(inputTextPB);
    // inputH
    const inputFieldPH = document.getElementById('input-hp');
    const inputTextPH = inputFieldPH.value;
    const inputValuePH = parseFloat(inputTextPH);
    const areaP = inputValuePB * inputValuePH;
    // final output
    const resultP = document.getElementById('result-areaP');
    resultP.innerText = areaP;
    const areaCal = document.getElementById('areaContiner');
    const p = document.createElement('p');
    p.style.marginLeft = '20px';
    p.style.fontSize= '24px';
    p.innerText ='Output '+ areaP;
    areaCal.appendChild(p);
    document.getElementById('input-bp').value ='';
    document.getElementById('input-hp').value ='';


}

// Rhombus
function calculateRhombusArea() {

    // input-b
    const inputFieldD1 = document.getElementById('input-d1');
    const inputTextD1 = inputFieldD1.value;
    const inputValueD1 = parseFloat(inputTextD1);
    // inputH
    const inputFieldD2 = document.getElementById('input-d2');
    const inputTextD2 = inputFieldD2.value;
    const inputValueD2 = parseFloat(inputTextD2);
    const areaRh = .5 * (inputValueD1 * inputValueD2);
    // final output
    const resultRh = document.getElementById('result-areaRh');
    resultRh.innerText = areaRh;
    const areaCal = document.getElementById('areaContiner');
    const p = document.createElement('p');
    p.style.marginLeft = '20px';
    p.style.fontSize= '24px';
    p.innerText ='Output '+ areaRh;
    areaCal.appendChild(p);
    document.getElementById('input-d1').value ='';
    document.getElementById('input-d2').value ='';


}

// Pentagon
function calculatePentagonArea() {

    // input-p1
    const inputFieldP1 = document.getElementById('input-p1');
    const inputTextP1 = inputFieldP1.value;
    const inputValueP1 = parseFloat(inputTextP1);
    // input-b2
    const inputFieldB2 = document.getElementById('input-b2');
    const inputTextB2 = inputFieldB2.value;
    const inputValueB2 = parseFloat(inputTextB2);
    const areaPn = .5 * (inputValueP1 * inputValueB2);
    // final output
    const resultPn = document.getElementById('result-areaPN');
    resultPn.innerText = areaPn;
    const areaCal = document.getElementById('areaContiner');
    const p = document.createElement('p');
    p.style.marginLeft = '20px';
    p.style.fontSize= '24px';
    p.innerText ='Output '+ areaPn;
    areaCal.appendChild(p);
    document.getElementById('input-p1').value ='';
    document.getElementById('input-b2').value ='';


}
// Ellipse
function calculateEllipseArea() {

    // input-a
    const inputFieldA = document.getElementById('input-a');
    const inputTextA = inputFieldA.value;
    const inputValueA = parseFloat(inputTextA);
    // input-b3
    const inputFieldB3 = document.getElementById('input-b3');
    const inputTextB3 = inputFieldB3.value;
    const inputValueB3 = parseFloat(inputTextB3);
    const areaE = 3.14 * (inputValueA * inputValueB3);
    // final output
    const resultE = document.getElementById('result-areaE');
    resultE.innerText = areaE;
    const areaCal = document.getElementById('areaContiner');
    const p = document.createElement('p');
    p.style.marginLeft = '20px';
    p.style.fontSize= '24px';
    p.innerText ='Output '+ areaE;
    areaCal.appendChild(p);
    document.getElementById('input-a').value ='';
    document.getElementById('input-b3').value ='';


}

// onMouse event container-1

function triContainer() {
    document.getElementById('container-1').style.backgroundColor = 'pink';

}
function triContainer1(){
    document.getElementById('container-1').style.backgroundColor = 'white'
}
// onMouse event container-2

function recContainer(){
    document.getElementById('continer-2').style.backgroundColor = 'tomato';

}
function recContainer1(){
    document.getElementById('continer-2').style.backgroundColor = 'white'
}
// onMouse event container-3

function paraContainer(){
    document.getElementById('continer-3').style.backgroundColor = 'red';

}
function paraContainer1(){
    document.getElementById('continer-3').style.backgroundColor = 'white'
}
// onMouse event container-4

function rhContainer(){
    document.getElementById('continer-4').style.backgroundColor = 'purple';

}
function rhContainer1(){
    document.getElementById('continer-4').style.backgroundColor = 'white'
}
// onMouse event container-5

function pnContainer(){
    document.getElementById('continer-5').style.backgroundColor = 'lightblue';

}
function pnContainer1(){
    document.getElementById('continer-5').style.backgroundColor = 'white'
}
// onMouse event container-5

function elContainer(){
    document.getElementById('continer-6').style.backgroundColor = 'orange';

}
function elContainer1(){
    document.getElementById('continer-6').style.backgroundColor = 'white'
}