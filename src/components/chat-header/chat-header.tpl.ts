export const tpl: string = `

  <img
    src="{{#if avatar}}{{avatar}}{{else}}https://via.placeholder.com/32{{/if}}"
    class="chat-text-block__avatar"
    alt="User avatar"
  />
  <p class="chat-text-block__name"><b>{{title}}</b></p>
  <button
    aria-label="Delete chat"
    class="chat-text-block__delete-chat"
  >
    <span class="visually-hidden">Delete chat</span>
  </button>
  <button class="chat-text-block__control-users">
    <span class="visually-hidden">Add / Remove user</span>
  </button>

`;
