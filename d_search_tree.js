const fs = require('fs');

function sortNodes() {
    // Step 1: Read the nodes.json file
    let nodes = JSON.parse(fs.readFileSync('input/nodes.json', 'utf8'));

    // Step 2: create an empty tree
    let tree = [];

    // Step 3: add root nodes to the tree
    nodes.forEach(node => {
        if (!node.parentId) {
            node.children = [];
            tree.push(node);
        }
    });

    // Step 4: create a function to add children nodes to the tree
    function addChildren(node, parentId) {
        let children = nodes.filter(n => n.parentId === parentId);
        if (children.length) {
            children.sort((a, b) => a.previousSiblingId - b.previousSiblingId);
            children.forEach(child => {
                child.children = [];
                node.children.push(child);
                addChildren(child, child.nodeId);
            });
        }
    }
    

    // Step 5: call the addChildren function for each root node
    tree.forEach(root => {
        addChildren(root, root.nodeId);
    });

    // Step 6: Convert the tree to a JSON string
    let jsonTree = JSON.stringify(tree);

    // Step 7: Write the JSON string to a file
    fs.writeFileSync('./output/ds_tree.json', jsonTree);
}

sortNodes();
