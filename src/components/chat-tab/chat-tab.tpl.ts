export const tpl: string = `
  <img
    src="{{avatar}}"
    class="chat-tab__avatar"
    alt="User avatar"
  />
  <section class="chat-tab__header">
    <p class="chat-tab__name"><b>{{title}}</b></p>
    <time datetime="{{datetime}}" class="chat-tab__time">{{time}}</time>
  </section>
  <section class="chat-tab__body">
    <p class="chat-tab__text">
      {{#if isSelf}}
      <span class="chat-tab__last-sender">Вы:</span>
      {{/if}}
      {{text}}
    </p>
    <p class="chat-tab__unread-cnt">{{cnt}}</p>
  </section>
`;

// chat-tab--selected
// https://via.placeholder.com/47
