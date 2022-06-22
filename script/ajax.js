var elApp = document.getElementById("app");

function recuperarDados() {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.github.com/users/GabrielCM08");
  xhr.send(null);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var res = JSON.parse(xhr.responseText);

      var nome = res.name;
      var avatar_url = res.avatar_url;
      var followers = res.followers;
      var blog_url = res.blog;

      var elAvatar = document.createElement("img");
      elAvatar.setAttribute("width", "128");
      elAvatar.setAttribute("src", avatar_url);

      var elNome = document.createElement("p");
      elNome.innerText = nome;

      var elFollowers = document.createElement("p");
      elFollowers.innerText = followers;

      var elBlog_url = document.createElement("a");
      elBlog_url.setAttribute("href", "http://" + blog_url);
      elBlog_url.innerText = blog_url;

      var elhr = document.createElement("hr");

      elApp.appendChild(elNome);
      elApp.appendChild(elAvatar);
      elApp.appendChild(elFollowers);
      elApp.appendChild(elBlog_url);
      elApp.appendChild(elhr);
    }
  };
}
