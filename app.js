function GetIncrement(inc) {

    var sum = 0;
    return function () { sum += inc; return sum; }

}

var f = GetIncrement(2);
// document.writeln(f() + "<br/>");
// document.writeln(f() + "<br/>");
// document.writeln(f() + "<br/>");

var g = GetIncrement(1);
// document.writeln(g() + "<br/>"); 
// document.writeln(g() + "<br/>");
// document.writeln(g() + "<br/>");

document.getElementById("li1").innerHTML=g();
document.getElementById("li2").innerHTML=g();
document.getElementById("li3").innerHTML=g();
document.getElementById("li4").innerHTML=g();

function addSomeText(){

    var text = document.getElementById("input").value;
    var ul = document.getElementById("ul");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    li.setAttribute("id","li"+g());
    ul.appendChild(li);
    document.getElementById("input").value="";


}