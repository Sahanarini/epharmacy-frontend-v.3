import '@testing-library/jest-dom/extend-expect';
import React from 'react';
// import Login from "../customer/Components/Auth/Login";
import { render, screen, act } from '@testing-library/react';
import CreateProductForm from '../Admin/componets/createProduct/CreateProductFrom';
 
 
jest.mock('axios');
jest.mock('react-router-dom');
 
describe('All Tests', ()=>{
    test('renders heading', ()=>{
        render(<CreateProductForm/>);
        const linkElement = screen.getByRole("imageurl");
        expect(linkElement).toBeInTheDocument();
      })
      test('renders heading', ()=>{
        render(<CreateProductForm/>);
        const linkElement = screen.getByRole("brand");
        expect(linkElement).toBeInTheDocument();
      })
 
    test('renders heading', ()=>{
        render(<CreateProductForm/>);
        const linkElement = screen.getByRole("title");
        expect(linkElement).toBeInTheDocument();
      })
      test('renders heading', ()=>{
        render(<CreateProductForm/>);
        const linkElement = screen.getByRole("dosage");
        expect(linkElement).toBeInTheDocument();
      })
      test('renders heading', ()=>{
        render(<CreateProductForm/>);
        const linkElement = screen.getByRole("quantity");
        expect(linkElement).toBeInTheDocument();
      })
      test('renders heading', ()=>{
        render(<CreateProductForm/>);
        const linkElement = screen.getByRole("price");
        expect(linkElement).toBeInTheDocument();
      })
      test('renders heading', ()=>{
        render(<CreateProductForm/>);
        const linkElement = screen.getByRole("discountedprice");
        expect(linkElement).toBeInTheDocument();
      })
      test('renders heading', ()=>{
        render(<CreateProductForm/>);
        const linkElement = screen.getByRole("discountpercent");
        expect(linkElement).toBeInTheDocument();
      })
 
})