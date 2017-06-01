function walkTheDoom(node, F) {

    F(node)
    node = node.firstChild
    
    while (node) {
        walkTheDoom(node, F);
        node = node.nextSibling;
    }

}

// walkTheDoom(document.getElementById("body"),function(node){
//     alert(node.nodeName+ "," +node.nodeValue);
// });