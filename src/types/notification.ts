export type MessageType = 'success' | 'error' | 'danger';

export type Notification = {
  type: MessageType;
  message: string;
  duration?: number;
};
