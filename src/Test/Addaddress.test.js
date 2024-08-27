import '@testing-library/jest-dom/extend-expect';
import React from 'react';
// import Login from "../customer/Components/Auth/Login";
import { render, screen, act } from '@testing-library/react';
import AddDeliveryAddressForm from '../customer/Components/Checkout/AddAddress';
 
 
jest.mock('axios');
jest.mock('react-router-dom');
 
describe('All Tests', ()=>{
    test('renders heading', ()=>{
        render(<AddDeliveryAddressForm/>);
        const linkElement = screen.getByRole("firstname");
        expect(linkElement).toBeInTheDocument();
      })
      test('renders heading', ()=>{
        render(<AddDeliveryAddressForm/>);
        const linkElement = screen.getByRole("lastname");
        expect(linkElement).toBeInTheDocument();
      })
      test('renders heading', ()=>{
        render(<AddDeliveryAddressForm/>);
        const linkElement = screen.getByRole("address");
        expect(linkElement).toBeInTheDocument();
      })
      test('renders heading', ()=>{
        render(<AddDeliveryAddressForm/>);
        const linkElement = screen.getByRole("city");
        expect(linkElement).toBeInTheDocument();
      })
      test('renders heading', ()=>{
        render(<AddDeliveryAddressForm/>);
        const linkElement = screen.getByRole("state");
        expect(linkElement).toBeInTheDocument();
      })
      test('renders heading', ()=>{
        render(<AddDeliveryAddressForm/>);
        const linkElement = screen.getByRole("pincode");
        expect(linkElement).toBeInTheDocument();
      })
      test('renders heading', ()=>{
        render(<AddDeliveryAddressForm/>);
        const linkElement = screen.getByRole("phonenumber");
        expect(linkElement).toBeInTheDocument();
      })

      
 
})