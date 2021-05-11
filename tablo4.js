var data = "data";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://jsonplaceholder.typicode.com/albums");
xhr.setRequestHeader("Cookie", "__cfduid=d493362e5ac71b7368f81c4713ae8ad9f1620373172");

xhr.send(data);