// if(true){
//     var x = 0;
// }
// x = 2;

// var myGlobal = "global";

// function ScopeTest(){
//     myGlobal = "overwritten";
// }
// document.write(myGlobal);
// ScopeTest();
// document.writeln(myGlobal);

var x =1;
{
    var x =2;
    console.log(x);
}

// @ts-ignore
document.writeln(x);