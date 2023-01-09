export const tpl: string = `

  <article class="profile">
    {{{profileBack}}}
    <section class="profile-main">
      {{{profileForm}}}
      <section class="profile-form">
        {{#if toProfile}}
        <div class="profile-block">
          {{{toProfile}}}
        </div>
        {{/if}}
        {{#if profileUpdate}}
        <div class="profile-block">
          {{{profileUpdate}}}
        </div>
        {{/if}}
        {{#if profilePassword}}
        <div class="profile-block">
          {{{profilePassword}}}
        </div>
        {{/if}}
        <div>
          {{{profileLogout}}}
        </div>
      </section>
    </section>
  </article>

`;
