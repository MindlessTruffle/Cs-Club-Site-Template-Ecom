import React from 'react';
import ItemDetailCart from './itemPage';

function Home() {
  return (
    <main>
      {/* For now there is no "Browse" or "home" because Im lazy so it routes automatically to itemsPage. CHANGE IN FUTURE */}
      <ItemDetailCart />
    </main>
  );
}

export default Home;
