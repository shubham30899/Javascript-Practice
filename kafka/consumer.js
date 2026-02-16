// consumer.js
const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "test-group-2" });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "test2-topic", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        key: message.key?.toString(),
        value: message.value.toString(),
      });
    },
  });
};

run().catch(console.error);
