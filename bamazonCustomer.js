const mysql = require('mysql'); // variable initialization (which is both declaration and assignment) const must be initialized
const inquirer = require('inquirer')
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon_db"
});
let storeState; //variable declaration

connection.connect(err => {
    if (err) throw err;
    console.log(`connected to threadId: ${connection.threadId}`);
    seeProducts();
    connection.end();
});
seeProducts = table => {
    connection.query('SELECT * FROM products', table, (err, res) => { //Read(crud) CRUD stands for Create-Read-Update-Delete //MYSQL INSERT-SELECT-
        if (err) throw err;
        storeState = res //variable assignment
        console.table(res); //ICEBOX look into .toFixed //ICEBOX don't show (index)
        buySomething()
    });
};

function buySomething() {

    inquirer.prompt([{
            type: 'input',
            message: "Please enter Item ID you would like to buy.",
            name: 'item_id',
        },
        {
            type: 'input',
            name: 'quantity',
            message: "How many item would you like?",
        }
    ]).then(function (input) {
        console.log(input);
        console.log(storeState)
        if (input.quantity <= storeState[input.item_id - 1].stock_quantity) {
            console.log(` there's enough`)
            //actually sell it to them (msyql  query)
            // connection.query("UPDATE: todos SET?  WHERE ?", [{
            //     quantity: quantity- sale
            // }, {
            //     id: input.id
            // }],
            // (err, res) => {
            //     if (err) throw err;
            // }

            //when sale is complete: do you want to buy something else? if yes: seeproducts() else connection.end() process.exit(0)


        } else {
            console.log(` there's not enough, buy less of that`)
            seeProducts()
        }
    })
}