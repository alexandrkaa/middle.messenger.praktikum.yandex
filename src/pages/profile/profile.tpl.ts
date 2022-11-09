export const tpl: string = `
<main class="profile-page">
  <article class="profile">
    <a href="/" class="profile__back">
      <span class="visually-hidden">Go back</span>
    </a>
    <section class="profile-main">
      <img
        class="profile-main__avatar"
        src="{{avatarImgSrc}}"
        alt="User avatar"
      />
      <h2 class="profile__person-name">{{userName}}</h2>
      {{{profileForm}}}
      <section class="profile-form">
        <div class="profile-block profile-block--link">
          <a href="./profile-edit.hbs" class="link">Update profile</a>
        </div>
        <div class="profile-block">
          <a href="./profile-password.hbs" class="link">Update password</a>
        </div>
        <div>
          <a href="#" class="link link--red">Logout</a>
        </div>
      </section>
    </section>
  </article>
</main>
`;
