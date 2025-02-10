# Michael's NextJS Coding Challenge

## The Challenge:
Some newb has made a mess of this code. There are TODOs that need finishing off, broken and questionable tests and the code itself is inefficient.  
Please fix up whatever mess you find to get this piece of work working well.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, `npm install`, then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run the testing and linting with `npm run test` and `npm run lint`.

# Haritha's Solution for NextJS Coding Challenge

* Fixed the issue where the item count was not updating.
* The Grid class displays a single column on mobile screens and two columns on tablets.
* Refactored the codebase and created reusable components. The `page.tsx` file is now cleaner and doesn't handle multiple responsibilities.
* The `Home` component is no longer a client-side component.
* Integrated `ItemProvider` to manage state across multiple components.
* Only the **chosen** items are displayed in the basket list.
* Fixed an issue where the item count in the Basket was not visible on smaller screen sizes.
* Applied the **3A (Arrange, Act, Assert)** testing practice in the `test.tsx` file.
* Used `@testing-library/user-event` to handle click events on unit tests.
* Added additional assertions to the `test.tsx` file.
* Added a `strings.ts` file to centralize the management of all static strings.
