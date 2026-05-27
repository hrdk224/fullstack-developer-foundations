/*
 automated testing involves writing separate scripts (tests) that run your functions automatically
 and verify the results. 
 
 Behavior Driven Development (BDD) is a strategy where you write the specification (spec)—the tests, 
 documentation, and use-cases—before you actually write the software code.
 
 # 3 building block:

 test file is called "Spec" uses three core functions provided by testing framework like Mocha and assertion libraries 
 like Chai

 1. Function: describe("title", function) 
    what it does: groups related functions together
    example: decribe("pow",function(){...})

 2. Function: it("description", function)
    what it does: Describes a specific uses case holds the logic
    example: it("raises to n-th power", function() { ... })
 
 3. Function: assert.equal(a, b)
    what it does: checks it result a match expected results b
    example: assert.equal(pow(2, 3), 8);
    
 # Golden rule of testing
 
 If you have two independent checks, do not pack them into a single it block. Split them into separate it blocks.
 If the first check fails in a shared block, the code stops immediately, and you will never know if the second check 
 would have passed or failed.

 # Iterative BDD development flow

 [Write a failing test] ➔ [Write minimal code to pass] ➔ [Refactor & expand tests]

- Write the spec: Define what the function should do before creating it.
- Run tests: Watch them fail (because the function is empty or incomplete).
- Write implementation: Write just enough code to make the tests pass.
- Expand the spec: Add edge cases (e.g., What if the input is a negative number?).
- Repeat: Fix the code until all old and new tests pass perfectly.
 
# Test hooks before/after and beforeEach/afterEach

Hooks are setup and cleanup actions provided by Mocha to prepare conditions before tests run, or clean up data after they finish.
before / after: Runs once at the very beginning / end of the entire describe block.
beforeEach / afterEach: Runs repeatedly before / after every single it statement.
*/

describe('Database Tests', function () {
  before(() => console.log('Connect to DB'));
  after(() => console.log('Disconnect from DB'));

  beforeEach(() => console.log('Resetting table data...'));

  it('test 1', () => console.log('Running Test 1'));
  it('test 2', () => console.log('Running Test 2'));
});

// Execution order:
// 1. Connect to DB
// 2. Resetting table data... ➔ Running Test 1
// 3. Resetting table data... ➔ Running Test 2
// 4. Disconnect from DB
