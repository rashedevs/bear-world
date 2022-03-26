import React from 'react';
import './Bonus.css'

const Bonus = () => {
    return (
        <div className='bonus-qa'>
            <section className="container mt-2 mb-5">
                <h4 className="text-primary mb-3 mt-3">Bonus section</h4>
                <div className="accordion" id="accordionExample" />
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            1. How React works?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>
                                As we know, javascript is a synchronous, single-threaded, interpreted language. It can run
                                through any modern browser engine or Node.js runtime.
                                The Execution context of the engine is consist of two main components, a heap..
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            2. Differences between props and state?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>
                                As we know, javascript is a synchronous, single-threaded, interpreted language. It can run
                                through any modern browser engine or Node.js runtime.
                                The Execution context of the engine is consist of two main components, a heap..
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            3. How useState works?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>
                                As we know, javascript is a synchronous, single-threaded, interpreted language. It can run
                                through any modern browser engine or Node.js runtime.
                                The Execution context of the engine is consist of two main components, a heap..
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Bonus;