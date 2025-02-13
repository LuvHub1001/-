import { RedBlackTree } from "./RedBlackTree.mjs";

let rbTree = new RedBlackTree();
rbTree.insert(17);
rbTree.insert(9);
rbTree.insert(19);
rbTree.insert(75);
rbTree.insert(85);

rbTree.remove(19);
rbTree.remove(75);
rbTree.remove(85);

console.log(rbTree.root);

if (rbTree.root) {
  rbTree.root.inOrderTraversal(rbTree.root);
}
