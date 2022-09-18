import React from "react";
import ReactDOM from "react-dom";
import Button from "../button";

import {render} from '@testing-library/react';
// import * from "jest-dom/extend-expect";
import renderer from "react-test-renderer";

it("render without crashing ", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div);
})

it("render button correctly",()=>{
 const {getByTestId} = render(<Button label="click me please"></Button>)
 expect(getByTestId('button')).toHaveTextContent("click me please");
 
})

it("matches snapshot",()=>{
    const tree= renderer.create(<Button label="save"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})


it("render button correctly",()=>{
    const {getByTestId} = render(<Button label="save"></Button>)
    expect(getByTestId('button')).toHaveTextContent("save");
    
   })
