import { render,screen } from "@testing-library/react"
import { Home } from "./Home";

test('Testing my home component', () => { 
    render(<Home />);
    const data= screen.getByText(/home/i);
    expect(data).toBeInTheDocument();
    
})