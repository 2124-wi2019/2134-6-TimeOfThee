class Converter {
    //this is the base unit we want to convert to something else
    constructor(unitToConvert) {
        //we'll store this unit internally as _unitToConvert
        let check = parseFloat(unitToConvert);
        if(isNaN(check)) {
            throw new Error("Error: you must pass a number to constructor!");
        } else {
            this._unitToConvert = check;
        }
        
    }
}

//define a class named MetricToImperial here, which extends the Converter class shown above.

class MetricToImperial extends Converter{
    constructor(value){//create
        super(value);
    }
    //methods
    convertMetersToFeet(){
        return this._unitToConvert*3.2808;
    }
    convertMetersToMiles(){
        return this._unitToConvert*0.00062137;
    }
    convertLitersToGallons(){
        return this._unitToConvert*0.26417;
    }
    convertLitersToQuarts(){
        return this._unitToConvert*1.056688;
    }
    convertKilosToPounds(){
        return this._unitToConvert*2.2046;
    }
    convertCelciusToFahrenheit(){
        return (this._unitToConvert*1.8)+32;
    }
    toTwoDecimalPlaces(val){
        val=parseFloat(val);
        if(isNaN(val)){//is float?
            throw new Error(`expected float for converterhelper.toTwoDecimalPlaces, instead got: ${value}`);
        }else{
            return val.toFixed(2);
        }
    }
}