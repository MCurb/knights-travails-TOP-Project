# ♞ Knight Travails
This project is part of my **Data Structures and Algorithms** practice from [The Odin Project](https://www.theodinproject.com/lessons/javascript-knights-travails).
It focuses on finding the **shortest path a knight can take** on a standard chessboard — from a given start position to a target position — using an **implicit graph** and **Breadth-First Search (BFS).**

## 🧠 Key Learnings
This project helped me deepen my understanding of:
- How **graphs** can be represented implicitly (without explicitly storing nodes and edges)
- How **Breadth-First Search (BFS)** guarantees the shortest path in an unweighted graph
- How to think in **algorithms**, not just in code — especially when modeling real-world movement (like a chess knight)
- Translating logical ideas into **step-by-step implementations**

## ⚙️ Project Overview
The function `knightMoves(start, end)` returns the shortest sequence of moves a knight would take to reach its destination.

```javascript
knightMoves([3, 3], [0, 7]);
// Example Output:
// You made it in 3 moves! Here's your path:
// [ [3, 3], [4, 5], [2, 6], [0, 7] ]
```
Each position is represented by a coordinate pair [x, y],
where both x and y are integers from 0 to 7.

## 🧩 How It Works
- The chessboard is treated as an **8x8 grid**, but instead of building it explicitly, each possible knight move generates valid coordinates on the *fly* (implicit graph).
- **BFS** explores all positions level by level, ensuring that the first time the target square is reached, the path is guaranteed to be the shortest.
- The path is reconstructed by tracking each node’s parent.

## 📚 Concepts Reinforced
- Graph Theory
- Breadth-First Search (BFS)
- Implicit Graphs
- Path Reconstruction
- Queue Data Structure
- Algorithmic Thinking

## 🧑‍💻 Author
**Marcos Curbeco**
[The Odin Project Student](https://www.theodinproject.com/dashboard) | Web Developer in Progress
