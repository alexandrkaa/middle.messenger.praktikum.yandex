export const tpl = `

  <section class="chat__sidebar-nav">
    {{{addChatBtn}}}
    {{{profileLink}}}
  </section>
  <form class="chat__filter-form filter-form">
    <input type="text" name="filter" class="filter-form__filter" placeholder="search" />
  </form>
  <ul class="chat__chats-list chats-list">
    {{{chatTabs}}}
  </ul>
  {{{addChatFormModal}}}
`;

// <section class="modal modal--center visually-hidden">
//   <section class="modal-content user-action-modal">
//     <h2 class="modal-header">Add user</h2>
//     <form class="user-action-modal__form">
//       <div class="add-user__field-block field-block">
//         <input
//           type="text"
//           class="field-block__text-input"
//           placeholder="Login"
//           name="login"
//         />
//         <span class="field-block__placeholder">Login</span>
//         <span class="field-block__error">No user found</span>
//       </div>
//       <button type="submit" class="button user-action-modal__submit">
//         Add
//       </button>
//     </form>
//   </section>
// </section>;
