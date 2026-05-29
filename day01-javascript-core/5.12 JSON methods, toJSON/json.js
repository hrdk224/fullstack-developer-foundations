/* Task 1



let user = {
  name: 'John Smith',
  age: 35,
};

let user2 = JSON.parse(JSON.stringify(user));
console.log(user2);

Task 2


*/
let room = {
  number: 23,
};

let meetup = {
  title: 'Conference',
  occupiedBy: [{ name: 'John' }, { name: 'Alice' }],
  place: room,
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    return key != '' && value == meetup ? undefined : value;
  }),
);

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/
