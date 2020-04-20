/*
Timothy Washington
script.js
INFO 2134 - Javascript II
Thoendel
Creation date: Apr 12, 2020
*/
window.addEventListener('load', function() {
    this.document.getElementById('userInput').addEventListener('input',function(e){
        let err=document.getElementById('errorList');//set error
        err.innerHTML='';//clear error
        const val=document.getElementById('userInput').value;//set up value
        parseFloat(val);

        if(val==''){//val blank?
            li=document.createElement('li');
            li.appendChild(document.createTextNode('missing a numeric value'));//add error
            err.appendChild(li);
            document.getElementById('errorHolder').className='visible';//visible
            document.getElementById('userInput').focus();//focus
            document.getElementById('convertFromHolder').className='hidden';
        }
        else if(isNaN(val)){//val number?
            li=document.createElement('li');
            li.appendChild(document.createTextNode('umeric values only'));//add error
            err.appendChild(li);
            document.getElementById('errorHolder').className='visible';//visible
            document.getElementById('userInput').focus();//focus
            document.getElementById('convertFromHolder').className='hidden';
        }
        else{
            document.getElementById('errorHolder').className='hidden';//hide
            document.getElementById('convertFromHolder').className='visible';
        }
    });
    this.document.getElementById('convertFrom').addEventListener('change',function(e){
        let convert=document.getElementById('convertFrom');//set convert from
        document.getElementById('convertTo').innerHTML='';//clear

        switch(convert.value){
            case 'Meters':
                document.getElementById('convertToHolder').className='visible';//visible
                var a = document.createElement('option');//make options
                a.appendChild(document.createTextNode('Feet'));//name options
                var b = document.createElement('option');
                b.appendChild(document.createTextNode('Miles'));
                document.getElementById('convertTo').appendChild(a);//add options
                document.getElementById('convertTo').appendChild(b);
                break;
            case 'Liters':
                document.getElementById('convertToHolder').className='visible';//visible
                var a = document.createElement('option');//make options
                a.appendChild(document.createTextNode('Gallons'));//name options
                var b = document.createElement('option');
                b.appendChild(document.createTextNode('Quarts'));
                document.getElementById('convertTo').appendChild(a);//add options
                document.getElementById('convertTo').appendChild(b);
                break;
            case 'Kilos':
                document.getElementById('convertToHolder').className='visible';//visible
                var a = document.createElement('option');//make option
                a.appendChild(document.createTextNode('Pounds'));//name option
                document.getElementById('convertTo').appendChild(a);//add option
                break;
            case 'Celsius':
                document.getElementById('convertToHolder').className='visible';//visible
                var a = document.createElement('option');//make option
                a.appendChild(document.createTextNode('Ferenheit'));//name option
                document.getElementById('convertTo').appendChild(a);//add option
                break;

            default://no select
                    document.getElementById('convertToHolder').className='hidden';
        }
    });
    this.document.getElementById('action').addEventListener('click',function(e){
        let hold=document.getElementById('resultHolder');//set result
        hold.innerHTML='';//clear result
        let res=document.getElementById('userInput').value;//set result

        let calc=new MetricToImperial(res);
        switch(document.getElementById('convertTo').value){//calculate result
            case 'Feet':
                res=calc.toTwoDecimalPlaces(calc.convertMetersToFeet());
                break;
            case 'Miles':
                res=calc.toTwoDecimalPlaces(calc.convertMetersToMiles());
                break;
            case 'Gallons':
                res=calc.toTwoDecimalPlaces(calc.convertLitersToGallons());
                break;
            case 'Quarts':
                res=calc.toTwoDecimalPlaces(calc.convertLitersToQuarts());
                break;
            case 'Pounds':
                res=calc.toTwoDecimalPlaces(calc.convertKilosToPounds());
                break;
            default:
                res=calc.toTwoDecimalPlaces(calc.convertCelciusToFahrenheit());
        }
        hold.appendChild(document.createTextNode(res));//display
    });
});