export const tpl: string = `
  <p class="chat-message__content">{{text}}</p>
  <span class="chat-message__status chat-message__status--{{status}}">
    <span class="visually-hidden">Message status {{status}}</span>
  </span>
  <time datetime="{{datetime}}" class="chat-message__time">{{time}}</time>
`;

// chat-message--self
