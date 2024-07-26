fetch("data.json")
  .then((res) => {
    return res.json();
  })

  .then((data) => {
    console.log(data);
    showData(data);
  });

function showData(data) {
  data.forEach((ele) => {
    var title = document.getElementById("title");
    var para = document.getElementById("description");
    title.innerText = ele.Name;
    para.innerText = ele.ShortDesc;
  });
}
