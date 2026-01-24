function getUser(username) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve({ name: "B2 Bhaiya", type: "Premium" });
    }, 1500);
  });
}

function checkSubscription(user) {
  return new Promise(function(resolve, reject) {
    if (user.type === "Premium") {
      resolve("Access Granted to Netflix");
    } else {
      reject("Please Subscribe");
    }
  });
}

async function loginAndCheck(username) {
  try {
    const user = await getUser(username);       // Step 1
    const result = await checkSubscription(user); // Step 2
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// Call the function
loginAndCheck("B2 Bhaiya");