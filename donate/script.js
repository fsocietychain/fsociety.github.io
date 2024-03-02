document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.querySelector(".progress-bar");
    const percentageElem = document.getElementById("percentage");
    const donatedAmountElem = document.getElementById("donatedAmount");
    const copyButton = document.getElementById("copy-button");
    const addressInput = document.getElementById("address");
  
    // Donation Goal
    const donationGoal = 60000; 
  
    // Percentage of donations
    function calculateDonatedPercentage(donated, goal) {
      return (donated / goal) * 100;
    }
  
    // Progress Bar
    function updateProgressBar(donatedAmount) {
      const donatedPercentage = calculateDonatedPercentage(donatedAmount, donationGoal);
      if (donatedPercentage <= 100) {
        progressBar.style.width = `${donatedPercentage}%`;
        percentageElem.textContent = `${Math.floor(donatedPercentage)}% - `;
        donatedAmountElem.textContent = `${donatedAmount} USDT`;
      } else {
        progressBar.style.width = `100%`; 
      }
    }
  
    // Read info from donate.txt
    fetch('httpS://fsocietychain.com/donate/donate.txt')
      .then(response => response.text())
      .then(data => {
        const donatedAmount = parseFloat(data.trim());
        updateProgressBar(donatedAmount);
      })
      .catch(error => {
        console.error('Error in file "donate.txt":', error);
      });
  
    // Copy address
  });
  function copyAddress() {
    let addressInput = document.getElementById('address-input');
    addressInput.select();
    addressInput.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand('copy');
}

    // Reload web every 120sg
setTimeout(function(){
    window.location.reload();
 }, 120000);
  