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
    //connection.end();
});
seeProducts = table => {
    connection.query('SELECT * FROM products', table, (err, res) => {
        if (err) throw err;
        storeState = res
        console.table(res);
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
        // console.log(input);
        // console.log(storeState)
        if (input.quantity <= storeState[input.item_id - 1].stock_quantity) {
            console.log(` there's enough`)
            //actually sell it to them (msyql  query)
            let stock_quantity = storeState[input.item_id - 1].stock_quantity
            let userQty = input.quantity;
            let userProdId = input.item_id;
            let inventory = stock_quantity - input.quantity
            console.log(stock_quantity, inventory, input.item_id)
            connection.query("UPDATE products SET?  WHERE ?", [{
                    stock_quantity: inventory
                }, {
                    item_id: userProdId
                }],
                (err, res) => {
                    if (err) {
                        throw err;
                    }
                    console.log(res)
                    // seeProducts()
                    console.log(totalPrice(userProdId, userQty))

                    connection.end();
                }
            )
            //when sale is complete: do you want to buy something else? if yes: seeproducts() else connection.end() process.exit(0)
        } else {
            console.log(` there's not enough, buy less of that`)
            seeProducts()

        }
    })
}

totalPrice = (userProdId, userQty) => {
    connection.query("SELECT price From products WHERE ? ;", {
            item_id: userProdId
        },
        (err, res) => {
            if (err) {
                throw err;
            }
            console.log(res[0])
            return res[0].price * userQty;

        }

    )
}