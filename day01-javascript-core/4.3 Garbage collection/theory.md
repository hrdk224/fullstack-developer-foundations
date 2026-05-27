Here is a clean, scannable summary of JavaScript Garbage Collection based on the text provided.

---

# Summary: JavaScript Garbage Collection

Memory management in JavaScript is **automatic and invisible**. The engine automatically detects when data is no longer needed and frees up its memory.

---

## 1. The Core Concept: Reachability

An item is kept in memory only if it is **reachable** (accessible or usable).

### Roots

Roots are inherently reachable values that are never deleted. They include:

- The currently executing function, its local variables, and parameters.
- Other functions in the current nested call stack.
- Global variables.

### Reachable Values

An object is reachable if:

1. It is a root.
2. It can be accessed from a root via a reference or a chain of references.

> ⚠️ **Key Rule:** Incoming references make an object reachable, not outgoing ones. An entire **"unreachable island"** of interlinked objects will be deleted if it loses its connection to the roots.

---

## 2. How It Works: Mark-and-Sweep

The standard internal algorithm used by JavaScript engines runs in regular steps:

1. **Mark Roots:** The garbage collector identifies and marks all "roots".
2. **Trace References:** It visits and marks all objects referenced by those roots.
3. **Deep Dive:** It continues moving down the chain, marking references of references, ensuring no object is visited twice.
4. **Sweep:** Any object that remains **unmarked** is deemed unreachable and is permanently removed from memory.

---

## 3. Engine Optimizations

To prevent the process from slowing down code execution, modern JS engines (like V8) use advanced optimizations:

- **Generational Collection:** Splits objects into "new" (short-lived) and "old" (long-lived). The engine checks new objects frequently and ignores old objects until necessary.
- **Incremental Collection:** Splits the total workload into tiny parts. The engine runs multiple micro-collections instead of one massive, lagging pause.
- **Idle-time Collection:** The collector prefers to run only when the CPU is idle to reduce user-facing impact.

---

## Takeaways

- **Automation:** You cannot manually force or stop garbage collection in standard JS.
- **Reachability $\neq$ Being Referenced:** Just because two objects reference each other does not mean they are safe. If they cannot be reached from a root, they are deleted.
- **Engine-Specific:** Exact implementations and optimizations vary between different browsers and JavaScript engines.
