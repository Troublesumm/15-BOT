
    const userMessage = [
        ["Hey","Hi","Hello"],
        ["track my order", "order status", "where is my order"],
        ["cancel my order", "cancel order"],
        ["change my delivery address", "update address"],
        ["delivery time", "when will my order arrive"],
        ["order history", "past orders"],
        ["payment methods", "how can i pay"],
        ["contact customer support", "help", "assistance"],
        ["refund", "return", "exchange"],
        ["late delivery", "delayed order"],
        ["damaged item", "broken item"],
        ["missing item", "item not received"],
        ["wrong item", "incorrect item"],
        ["reschedule delivery", "change delivery date"],
        ["delivery charges", "shipping cost"],
        ["promo code", "discount", "coupon"],
        ["packaging", "packaging issue"],
        ["packaging damage", "damaged package"],
        ["order confirmation", "order details"],
        ["invoice", "bill"],
        ["receipt", "proof of purchase"],
        ["delivery options", "shipping options"],
        ["delivery area", "service area"],
        ["delivery restrictions", "delivery limitations"],
        ["delivery partner", "courier service"],
        ["delivery notice", "delivery notification"],
        ["delivery window", "delivery time slot"],
        ["delivery confirmation", "delivery confirmation email"],
        ["delivery attempt", "delivery attempt failed"],
        ["delivery failure", "delivery unsuccessful"],
        ["delivery success", "delivery successful"],
        ["delivery problem", "delivery issue"],
        ["delivery complaint", "delivery complaint"],
        ["delivery feedback", "delivery review"],
        ["delivery suggestion", "delivery improvement"],
    ];
    const botReply = [
        ["Hello! How can I help you today?", "Hi there! What can I do for you?", "Greetings! Need assistance with your order?"],
        ["Okay, what's your order number?"],
        ["Yes, I can help you track your order. Please provide your order number."],
        ["I'm sorry to hear that. Please provide your order number so I can assist you."],
        ["I'm doing well, thank you for asking. How can I help you today?"],
        ["The COVID-19 situation is evolving. Please visit the official health websites for the latest updates."],
        ["I'm currently assisting you. How can I help?", "I'm here to help with your delivery needs."],
        ["I am a chatbot designed to assist with delivery inquiries."],
        ["I was created by [Your Name/Company]. How can I help you today?"],
        ["I'm happy to help! What can I do for you today?"],
        ["I'm glad you love our service! How can I assist you further?"],
        ["I'm sorry to hear that. Please let me know how I can help resolve the issue."],
        ["I'm here to help. Please let me know how I can assist you."],
        ["I'm happy to help! What can I do for you today?"],
        ["I'm sorry, I don't have that information. Can you please provide your order number?"],
        ["I'm glad you're happy with your order! Is there anything else I can help you with?"],
        ["I'm sorry to hear that. Please let me know what's wrong so I can assist you."],
        ["I'm here to help! Please let me know how I can assist you."],
        ["I'm sorry, I don't have that information. Can you please provide your order number?"],
        ["I'm glad you're happy with your order! Is there anything else I can help you with?"],
        ["I'm sorry to hear that. Please let me know what's wrong so I can assist you."],
        ["I'm here to help! Please let me know how I can assist you."],
        ["I'm sorry, I don't have that information. Can you please provide your order number?"],
        ["I'm glad you're happy with your order! Is there anything else I can help you with?"],
        ["I'm sorry to hear that. Please let me know what's wrong so I can assist you."],
        ["I'm here to help! Please let me know how I can assist you."],
        ["I'm sorry, I don't have that information. Can you please provide your order number?"],
        ["I'm glad you're happy with your order! Is there anything else I can help you with?"],
        ["I'm sorry to hear that. Please let me know what's wrong so I can assist you."],
        ["I'm here to help! Please let me know how I can assist you."],
        ["I'm sorry, I don't have that information. Can you please provide your order number?"],
        ["I'm glad you're happy with your order! Is there anything else I can help you with?"],
        ["I'm sorry to hear that. Please let me know what's wrong so I can assist you."],
        ["I'm here to help! Please let me know how I can assist you."],
        ["I'm sorry, I don't have that information. Can you please provide your order number?"],
        ["I'm glad you're happy with your order! Is there anything else I can help you with?"],
        ["I'm sorry to hear that. Please let me know what's wrong so I can assist you."],
        ["I'm here to help! Please let me know how I can assist you."],
        ["I'm sorry, I don't have that information. Can you please provide your order number?"],
        ["I'm glad you're happy with your order! Is there anything else I can help you with?"],
        ["I'm sorry to hear that. Please let me know what's wrong so I can assist you."],
        ["I'm here to help! Please let me know how I can assist you."],
        ["I'm sorry, I don't have that information. Can you please provide your order number?"],
        ["I'm glad you're happy with your order! Is there anything else I can help you with?"],
        ["I'm sorry to hear that. Please let me know what's wrong so I can assist you."],
        ["I'm here to help! Please let me know how I can assist you."],
        ["I'm sorry, I don't have that information. Can you please provide your order number?"],
        ["I'm glad you're happy with your order! Is there anything else I can help you with?"],
        ["I'm sorry to hear that. Please let me know what's wrong so I can assist you."],
        ["I'm here to help! Please let me know how I can assist you."],
        ["I'm sorry, I don't have that information. Can you please provide your order number?"],
        ["I'm glad you're happy with your order! Is there anything else I can help you with?"],
        ["I'm sorry to hear that. Please let me know what's wrong so I can assist you."],
        ["I'm here to help! Please let me know how I can assist you."],
        ["I'm sorry, I don't have that information. Can you please provide your order number?"],
        ["I'm glad you're happy with your order! Is there anything else I can help you with?"],
        ["I'm sorry to hear that. Please let me know what's wrong so I can assist you."],
        ["I'm here to help! Please let me know how I can assist you."],
        ["I'm sorry, I don't have that information. Can you please provide your order number?"],
        ["I'm glad you're happy with your order! Is there anything else I can help you with?"],
        ["I'm sorry to hear that. Please let me know what's wrong so I can assist you."],
        ["I'm here to help! Please let me know how I can assist you."],
        ["I'm sorry, I don't have that information. Can you please provide your order number?"],
        ["I'm glad you're happy with your order! Is there anything else I can help you with?"],
        ["I'm sorry to hear that. Please let me know what's wrong so I can assist you."],
        ["I'm here to help! Please let me know how I can assist you."],
        ["I'm sorry, I don't have that information. Can you please provide your order number?"],
        ["I'm glad you're happy with your order! Is there anything else I can help you with?"],
        ["I'm sorry to hear that. Please let me know what's wrong so I can assist you."],
        ["I'm here to help! Please let me know how I can assist you."],
        ["I'm sorry, I don't have that information. Can you please provide your order number?"],
        ["I'm glad you're happy with your order! Is there anything else I can help you with?"],
        ["I'm sorry to hear that. Please let me know what's wrong so I can assist you."],
        ["I'm here to help! Please let me know how I can assist you."],
        ["I'm sorry, I don't have that information. Can you please provide your order number?"],
        ["I'm glad you're happy with your order! Is there anything else I can help you with?"],
        ["I'm sorry to hear that. Please let me know what's wrong so I can assist you."],
        ["I'm here to help! Please let me know how I can assist you."],
        ["I'm sorry, I don't have that information. Can you please provide your order number?"],
        ["I'm glad you're happy with your order! Is there anything else I can help you with?"],
        ["I'm sorry to hear that. Please let me know what's wrong so I can assist you."],
        ["I'm here to help! Please let me know how I can assist you."],
        ["I'm sorry, I don't have that information. Can you please provide your order number?"],
        ["I'm glad you're happy with your order! Is there anything else I can help you with?"],
        ["I'm sorry to hear that. Please let me know what's wrong so I can assist you."],
    ]
  
  const alternative = [
    ["Your order status is: successful", "I'm checking your order status now.", "Please provide your order number for tracking."],
    ["Your order cancellation request has been submitted.", "We're processing your order cancellation request."],
    ["Please provide your new delivery address.", "I'll update your delivery address."],
    ["Your estimated delivery time is: 30mins", "I'm checking your delivery time. Please provide your order number."],
    ["Your order history is: pls wait", "I'm retrieving your order history."],
    ["Our accepted payment methods are: visa card, bank transfer", "You can pay using our online app or at our nearest office"],
    ["Please contact our customer support at: .", "Our customer support team is ready to assist you."],
    ["We're processing your refund request.", "Please allow some time for your refund to be processed."],
    ["We apologize for the late delivery. We're investigating the issue.", "Your order may be delayed due to ..."],
    ["We're sorry to hear that. Please provide us with more details about the damage."],
    ["We're investigating the missing item. Please provide your order number."],
    ["We apologize for the incorrect item. We'll arrange a replacement.", "Please contact our customer support for a replacement."],
    ["We can reschedule your delivery. Please provide a new date.", "Your delivery can be rescheduled."],
    ["Our delivery charges are: ...", "Delivery charges vary based on your location and order size."],
    ["Please provide your promo code to apply the discount."],
    ["We're investigating the packaging issue. Please provide your order number."],
    ["Your order confirmation details are: ...", "I've sent you an order confirmation email."],
    ["Your invoice is attached to your order confirmation email.", "I can send you a copy of your invoice."],
    ["Your receipt is attached to your order confirmation email.", "I can send you a copy of your receipt."],
    ["Our delivery options include: ...", "You can choose from these delivery options."],
    ["We deliver to the following areas: ...", "Our service area includes ..."],
    ["There may be delivery restrictions for certain areas. Please check our website for details."],
    ["Our delivery partner is: ...", "Your order is being delivered by ..."],
    ["You'll receive a delivery notice before your order arrives.", "We'll notify you of your delivery status."],
    ["Our delivery window is: ...", "You can choose your preferred delivery time slot."],
    ["We'll send you a delivery confirmation email once your order is delivered.", "You can track your delivery status online."],
    ["We're sorry, there was a delivery attempt failure. We'll try again.", "We'll reschedule your delivery."],
    ["Your delivery was unsuccessful. We'll try again.", "We'll reschedule your delivery."],
    ["Your order was successfully delivered.", "Thank you for shopping with us!"],
    ["Please let us know about any delivery problems you encountered."],
    ["We appreciate your feedback. Please let us know how we can improve our delivery service."],
    ["We're always looking for ways to improve our delivery service. Your suggestions are valuable."],
];
  
  
  function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    input != "" && output(input);
    inputField.value = "";
  }
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        let input = inputField.value.trim();
        input != "" && output(input);
        inputField.value = "";
      }
    });
  });
  
  function output(input) {
    let product;
  
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
    text = text
      .replace(/[\W_]/g, " ")
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .trim();
  
    let comparedText = compare(userMessage, botReply, text);
  
    product = comparedText
      ? comparedText
      : alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
  }
  
  function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < triggerArray[x].length; y++) {
        if (triggerArray[x][y] == string) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
          break;
        }
      }
    }
    //containMessageCheck(string);
    if (item) return item;
    else return containMessageCheck(string);
  }
  
  function containMessageCheck(string) {
    let  expectedReply = [
        ["Good Bye, have a great day!", "Bye, see you later!", "Thank you for contacting us."],
        ["Good Night, sweet dreams!", "Rest well.", "Have a peaceful sleep."],
        ["Good evening! How can I assist you further?", "Evening, what can I do for you?"],
        ["Good morning! Welcome back. How can I help today?", "Morning, let's get started."],
        ["Good Afternoon! Need anything?", "Afternoon, how can I assist you?"],
        ["You're welcome! Thank you for using our service.", "Happy to help."],
        ["No problem, let me know if you need anything else."],
        ["Apologies for any inconvenience.", "I'm sorry to hear that."],
        ["Please don't hesitate to contact us again if you have any questions."],
        ["I hope you have a great day!", "Have a wonderful day."],
    ];
    let expectedMessage = [
      ["bye", "tc", "take care"],
      ["night", "good night"],
      ["evening", "good evening"],
      ["morning", "good morning"],
      ["noon"]
    ];
    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
      if (expectedMessage[x].includes(string)) {
        items = expectedReply[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
    return item;
  }
  function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    voiceControl(product);
  }