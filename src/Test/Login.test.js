import '@testing-library/jest-dom/extend-expect';
import React from 'react';
// import Login from "../customer/Components/Auth/Login";
import { render, screen, act } from '@testing-library/react';
// import { Login } from '../customer/Auth/Login';
import LoginUserForm from '../customer/Components/Auth/Login';
 
 
jest.mock('axios');
jest.mock('react-router-dom');
 
describe('All Tests', ()=>{
 
    test('renders heading', ()=>{
        render(<LoginUserForm/>);
        const linkElement = screen.getByRole("email");
        expect(linkElement).toBeInTheDocument();
      })
      test('renders heading', ()=>{
        render(<LoginUserForm/>);
        const linkElement = screen.getByRole("password");
        expect(linkElement).toBeInTheDocument();
      })
 
})