/**
 *
 * Asynchronously loads the component for MenuTree
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
