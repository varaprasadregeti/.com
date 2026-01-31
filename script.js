const firebaseConfig = {
  apiKey: "AIzaSyCahtIaZ9axT5WCFwZC3sn3FQGpY0SzSPs",
  authDomain: "kgrlstudentinfo-cd45a.firebaseapp.com",
  projectId: "kgrlstudentinfo-cd45a",
  storageBucket: "kgrlstudentinfo-cd45a.firebasestorage.app",
  messagingSenderId: "389251086239",
  appId: "1:389251086239:web:026c81872a5149d1b9efaa"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function addStudent(){
  const name=document.getElementById("name").value;
  const roll=document.getElementById("roll").value;
  const dept=document.getElementById("dept").value;
  if(!name||!roll||!dept){ alert("Fill all fields"); return; }
  db.collection("students").add({name,roll,dept}).then(loadStudents);
}
function loadStudents(){
  const list=document.getElementById("list"); list.innerHTML="";
  db.collection("students").get().then(s=>s.forEach(d=>{
    const v=d.data(), li=document.createElement("li");
    li.textContent=`${v.name} | ${v.roll} | ${v.dept}`;
    list.appendChild(li);
  }));
}
window.onload=loadStudents;
