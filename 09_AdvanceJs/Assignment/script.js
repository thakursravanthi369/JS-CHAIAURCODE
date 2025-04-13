//  Define the data object first
const data = {
    download: "download.jpeg",
    name: "Thakur Sravanthi",
    followers: 1500,
    bio: "A passionate full-stack developer skilled in React, Node.js, and MongoDB.",
    blog: "https://github.com/thakursravanthi369"
  };
  
  //  Then safely update the DOM with this data
  document.querySelector(".card img").setAttribute("src", data.download);
  document.querySelector("h4").innerHTML = `${data.name}, Followers: ${data.followers}`;
  document.querySelector("h4").style.fontWeight = "bold";
  document.querySelector("p").innerHTML = `
    ${data.bio}<br>
    <a href="${data.blog}" target="_blank" rel="noopener noreferrer">${data.blog}</a>
  `;
  
  