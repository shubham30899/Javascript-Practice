const { Kafka } = require('kafkajs');

const kafka = new Kafka({ clientId: 'my-app', brokers: ['localhost:9092'] });
const admin = kafka.admin();

(async () => {
  await admin.connect();
  await admin.deleteTopics({ topics: ['test-topic'] });
  await admin.disconnect();
})();