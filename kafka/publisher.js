// producer.js
const { Kafka, Partitioners } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"], // ✅ external listener for host
});

const producer = kafka.producer({
  // Keep partitioning consistent with older KafkaJS versions (optional)
  createPartitioner: Partitioners.LegacyPartitioner,
  idempotent: true,
});

const run = async () => {
  // 1️⃣ Connect admin client
  const admin = kafka.admin();
  await admin.connect();

  const topic = "test2-topic";

  // 2️⃣ Check if topic exists
  const topics = await admin.listTopics();
  if (!topics.includes(topic)) {
    console.log(`⚡ Topic "${topic}" not found. Creating...`);
    await admin.createTopics({
      topics: [
        {
          topic,
          numPartitions: 3, // adjust as needed
          replicationFactor: 1,
        },
      ],
    });
    console.log(`✅ Topic "${topic}" created`);
  }

  await admin.disconnect();

  // 3️⃣ Connect producer and send messages
  await producer.connect();
  // await producer.send({
  //   topic,
  //   messages: [
  //     { key: "key1", value: "Hello Kafka from Node.js! 🚀" },
  //     { key: "key2", value: "This is another message ✅" },
  //   ],
  // });
  await producer.send({
    topic,
    messages: [
      { value: "Broadcast message 00", partition: 0 },
      { value: "Broadcast message 11", partition: 1 },
      { value: "Broadcast message 22", partition: 2 },
    ],
  });

  console.log("🎉 Messages sent successfully");
  await producer.disconnect();
};

run().catch(console.error);
