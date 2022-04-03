import React from 'react';
const Layout = React.lazy(() => import('./layout'));

const App = () => (
  <React.Suspense fallback={<div>Loading Page...</div>}>
    <Layout/>
  </React.Suspense>
  )

export default React.memo(App);
