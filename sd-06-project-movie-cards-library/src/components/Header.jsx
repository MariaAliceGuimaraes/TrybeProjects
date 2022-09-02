import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className="page-title">Movie Cards Library</h1>
      </header>
    /* aqui definimos como é o nosso header e quais elementos ele possui dentro dele */
    );
  }
}

export default Header;
/* aqui exportamos o Header para podermos acessa-lo no App.js
export "default" para exportar so um objeto, apenas um item.
cada arquivo so pode ter um */
