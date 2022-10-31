# MyStore Project Overview

MyStore is the final project of the Angular course of UDACITY`s Full Stack Developer program. I used no starter code,
but the build relates to the content and exercises of the program.

## Project features

The application reflects the same user experience as that of a real-world e-commerce website. This means a user can view
a list of available products to purchase and add them to a shopping cart. After the user has registered he can complete
the checkout process. Ultimately, a user that is signed in can check the five current purchases through the menu.

* **Product list** page, which displays the available products for the user to choose and add to their cart (in various
  quantities)
* **Product details** page, which displays more information about any particular product
* **Shopping cart**, which includes the products that the user has added to their cart
* **SignUp form**, which collects information about the user (e.g., name, address, payment details, etc.)
* **Checkout form**, which shows collected information about the user and asks form confirmation
* **Order confirmation page**, which shows the outcome after the user completes the checkout process (i.e., submits the
  checkout form)

## Getting Started

To get started clone the project and execute `npm i ` in your CLI to install all dependencies necessary to run the
project. As this project consumes data from an external api from a previous course, the installation of "storefront
backend" is needed as well.

* clone [storefront backend](https://github.com/CrazyBee81/storefront_backend.git).
* `npm i ` in your CLI to install all dependencies
* follow the steps to set up a database from README
* run backend with command "npm run watch" on localhost:3000

After this, the project is ready to start. Type "ng serve" to run the single-page application on localhost:4200 in your
browser.

## Setting up the store

Our newly created database is still empty. To have a properly equipped store, we will have to insert some products via
an endpoint manually, which is provided by the storefront backend. However, first, we will have to create a new user.

### Creating a new user

There are two ways to create a new user.
<ol>
 <li> Using the sign-up button of the frontend´s drop-down menu </li>
 <li> Sending a request to the create route of the backend. </li>
</ol>

**Route** localhost:3000/users [POST]

**Payload (example)**

    {
      "firstname": "reinhold",
      "lastname": "beenie",
      "password": "crazyBee",
      "mail": "crazy@rbeny.de",
      "address": "reeperbahn 1",
      "city": "Hamburg",
      "zipCode": 20001,
      "state": "Hamburg",
      "creditcard": 1234567891  
    }

### Insert products for the shop

The structure of products follows the file provided in ./assets/data.json

**Route**
[token required] http://localhost:3000/products [POST]

**Payload (example)**

    {
    "id": 1,
    "product_name": "Book",
    "price": 9,
    "url": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "description": "You can read it!",
    "category": "Books"
    }

## License

[License](LICENSE.txt)
