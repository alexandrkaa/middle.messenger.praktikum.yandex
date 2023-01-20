export const tpl: string = `
  {{#if title}}
    {{title}}
  {{/if}}
  {{#if a11y}}
    <span class="visually-hidden">{{a11y}}</span>
  {{/if}}
`;
