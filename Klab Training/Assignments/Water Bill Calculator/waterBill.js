function messageToGive(){
    let initialNumber=parseInt(document.getElementById('initial').value);
    let currentNumber=parseInt(document.getElementById('current').value);
    let categorySelector=document.getElementById('category').value;
    let result;
    let difference=currentNumber-initialNumber;

    if(isNaN(currentNumber && isNaN(initialNumber))){
        result='Please enter valid numbers';
    }

    else if(initialNumber>currentNumber){
        result="Current consumption can't be under initial consumption";
    }
   
    else if(categorySelector=='public'){
        result=difference*323 +' Rwanda francs';

    }
    else if(categorySelector=='residential' && difference<=5){
        result=difference*340 +' Rwanda francs';
    }
    else if(categorySelector=='residential' && difference<=20){
        result=difference*720 +' Rwanda francs';
    }
    else if(categorySelector=='residential' && difference<=50){
        result=difference*845 +' Rwanda francs';
    }
    else if(categorySelector=='residential' && difference>50){
        result=difference*877 +' Rwanda francs';
    }
    else if(categorySelector=='nonResidential' && difference<=50){
        result=difference*877 +' Rwanda francs';
    }
    else if(categorySelector=='nonResidential' && difference>50){
        result=difference*895 +' Rwanda francs';
    }
    else if(categorySelector=='industries'){
        result=difference*736 +' Rwanda francs';
    }
      
    document.getElementById('demo').innerHTML=result;      
}
