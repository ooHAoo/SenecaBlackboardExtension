// Checks if the URL is the Seneca BB Homepage (When NOT signed-in)
if (window.location.href.indexOf("https://my.senecacollege.ca/webapps/") == 0) {
    // Removing "Did You Know?" Section by getting the element ID
    var element = document.getElementById("module:_3925_1");
    element.style.display = "none";
}