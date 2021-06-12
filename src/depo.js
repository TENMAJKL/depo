/*
 *
 * Depo
 *
 * Simple way to combine multiple html files to one
 * Built by TEN MAJKL
 * MIT LICENSE
 * 2021 
 * 
 * I have no idea why would you use it, this version does literally nothing
 *
 * */
var elements = document.getElementsByTagName("import")

for (let element, i=0; element = elements[i]; i++)
{
    var file = element.attributes.getNamedItem("file").value

    fetch(file)
    .then(res => res.text())
    .then(data=>element.outerHTML = data)
}

