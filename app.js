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

document.getElementById("li1").innerHTML = g();
document.getElementById("li2").innerHTML = g();
document.getElementById("li3").innerHTML = g();
document.getElementById("li4").innerHTML = g();

function addSomeText() {

    var text = document.getElementById("input").value;
    var ul = document.getElementById("ul");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    li.setAttribute("id", "li" + g());
    ul.appendChild(li);
    document.getElementById("input").value = "";
}


function Emp(name, salary) {

    this.name = name;
    this.salary = salary;
    this.company = "OdenBidlear";


}

Emp.prototype.issuePaycheck = function () {
    var monthly = this.salary / 12;
    console.log(this.name + " " + monthly + " " + this.company);
}

var emp = new Emp("ola", 123456789)


emp.issuePaycheck();

var emp2 = new Emp("carin", 12345679)
emp2.issuePaycheck();