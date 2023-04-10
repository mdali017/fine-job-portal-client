import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='border bg-indigo-300 h-80 mb-24'>
                <h1 className='mt-40 text-3xl  font-extrabold tracking-wide'>Some Important Question </h1>
            </div>
            <div className=' grid grid-cols-2 gap-8'>
                <div className='border p-12'>
                    <h1 className='text-2xl font-bold mb-5'>What is Context Api and When to Use It</h1>
                    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                    <p>A ref created with useRef will be created only when the component has been mounted and preserved for the full lifecycle</p>
                    <p>Refs can be used for accessing DOM nodes or React elements, and for storing mutable variables (like with instance variables in class components).</p>
                    <p>Updating a ref is a side effect so it should be done only inside a useEffect (or useLayoutEffect) or inside an event handler.</p>
                </div>
                <div className='border p-12'>
                    <h1 className='text-2xl font-bold mb-5'>What is useRef() in React</h1>
                    <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                    <p>However, sometimes the same data needs to be accessible by many components in the tree, and at different nesting levels. Context lets you “broadcast” such data, and changes to it, to all components below. Common examples where using context might be simpler than the alternatives include managing the current locale, theme, or a data cache.</p>

                </div>
                <div className='border p-12'>
                    <h1 className='text-2xl font-bold mb-5'>What is useMemo() in React</h1>
                    <p>React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed. In our example below we have an expensive function called computeLetterCount (for demo purposes we make it slow by including a large and completely unnecessary loop). When the current selected word changes you'll notice a delay as it has to recall computeLetterCount on the new word. We also have a separate counter that gets incremented every time the increment button is clicked. When that counter is incremented you'll notice that there is zero lag between renders.</p>
                    
                </div>
                <div className='border p-12'>
                    <h1 className='text-2xl font-bold mb-5'>What is Custom Hooks</h1>
                    <p>Hooks are reusable functions.

                        When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.

                        Custom Hooks start with "use"</p>
                        <p>Custom React JS hooks can help developers save time, are reliable, reusable, and make the code clean. Creating custom React JS hooks is relatively easy, and you can search for many open sources where you can get some custom hooks from the library already created by developers.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;