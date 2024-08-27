import '@testing-library/jest-dom/extend-expect';
import React from 'react';
// import Login from "../customer/Components/Auth/Login";
import { render, screen, act } from '@testing-library/react';
import PaymentPage from '../customer/Components/paymentSuccess/PaymentPage'; 
 
jest.mock('axios');
jest.mock('react-router-dom');
 
describe('All Tests', ()=>{
    test('renders heading', ()=>{
        render(<PaymentPage/>);
        const linkElement = screen.getByRole("upi");
        expect(linkElement).toBeInTheDocument();
      })
      test('renders heading', ()=>{
        render(<PaymentPage/>);
        const linkElement = screen.getByRole("cardholdername");
        expect(linkElement).toBeInTheDocument();
      })
 
    test('renders heading', ()=>{
        render(<PaymentPage/>);
        const linkElement = screen.getByRole("cardnumber");
        expect(linkElement).toBeInTheDocument();
      })
      test('renders heading', ()=>{
        render(<PaymentPage/>);
        const linkElement = screen.getByRole("password");
        expect(linkElement).toBeInTheDocument();
      })
     
 
})