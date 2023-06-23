import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <div className="navbar-menu">
      <div className="container">
        <h1 class="text-3xl font-bold">Logo</h1>
        <ul>
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
          <li>Item4</li>
          <li>Item5</li>
          <li>Item6</li>
        </ul>
        <CartWidget />
      </div>
    </div>
  );
};
