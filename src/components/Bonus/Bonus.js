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
                                React implements a virtual DOM that is essentially a DOM tree representation in javascript. So whilst it desires to examine or write to the DOM, it's going to use the virtual illustration of it. Then the virtual DOM will attempt to locate the maximum green way to update the browser's dom.
                                Not like browser DOM factors, react factors are simple objects and are cheap to create. React DOM takes care of updating the DOM to enrich the react elements. The motive for that is that javascript is very rapid and it's really worth preserving a DOM tree in it to speed up its manipulation.
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
                                We can access data from the previous factor by using props, as the data is being flowed in a unidirectional manner. React uses information transmission props that we want to transfer to various additives.
                                The difference comes in which factor the data are owned. State is owned locally and the element itself updates it. Props are owned and read-handiest by a discern. Props may be changed only if an upstream shift is due to a callback characteristic exceeded directly to the child. A prop can be passed on to the child in the state of a figure. They practice to the same value but can only be updated by the parent variable.
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
                                As we know, It's not possible to update the props a component receives; only to read them. React provides an expansion of special features that allows us to offer new abilities to additives, like state. useState is a hook that allows us to have state variables in useful additives. By passing the initial state to this function, it returns a variable with the cutting-edge state value (now not always the initial state) and any other function to replace this value.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Bonus;