const SubscriberModel = require("../models/subscriber");

const getSubscribers = (data) => {
  return new Promise((resolve, reject) => {
    SubscriberModel.find(data)
      .then(data => {
        if (!data) reject({ message: "Data Not Found" });
        else resolve(data);
      })
      .catch(err => reject(err));
  });
};

const createSubscriber = data => {
  return new Promise((resolve, reject) => {
    let Subscriber = new SubscriberModel({
      name: data.name,
      email: data.email,
      message: data.message,
    });
    Subscriber.save(data)
      .then(data => {
        if (!data) reject({ message: "Internal Server Error" });
        else resolve(data);
      })
      .catch(err => reject(err));
  });
}

module.exports = { getSubscribers, createSubscriber };