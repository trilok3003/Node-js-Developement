const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT = 8000;
let accounts = [];
app.get(`/`, (request, response) => {
    // console.log(request.url);
    response.send('Hello, /');
  });
//   app.get(`/`, (request, response) => {
//     response.send(`
//       <div>
//         <h1>Todo List</h1>
//         <ul>
//           <li style="text-decoration:line-through">Learn about Express routing</li>
//           <li style="text-decoration:line-through">Create my own routes</li>
//         </ul>
//       </div>
//     `);
//   });


app.get(`/accounts`, (request, response) => {
  response.json(accounts);
});

app.get(`/accounts/:id`, (request, response) => {
  const accountId = Number(request.params.id);
  const getAccount = accounts.find((account) => account.id === accountId);

  if (!getAccount) {
    response.status(500).send('Account not found.')
  } else {
    response.json(getAccount);
  }
});

app.post(`/accounts`, (request, response) => {
    const incomingAccount = request.body;
    console.log(incomingAccount)
    accounts.push(incomingAccount);
  
    response.json(accounts);
  })

  app.put(`/accounts/:id`, (request, response) => {
    const accountId = Number(request.params.id);
    const body = request.body;
    const account = accounts.find((account) => account.id === accountId);
    const index = accounts.indexOf(account);
  
    if (!account) {
      response.status(500).send('Account not found.');
    } else {
      const updatedAccount = { ...account, ...body };
  
      accounts[index] = updatedAccount;
  
      response.send(updatedAccount);
    }
  });

  app.delete(`/accounts/:id`, (request, response) => {
    const accountId = Number(request.params.id);
    const newAccounts = accounts.filter((account) => account.id != accountId);
  
    if (!newAccounts) {
      response.status(500).send('Account not found.');
    } else {
      accounts = newAccounts;
      response.send(accounts);
    }
  });
app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));