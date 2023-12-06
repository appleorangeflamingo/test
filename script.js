document.getElementById("connectButton").addEventListener("click", async () => {
  // Check if MetaMask is installed
  if (typeof window.ethereum !== "undefined") {
    try {
      // Request account access
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const account = accounts[0];
      console.log("Connected", account);

      // Prompt user to sign a message
      signMessage(account);
    } catch (error) {
      console.error(error);
    }
  } else {
    alert("Please install MetaMask!");
  }
});

async function signMessage(account) {
  const message = "Mr Eric is diz you";
  const signature = await window.ethereum.request({
    method: "personal_sign",
    params: [message, account],
  });

  console.log("Signed message:", signature);
}
