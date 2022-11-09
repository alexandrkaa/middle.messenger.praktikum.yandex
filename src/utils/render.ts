import { Block } from "../system/block/block";

function render(query: string, block: Block<Record<string, unknown>>) {
  const root = document.querySelector(query);
  if (!root) {
    return;
  }

  root.append(block.getContent());
  return root;
}

export { render };
