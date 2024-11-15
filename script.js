var buttons = document.querySelectorAll(".accordion-btn");
const allQuestions = [
    "Check if pair with the given Sum exists in Array",
    "Best Time to Buy and Sell Stock",
    "Find duplicates",
    "Product of Array Except Self",
    "Maximum Subarray",
    "Set Matrix Zeroes",
    "Longest Substring Without Repeating Characters",
    "Reverse a Linked List",
    "Convert Infix expression to Postfix expression",
    "Maximum Depth of Binary Tree",
    "Top K Frequent Elements",
    "Clone Graph",
    "Count ways to reach the n’th stair",
  ];



  function getRandomQuestion() {
      const randomIndex = Math.floor(Math.random() * allQuestions.length);
      return allQuestions[randomIndex];
  }

document.getElementById('random-question-box').onclick = () => {
    document.getElementById('random-question-display').innerText = getRandomQuestion();
};


document.querySelectorAll(".accordion-btn").forEach(button => {
    button.onclick = () => {
        button.classList.toggle("active");
        let panel = button.nextElementSibling;
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    };
});



// check boxxes save cheyyadam -->>


const checkboxes = document.querySelectorAll("input[type='checkbox']");

checkboxes.forEach(checkbox => {
    checkbox.onclick = () => {
        localStorage.setItem(checkbox.id, checkbox.checked); 
    };
});

checkboxes.forEach(checkbox => {
    const isChecked = localStorage.getItem(checkbox.id); 
    if (isChecked === "true") {
        checkbox.checked = true; 
    }
});


