# Measmerize_Interview

The Task
--------------------

The problem as i understood it was to rearrange a flat array of unsorted nodes into a sorted tree structure, where every node is placed under its parent and along with its siblings.
If there is a null value for either 'parentId' or 'previousSiblingId', that means it either has no parent (root-level of the tree) or is the first child of its parent.
If a node is a parent of other node(s), these "children" should appear in an array property called children on the parent node. If a node has no child nodes, this children array should be empty.

--------------------
The solution
--------------------
I used a depth-first search (DFS) algorithm to solve this problem because it is well suited to traversing and manipulating tree structures, which is the type of data. DFS algorithms start at the root of the tree and traverse as deep as possible along each branch before backtracking.
They can be implemented recursively, allowing me to traverse the tree structure in a natural and intuitive way. In my code, the function **`addChildren`** is a recursive function that starts at the root of the tree and traverses down each branch, adding the children of each node to the **`children`** property of the parent node. 
This recursive function allowed me to easily traverse the tree and build the desired structure.
Another advantage of using DFS algorithm is that it is more memory-efficient compared to breadth-first search (BFS) algorithm since it does not need to store all the children of a node in memory before traversing to its next child.
Additionally, in this problem, we are supposed to sort the children of each node based on previousSiblingId property, DFS allows us to traverse the tree in a way that ensures that the nodes are sorted according to the previousSiblingId property as the tree is being constructed, which is beneficial for the problem statement.


--------------------
Space & time complexity
--------------------
The space complexity of this solution is O(n) and the time complexity is O(n log n).
The space complexity is O(n) because we are storing all the nodes in the tree array, and each node has a constant amount of additional properties, such as a children array. So the total space used is proportional to the number of nodes in the tree.
The time complexity is O(n log n) because of the sort function that is used to sort the children array based on the previousSiblingId property. The sort function has a time complexity of O(n log n) in the average and worst cases.

--------------------
Improvement
---------------------
Using a hashmap in conjunction with a DFS algorithm can make the solution more efficient in solving the problem for several reasons:

1. The hashmap allows for efficient lookup of nodes by their nodeId, which can be used to quickly access a node's parent and children. This allows for faster traversal of the tree structure as we can look up a node's parent or children in constant time rather than having to search through the entire tree.
2. When using DFS algorithm, we need to recursively traverse the tree and this can cause the function call stack to grow as we go deeper into the tree. This can cause memory issues when the tree is very deep. Using a hashmap in conjunction with DFS allows us to store the tree structure in a way that keeps the function call stack small and the memory usage low.
3. Using a hashmap in conjunction with DFS allows us to sort the children of each node based on the previousSiblingId property, which is required by the problem statement.
4. Hashmap can be used to store some additional information like the parent and previousSiblingId for each node, this will allow us to remove unnecessary logic in the DFS code and make it more readable.
The space complexity of adding a hashmap to a depth-first search algorithm is O(n), where n is the number of nodes in the tree. This is because we use a hashmap to store a mapping between each node's unique identifier and the corresponding node object. The size of the hashmap will be proportional to the number of nodes in the tree, so as the number of nodes increases, the space required for the hashmap will also increase linearly.

The time complexity of adding a hashmap to a depth-first search algorithm is also O(n), where n is the number of nodes in the tree. This is because we need to traverse the entire tree once to build the hashmap, and then we use the hashmap to quickly access the nodes we need during the DFS traversal. Since we are only visiting each node once, the time complexity of building the hashmap and the DFS traversal is linear in the number of nodes in the tree.

However, using a hashmap can make the algorithm more efficient as it allows us to quickly access a specific node in the tree without having to traverse the entire tree, which can be very useful if the tree is large. In other words, the tradeoff is that it increases the space complexity but decrease the time complexity and make the algorithm more efficient.

----------------------
Code Explanation 
----------------------
The code in 'd_search_tree.js', takes a flat array of unsorted nodes and rearranges them into a sorted tree structure. 

The code is divided into several steps:

Step 1: The code reads the nodes.json file, and it uses the built-in fs module to read the file. It then uses the JSON.parse method to parse the JSON string into a JavaScript object.

Step 2: It creates an empty array called tree, which will be used to store the sorted tree structure.

Step 3: It iterates over the nodes and filters out the nodes that have no parent and adds them to the tree array. It also adds an empty children array to each node.

Step 4: It creates a function called addChildren, which takes in a node and its parentId as arguments. This function finds all the children of the given parent node by filtering the nodes array. If the children array is not empty it sorts the children array based on the previousSiblingId property, and then it iterates over each child, adds an empty children array to it, pushes the child to the parent node's children array and calls the function recursively with the child node and its nodeId as arguments.

Step 5: It calls the addChildren function for each root node.

Step 6: It converts the tree to a JSON string.

Step 7: It writes the JSON string to a file called ds_tree.json using the built-in fs module.

Finally, the sortNodes() function is called. This function reads a json file, sorts the nodes and writes the sorted tree to an output file as a json.

----------------------
Output
----------------------
The generated output is written into the output file - Each node has the correct parentId and previousSiblingId properties, and each node has a children property, even if it's an empty array, indicating that it has no children. 
The children of each node are sorted based on their previousSiblingId property, and the overall tree is in the correct depth-first traversal order.

----------------------
How to run
----------------------
I use VScode so ran this in my terminal in VScode.

1. Make sure that you have Node.js installed on your computer.
2. Make sure that you have the input file called "nodes.json" with the data that you want to transform.
3. In the terminal, navigate to the folder where the code is located using the cd command.
4. Run the command "node d_search_tree.js" to execute the code.
5. After the code finishes running, a new file called "ds_tree.json" will be created in the "output" folder.
6. You can open this file to see the sorted tree structure.
