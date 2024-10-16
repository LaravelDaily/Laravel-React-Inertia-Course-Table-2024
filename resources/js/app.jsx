import './bootstrap';

import React from 'react';
import { createRoot } from 'react-dom/client';
import PostsIndex from './components/Posts/Index.jsx';

const reactComponents = {
    'posts-index': PostsIndex,
};

document.querySelectorAll('[data-react-component]').forEach(domElement => {
    const componentName = domElement.dataset.reactComponent;
    const Component = reactComponents[componentName];
    if (Component) {
        const root = createRoot(domElement);
        root.render(<Component />); // Make sure JSX is properly parsed here
    }
});
