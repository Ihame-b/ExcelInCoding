function message() {
    let firstLength = parseInt(document.getElementById("firstlength").value);
    let secondLength = parseInt(document.getElementById("secondlength").value);
    let thirdLength = parseInt(document.getElementById("thirdlength").value);
    let show;
    let enteredValues = [firstLength, secondLength, thirdLength];
    

    if (firstLength <= 0 || secondLength <= 0 || thirdLength <= 0) {
        show = "A triangle must have 3 sides";
    }
  
    else if (
        (firstLength + secondLength <= thirdLength &&
            secondLength + firstLength <= thirdLength) ||
        (firstLength + thirdLength <= secondLength &&
            thirdLength + firstLength <= secondLength) ||
        (secondLength + thirdLength <= firstLength && thirdLength + secondLength <= firstLength)
    ) {
        show = " Not a Triangle";

    }

    
    else if (
        firstLength === secondLength &&
        secondLength === thirdLength &&
        thirdLength === firstLength
    ) {
        show = " equilateral.";
    }

   
    else if (
        firstLength === secondLength ||
        secondLength === thirdLength ||
        thirdLength === firstLength
    ) {
        show = " isosceles.";
    }
    
    
    else if (
        firstLength !== secondLength &&

        firstLength !== thirdLength &&

        secondLength !== thirdLength
    ) {
        show = " scalene";
    }
                                  
    else {
        show = " error";
    }
    document.getElementById("demo").innerHTML = "the values you entered are:" + " [" + enteredValues.join() + "]" + "<br> The triangle formed is";
    document.getElementById("demo").innerHTML += show.toUpperCase();
}
