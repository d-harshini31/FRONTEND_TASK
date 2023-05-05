const op=process.argv[2];
const num1=parseFloat(process.argv[3]);
const num2=parseFloat(process.argv[4]);
var result;
switch(op)
{
    case 'addition':
        result=num1;
        for(let i=4;i<process.argv.length;i++)
        result+=parseFloat(process.argv[i]);
        break;
    case 'subtraction':
        result =num1-num2;
        break;
    case 'multiply':
        result=1;
        for(let i=3;i<process.argv.length;i++)
        result*=parseFloat(process.argv[i]);
        break; 
    case 'division':
        if(num2==0)
            console.log("number can't be divided by 0");
        else
            result =num1/num2;
        break;
    default:
        console.log("Invalid \nChoose the correct option \n==> (addtion subtration multiply division)");
}
if(result!=undefined)
    if(op=='addition'||op=='multiply')
    {
        var values=process.argv.slice(3).join(" , ");
        console.log(op+" of "+values+" is "+result);
    }
    else{
        console.log(op+" of "+num1+" and "+num2+" is "+result);
    }
