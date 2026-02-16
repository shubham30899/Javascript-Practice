class Notification {
  send(message) {
    throw new Error('send() must be implemented');
  }
}


class EmailNotification extends Notification {
  send(message) {
    console.log(`Sending EMAIL: ${message}`);
  }
}

class SMSNotification extends Notification {
  send(message) {
    console.log(`Sending SMS: ${message}`);
  }
}


class NotificationService {
  constructor(notifier) {
    this.notifier = notifier; // depends on abstraction
  }

  notify(message) {
    this.notifier.send(message);
  }
}
const emailNotifier = new NotificationService(new EmailNotification());
emailNotifier.notify('Welcome via Email');

const smsNotifier = new NotificationService(new SMSNotification());
smsNotifier.notify('Welcome via SMS');

// Later: add PushNotification without touching NotificationService
