!function(){let e=document.querySelector(".eventThumb");document.addEventListener("keydown",function(t){let c=`<ul class="eventList">
  <li class="eventCode">${t.code}</li>
  <li class="eventKey">${t.key}</li>
  </ul>`;e.insertAdjacentHTML("beforeend",c)});let t=document.querySelector("#checkbox"),c=document.querySelector("body"),l=localStorage.getItem("theme");"dark"===l?(c.classList.add("dark"),checkbox.checked=!0):c.classList.add("light"),t.addEventListener("click",function(){!0===checkbox.checked&&(c.classList.add("dark"),c.classList.remove("light"),localStorage.setItem("theme","dark")),!1===checkbox.checked&&(c.classList.add("light"),c.classList.remove("dark"),localStorage.setItem("theme","light"))})}();
//# sourceMappingURL=index.36cdae24.js.map
