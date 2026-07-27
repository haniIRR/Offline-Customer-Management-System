# Technologies & Concepts Used

## Frontend

- HTML5
- Tailwind CSS
- Responsive UI Design
- Dark Mode using Tailwind CSS class strategy


## JavaScript Concepts

### ES6+ Features
- ES6 Modules (import / export)
- Arrow Functions
- Template Literals
- Destructuring
- Optional Chaining
- Ternary Operator
- Object Handling


### Asynchronous JavaScript
- Promise
- Async / Await
- Asynchronous IndexedDB Operations


### DOM Manipulation
- Creating dynamic HTML elements
- createElement()
- append()
- remove()
- innerHTML
- querySelector()
- Dynamic Modal Creation
- Dynamic Table Rendering


### Event Handling
- addEventListener()
- Click Events
- Input Events
- Event-driven programming


### Advanced JavaScript Concepts
- Closure
- Factory Functions
- Callback Functions
- Debounce Pattern


### Array Methods
- forEach()
- filter()


## Browser APIs

### IndexedDB API
Used as a client-side database for offline data storage.

Implemented CRUD operations:

- Create: Add customer records
- Read: Retrieve customer data
- Update: Edit customer information
- Delete: (planned)


### Timer API

- setTimeout()
- clearTimeout()

Used for:
- Debounce implementation
- Auto removing notifications


## Application Features

- Customer Management System
- Add Customer
- Update Customer
- Search Customers
- Toast Notification System
- Dark / Light Theme UI
- Offline Data Storage
- Dynamic Table Rendering
- Modal Form Handling


## Design Patterns

### Module Pattern
Project structure separated into independent modules:

- Database.js
- AddModal.js
- SearchCustomer.js
- Notification.js


### Factory Function Pattern

Used for creating reusable behaviors:

- Toast Notification System
- Debounce Function


### CRUD Architecture

Separated responsibilities:

UI Layer
|
Database Layer
|
IndexedDB Storage


## Tools

- Visual Studio Code
- Browser DevTools
- IndexedDB Storage
