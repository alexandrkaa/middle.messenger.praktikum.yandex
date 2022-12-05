export const tpl: string = `
  <article class="chat">
    <h1 class="visually-hidden">Chat messenger App</h1>
    {{{sideBar}}}
    <section class="chat__chat-text-block chat-text-block">
      <section class="chat-text-block__header">
        <img
          src="{{avatarSrc}}"
          class="chat-text-block__avatar"
          alt="User avatar"
        />
        <p class="chat-text-block__name"><b>{{name}}</b></p>
        <button
          aria-label="Delete chat"
          class="chat-text-block__delete-chat"
        >
          <span class="visually-hidden">Delete chat</span>
        </button>
        <button class="chat-text-block__control-users">
          <span class="visually-hidden">Add / Remove user</span>
        </button>
      </section>
      <section class="chat-text-block__body">
        <ul class="chat-text-block__chat-messages chat-messages">
          {{{chatMsgs}}}
        </ul>
      </section>
      {{{chatForm}}}
    </section>
  </article>
`;

// > link/link class="profile-link" href="../profile/profile.hbs" title="Profile >"
// https://via.placeholder.com/32
