const empName = document.getElementById("empName");
const empID = document.getElementById("empID");
const empDesg = document.getElementById("empDesg");
const empDOJ = document.getElementById("empDOJ");
const empExp = document.getElementById("empExp");
const empLoc = document.getElementById("empLoc");
const empTech = document.getElementById("empTech");
const empImgURL = document.getElementById("empImgURL");

const empData = [
  {
    id: 1,
    name: "Aaaa",
    position: "Associate",
    img: "img.jpeg",
    empid: "10001",
    doj: "01/01/2018",
    exp: 3,
    location: "Bangalore",
    techno: "React,Js,Css",
  },
  {
    id: 2,
    name: "Bbbb",
    position: "Associate",
    img: "img.jpeg",
    empid: "10002",
    doj: "01/01/2018",
    exp: 2,
    location: "Chennai",
    techno: "React,Js,Css",
  },
  {
    id: 3,
    name: "Cccc",
    position: "Associate",
    img: "img.jpeg",
    empid: "10003",
    doj: "01/01/2018",
    exp: 4,
    location: "Delhi",
    techno: "React,Js,Css",
  },
  {
    id: 4,
    name: "Dddd",
    position: "Associate",
    img: "img.jpeg",
    empid: "10004",
    doj: "01/01/2018",
    exp: 7,
    location: "Pune",
    techno: "React,Js,Css",
  },
  {
    id: 5,
    name: "Eeee",
    position: "Associate",
    img: "img.jpeg",
    empid: "10005",
    doj: "01/01/2018",
    exp: 2,
    location: "Chennai",
    techno: "React,Js,Css",
  },
  {
    id: 6,
    name: "Ffff",
    position: "Associate",
    img: "img.jpeg",
    empid: "10006",
    doj: "01/01/2018",
    exp: 2,
    location: "Bangalore",
    techno: "React,Js,Css",
  },
  {
    id: 7,
    name: "Gggg",
    position: "Associate",
    img: "img.jpeg",
    empid: "10007",
    doj: "01/01/2018",
    exp: 6,
    location: "Coimbatore",
    techno: "React,Js,Css",
  },
  {
    id: 8,
    name: "Hhhh",
    position: "Associate",
    img: "img.jpeg",
    empid: "10008",
    doj: "01/01/2018",
    exp: 3,
    location: "Delhi",
    techno: "React,Js,Css",
  },
  {
    id: 9,
    name: "Iiii",
    position: "Associate",
    img: "img.jpeg",
    empid: "10009",
    doj: "01/01/2018",
    exp: 3,
    location: "Pune",
    techno: "React,Js,Css",
  },
  {
    id: 10,
    name: "Jjjj",
    position: "Associate",
    img: "img.jpeg",
    empid: "10010",
    doj: "01/01/2018",
    exp: 3,
    location: "Bangalore",
    techno: "React,Js,Css",
  },
];

const getEmp = (empid) => {
  for (let emp of empData) {
    if (emp.empid == empid) return emp;
  }
  return null;
};

const ul = document.getElementById("list");
empData.map((e) => {
  console.log(e);
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(e.name + " (" + e.empid + ")"));
  ul.appendChild(li);
});

ul.addEventListener("click", function (e) {
  if (e.target && e.target.nodeName == "LI") {
    const clickedEmpId = parseInt(
      e.target.innerText.split("(")[1].replace(")", "")
    );
    const clickedEmp = getEmp(clickedEmpId);

    empName.innerText = clickedEmp.name;
    empID.innerText = clickedEmp.empid;
    empExp.innerText = clickedEmp.exp;
    empDOJ.innerText = clickedEmp.doj;
    empLoc.innerText = clickedEmp.location;
    empTech.innerText = clickedEmp.techno;
    empImgURL.src = clickedEmp.img;
    empDesg.innerText = clickedEmp.techno;
  }
});
