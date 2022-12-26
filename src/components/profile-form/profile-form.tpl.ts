export const tpl: string = `
  <img
    class="profile-main__avatar profile-main__avatar-img"
    src="{{#if avatarImgSrc}}https://ya-praktikum.tech/api/v2/resources{{avatarImgSrc}}{{/if}}"
    alt="User avatar"
  />
  <h2 class="profile__person-name">{{userName}}</h2>
  {{{profileFields}}}
  {{#if submitBtn}}
    {{{submitBtn}}}
  {{/if}}
`;
