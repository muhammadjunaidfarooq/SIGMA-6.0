const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("Connection successful.");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

let allChats = [
  {
    from: "Waqas",
    to: "Arham",
    msg: "Oppo Reno 13 is 104000",
    created_at: new Date(),
  },
  {
    from: "Noman",
    to: "Ahmad",
    msg: "Today topic of AI is very difficult",
    created_at: new Date(),
  },
  {
    from: "Haseeb",
    to: "Seyyam",
    msg: "What are you doing in software house.",
    created_at: new Date(),
  },
  {
    from: "Mudasir",
    to: "Usman",
    msg: "Tell me about the course of argon welding",
    created_at: new Date(),
  },
  {
    from: "Mansoor Shah",
    to: "Junaid",
    msg: "Can we meet today?",
    created_at: new Date(),
  },
  {
    from: "Hamza",
    to: "Mubashir",
    msg: "What's your marks in matriculation?",
    created_at: new Date(),
  },
  {
    from: "Jamshaid",
    to: "Muzamil",
    msg: "Can you gave me the notes of computer class?",
    created_at: new Date(),
  },
  {
    from: "Zain",
    to: "Abdullah",
    msg: "I am going to Bahawalpur for Mechinical diploma.",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
