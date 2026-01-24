function checkOrderStatus(orderId) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (typeof orderId === "number") {
        resolve("Order Shipped");
      } else {
        reject("Invalid Order ID");
      }
    }, 1000);
  });
}

async function main() {
  try {
    const result = await checkOrderStatus(123);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
main();