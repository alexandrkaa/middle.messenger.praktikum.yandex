import { Block, TAll } from "../system/block/block";

function render(query: string, block: Block<TAll>) {
  const root = document.querySelector(query);
  if (!root) {
    return;
  }

  root.append(block.getContent());
  return root;
}

export { render };
