var count = 0;
function sendMail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var rating = document.querySelector('input[name="rating"]:checked')?.value || "";

  // Check if any field is empty
  if (name === "" || email === "" || message === "") {
    document.getElementsByClassName("okbutton")[0].style.color = "red";
    document.getElementsByClassName("custom-alert")[0].style.borderColor =
      "#b10000";
    document.getElementById("alertmessage").innerHTML =
      "Please fill in all fields<br>before submitting. 👻";
    document.getElementsByClassName("custom-alert")[0].style.backgroundColor =
      "red";
    document.getElementById("customAlert").style.display = "block";
    return; // Stop function execution if any field is empty
  }

  var params = {
    name: name,
    email: email,
    message: message,
    rating: rating,
  };

  const serviceID = "service_nhgr81l";
  const templateID = "template_af3uq9w";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.querySelector('input[name="rating"]:checked').checked = true;
      console.log(res);
      count++;
      document.getElementById("form-status").innerText =
        "✅ Sent! " + count + " times";
      document.getElementsByClassName("okbutton")[0].style.color = "#2196f3";
      document.getElementsByClassName("custom-alert")[0].style.borderColor =
        "#1769a7";
      document.getElementsByClassName("custom-alert")[0].style.backgroundColor =
        "#2196f3";
      document.getElementById("alertmessage").innerHTML =
        "Message sent successfully! ✅<br>You will also get a copy of message!";
      document.getElementById("customAlert").style.display = "block";
      // alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}
function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
}

var count = 0;
function barclick() {
  let bar = document.getElementById("bar");
  let cross = document.getElementById("cross");
  let nav = document.getElementById("rightNav");
  if (count == 0) {
    nav.style.display = "flex";
    cross.style.display = "block";
    bar.style.display = "none";
    count++;
  } else {
    nav.style.display = "none";
    count--;
    bar.style.display = "block";
    cross.style.display = "none";
  }
}

window.onload = function () {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
};

{/* <script>
  const followText = document.getElementById("cursor-text");
  const unclickableArea = document.querySelector("html"
  unclickableArea.addEventListener("mouseenter", function () {
    followText.style.display = "block";
  }
  unclickableArea.addEventListener("mouseleave", function () {
    followText.style.display = "none";
  }
  document.addEventListener("mousemove", function (e) {
    followText.style.left = `${e.pageX + 10}px`;
    followText.style.top = `${e.pageY + 10}px`;
  });
</script> */}

document.addEventListener('scroll', function() {
  const elements = document.querySelectorAll('.fade-in');

  elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
          element.classList.add('visible');
      }
  });
});