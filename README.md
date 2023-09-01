# Task 3 


##

    - Question 1 is explained below on the README.md file
    - Question 2 code is embeded in scripts.js
    - Question 3 code is embeded in fileBackUp.js, with intial data in content and results in Update
        - To test Question 3 Please delete all files within updates directory




### Question 1: Explanation of basic Concepts

1. Explain the following to the best of your ability

a. Reactor pattern : The Reactor Pattern is a design pattern used in computer programming to handle asynchronous I/O operations efficiently. It is relevant in situations where an application needs to manage several I/O operations concurrently, such as in network programming or event-driven systems. The main idea behind the Reactor Pattern is to have a central event loop, often called the "reactor," that monitors multiple input sources (e.g., sockets, files) for events like data arrival, connection requests, or timeouts. When an event occurs, the reactor dispatches the appropriate handler or callback associated with that event. This allows the application to remain responsive while efficiently handling multiple I/O operations without dedicating a thread or process to each operation. The reactor pattern is expecially useful as it abstracts away the low-level details of managing asynchronous tasks and helps developers focus on writing event-driven code without having to manage complex synchronization and concurrency issues themselves.

b. Callback pattern: Also known as the "callback function" or "callback mechanism," is a programming technique used in asynchronous programming. It involves passing a function (the callback) as an argument to another function. The primary purpose of the callback is to be executed at a later point in time, often when a specific event or task completes. Callbacks are frequently used in scenarios where the order of execution is non-linear or when tasks might take an unpredictable amount of time to complete. By providing a callback, a program can define what action should be taken once a certain task is finished. This pattern is commonly used in event handling, timers, and asynchronous I/O operations.

c. The module system: In computer programming, a module system refers to a way of organizing and structuring code by breaking it down into smaller, manageable units called modules. Each module encapsulates a set of related functionalities, variables, and definitions. The primary goal of a module system is to promote modularity, reusability, and maintainability of code by allowing developers to separate concerns and manage complexity effectively.

Modules typically offer the following benefits:

Encapsulation: Modules hide internal details and expose only necessary interfaces, reducing the risk of unintended interactions between different parts of the program.

Organization: Modules provide a clear structure for code, making it easier to locate and understand different functionalities.

Reusability: Modules can be reused in different parts of an application or in different applications altogether, saving development time and effort.

Dependency Management: Module systems often handle the dependencies between different modules, ensuring that they are loaded in the correct order.

Name-spacing: Modules prevent naming conflicts by allowing items (variables, functions) to be defined within their own scope.
In JavaScript, the CommonJS and ES6 (ECMAScript 2015) module systems allow you to export and import objects between modules using require and import statements respectively.

In languages like Java and C#, packages and namespaces provide a way to organize and encapsulate code, acting as module-like structures.

Overall, module systems enhance code organization, maintainability, and collaboration in software development projects.
