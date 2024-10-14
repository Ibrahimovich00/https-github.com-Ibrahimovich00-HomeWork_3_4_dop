let users = [
{id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

users.forEach(user => {
  user.admin = user.name === "Маша" ? true : false;
});

console.log(users);