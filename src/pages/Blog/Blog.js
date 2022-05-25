import React from 'react';
import { VscCircleFilled } from "react-icons/vsc";

const Blog = () => {
  return (
    <div className='md:px-12'>
      <h1 className="text-4xl mt-5 mb-10 text-blue-900 font-bold text-center">Questions Part.</h1>

      <div className='grid md:grid-cols-3 gap-4'>
        <div class="card w-96 bg-base-100 shadow-xl image-full">
          <figure><img src="https://img.freepik.com/free-photo/programming-code-abstract-technology-background-software-developer-computer-script_34663-31.jpg?w=740" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="text-xl">1.How will you improve the performance of a React Application?</h2>
            <p>To improve the performance we need to aware these things given below:

              <li> Keeping component state local where necessary.</li>
              <li>Memoizing React components to prevent unnecessary re-renders.</li>
              <li>Profiling the React app to understand where bottlenecks are!</li>
              <li>Using Hook when needed.</li>
              <li>Lazy loading images which prevents the creation of unnecessary DOM nodes, boosting the performance of our React application</li>
            </p>

          </div>
        </div>

        <div class="card w-96 bg-base-100 shadow-xl image-full">
          <figure><img src="https://img.freepik.com/free-photo/block-chain-network-concept-technology-background_34663-90.jpg?w=740" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="text-xl">2. What are the different ways to manage a state in a React application?</h2>
            <p>There are four main types of state we need to properly manage in our React apps:

              <li>Local (UI) state: Local state is data we manage in one or another component.</li>
              <li>Global state: Global state is data we manage across multiple components.</li>
              <li>Server state:  Data that comes from an external server that must be integrated with our UI state.</li>
              <li>URL state: Data that exists on our URLs, including the pathname and query parameters.</li>
            </p>
          </div>
        </div>

        <div class="card w-96 bg-base-100 shadow-xl image-full">
          <figure><img src="https://img.freepik.com/free-photo/programming-code-abstract-technology-background_34663-61.jpg?w=740" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="text-xl">3. How does prototypical inheritance work?</h2>
            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <div class="card w-96 bg-base-100 shadow-xl image-full">
          <figure><img src="https://as1.ftcdn.net/v2/jpg/00/77/95/96/1000_F_77959657_k8mcSy2B9jRETf2Es6lVcx0c0HMize0Z.jpg" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="text-xl">4. Why you do not set the state directly in React?</h2>
            <p>One should never update the state directly because of the following reasons:
              <li>If you update it directly, calling the setState() afterward may just replace the update you made.</li>
              <li>When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</li>
              <li>You will lose control of the state across all components.</li>
            </p>
          </div>

        </div>
        <div class="card w-96 bg-base-100 shadow-xl image-full">
          <figure><img src="https://img.freepik.com/free-photo/big-data-futuristic-visualization-abstract-illustration_34663-80.jpg?w=740" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="text-xl">5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
            <p>
              Using findIndex: findIndex method is used to find the index of first element in the array based on a function parameter. You can use the findIndex value like this, which runs a function for each item in the array, which is passed the element, and its index.
            </p>
          </div>

        </div>
        <div class="card w-96 bg-base-100 shadow-xl image-full">
          <figure><img src="https://img.freepik.com/free-photo/big-data-futuristic-visualization-abstract-illustration_34663-80.jpg?w=740" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="text-xl">6. What is a unit test? Why should write unit tests?</h2>
            <p>
              Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly.
            </p>
            <p>It also ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently</p>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Blog;