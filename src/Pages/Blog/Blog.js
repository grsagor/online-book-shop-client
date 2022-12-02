import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-3xl mt-4'>Blog</h2>
            <div>

                <div className="card bg-base-300 shadow-xl w-3/4 mx-auto my-4">
                    <div className="card-body">
                        <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                        <p className='text-left'>React's useState is the best option for local state management. If you need a global state solution, the most popular ones are Redux, MobX, and the built-in Context API. Your choice will depend on the size of your project, your needs, and your engineers' expertise.</p>
                    </div>
                </div>

                <div className="card bg-base-300 shadow-xl w-3/4 mx-auto my-4">
                    <div className="card-body">
                        <h2 className="card-title">How does prototypical inheritance work?</h2>
                        <p className='text-left'>
                            Classical inheritance is limited to classes inheriting from other classes. However prototypal inheritance includes not only prototypes inheriting from other prototypes but also objects inheriting from prototypes.</p>
                    </div>
                </div>

                <div className="card bg-base-300 shadow-xl w-3/4 mx-auto my-4">
                    <div className="card-body">
                        <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
                        <p className='text-left'>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. <br /> <br />
                        For Test-Driven Development (TDD), you write unit tests before writing any implementation. This makes your implementation details in your code shorter and easier to understand. In this instance, the best time to write unit tests is immediately. For others, most developers write unit tests after the code's been written.</p>
                    </div>
                </div>

                <div className="card bg-base-300 shadow-xl w-3/4 mx-auto my-4">
                    <div className="card-body">
                        <h2 className="card-title">React vs. Angular vs. Vue?</h2>
                        <p className='text-left'>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;