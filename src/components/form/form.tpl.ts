export const tpl: string = `
  {{#if formTitle}}
    <h2 class="modal-header">{{formTitle}}</h2>
  {{/if}}
  {{{enterFields}}}
  <div class="enter-form__buttons-block">
    {{{submitButton}}}
    {{#if link}}
      {{{link}}}
    {{/if}}
  </div>
`;
