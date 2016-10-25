$(function() {
  console.log("JavaScript is working on this site! Cool!");


  //-----------------------------------------------------------------------------------
  // convertToRomanNumeral function takes number as a parameter 
  // and returns a Roman numeral
  // 
  // 100 | C 
  // 90  | XC
  // 50  | L
  // 40  | XL
  // 10  | X
  // 9   | IX
  // 5   | V
  // 4   | IV
  // 1   | I

  function convertToRomanNumeral(input) {
    console.log("Number = " + input);
    var output = "";
    while (input >= 0) {
      if (input >= 100) {
        output = output.concat('C');
        input -= 100;
      }else if (input >= 90) {
        output = output.concat('XC');
        input -= 90;
      }else if (input >= 50) {
        output = output.concat('L');
        input -= 50;
      }else if (input >= 40) {
        output = output.concat('XL');
        input -= 40;
      }else if (input >= 10) {
        output = output.concat('X');
        input -= 10;
      }else if (input >= 9) {
        output = output.concat('IX');
        input -= 9;
      }else if (input >= 5) {
        output = output.concat('V');
        input -= 5;
      }else if (input >= 4) {
        output = output.concat('IV');
        input -= 4;
      }else if (input >= 1) {
        output = output.concat('I');
        input -= 1;
      }
    }
    return output;
  }
  //   if ( number == 0){
  //     output = "NULL, 0 dosent count! CHEATER! :(";
  //   }else if ( number == 1) {
  //     output = "I";
  //   }else if ( number == 2) {
  //     output = "II";
  //   }else if ( number == 3) {
  //     output = "III";
  //   }else if ( number == 4) {
  //     output = "IV";
  //   }else if ( number == 5) {
  //     output = "V";
  //   }else if ( number == 6) {
  //     output = "VI";
  // //}else if ( number == 7) {
  // //output = "VII";
  // //}else if ( number == 8) {
  // //output = "VIII";
  // //}else if ( number == 9) {
  // //  output = "IX";
  // //}else if ( number == 10) {
  // // output = "X";
  // //  }else if ( number > 11) {
  // //    output = "That number is too large!";
  
  // //}else {
  // //  output = "What part of NUMBER do you not understand?"
  // // }
  // //  return output;
  // //}



  //-----------------------------------------------------------------------------------
  // Convert the number input when the button is clicked

  var $button = $("button");
  var $numberInput = $("#number_input");
  var $romanNumeralOutput = $("#roman_numeral_output");

  $button.on("click", function(e){
    e.preventDefault();
    numberVal = $numberInput.val();
    romanNumeralVal = convertToRomanNumeral(numberVal);
    console.log("Roman numeral = " + romanNumeralVal);
    $romanNumeralOutput.val(romanNumeralVal);
  });

});
