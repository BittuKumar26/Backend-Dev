function fetchUser(id) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve({ name: "B2 Bhaiya", isPremium: true });
    }, 1000);
  });
}

function fetchOrders(id) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve([
        { item: "Laptop", price: 1000, status: "delivered" },
        { item: "Phone", price: 500, status: "pending" }
      ]);
    }, 2000);
  });
}

async function displayDashboard(id) {
  try {
    // 1️⃣ Await both
    const user = await fetchUser(id);
    const orders = await fetchOrders(id);

    // 2️⃣ Filter delivered orders
    const deliveredOrders = orders.filter(order => order.status === "delivered");

    // 3️⃣ Apply 10% premium discount
    const discountedOrders = deliveredOrders.map(order => {
      let finalPrice = order.price;
      if (user.isPremium) {
        finalPrice = order.price * 0.9; // 10% discount
      }
      return { ...order, finalPrice };
    });

    // 4️⃣ Calculate total
    const total = discountedOrders.reduce((sum, order) => sum + order.finalPrice, 0);

    // Print Dashboard
    console.log("Welcome,", user.name);
    console.log("Delivered Orders:", discountedOrders);
    console.log("Final Total after Discount: $", total);

  } catch (error) {
    console.log("Error:", error);
  }
}

// Run dashboard
displayDashboard(101);