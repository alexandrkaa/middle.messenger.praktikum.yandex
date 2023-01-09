export const tpl: string = `
  <img
    src="{{#if avatar}}{{avatar}}{{else}}https://via.placeholder.com/32{{/if}}"
    class="chat-text-block__avatar"
    alt="User avatar"
  />
  <p class="chat-text-block__name"><b>{{title}}</b></p>
  {{{deleteChat}}}
  {{{addRemoveUserModalBtn}}}
  {{{controlUsersModal}}}
  {{{addUserModal}}}
  {{{removeUserModal}}}
`;
