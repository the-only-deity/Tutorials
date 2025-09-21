**Title:** Enhanced Tip Calculator – My Solution

**Description:**

- _I was supposed to improve the code of the previous tip by making sure the input from the user is converted into a number before calculations happen, round output to two decimal places and improve variable scoping._

- _I solved the conversion problem by implementing type coercion when I am prompting. I used the toFixed() method to format the output to two decimal places. I decided to make the tipAmount, totalAmount and output local to the function._

- _I did have a few questions though when researching number formatting I came across Math.round() and the toFixed() Please explain the difference to me._

- _I was also unable to answer the question you asked me earlier. "Looking at your code now — where do you think **variable scope** could cause problems if this program grew bigger (e.g., had multiple functions)?" Please help me out._

**Code:**

    let  bill  =  Number(prompt("Please enter your total bill amount:"));

    let  tipPercentage  =  Number(

    prompt("Please enter the tip percentage you would like to give:")

    );



    function  calculateTip(bill, tipPercentage) {

    let  tipAmount;

    let  totalAmount;

    let  output;



    tipAmount  =  bill  * (tipPercentage  /  100);

    totalAmount  =  bill  +  tipAmount;

    totalAmount  =  totalAmount.toFixed(2);

    tipAmount  =  tipAmount.toFixed(2);



    output  =  `Your bill is: KES${bill}\nThe tip percentage you chose was: ${tipPercentage}%\nThe amount tipped is: KES${tipAmount}\nThe total amount to be paid is: KES${totalAmount}`;



    return  output;

    }



    console.log(calculateTip(bill, tipPercentage));

**Notes for Review (optional):**

- None that I can think of.
