import React from 'react';
import ReactDom from 'react-dom';
import Car from '../Car';



it("Car Card render check", () => {
    const div = document.createElement("div");
    ReactDom.render(<Car data={{"image":"null","name":"Test Car", "price":"4949", "unit":"lakhs"}} />,div);
})