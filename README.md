## Overview

This is an example of how to use the [NextAuth.js](https://next-auth.js.org) library to add authentication to a [Next.js](https://nextjs.org) application with Typescript.

### About NextAuth.js

NextAuth.js is an easy to implement, full-stack (client/server) open source authentication library designed for [Next.js](https://nextjs.org) and [Serverless](https://vercel.com).

Go to [next-auth.js.org](https://next-auth.js.org) for more information and documentation.

> _NextAuth.js is not associated with Vercel or Next.js._

## Getting Started

### 1. Clone the repository and install dependancies

```
git clone git@github.com:jenisgadhiya910/poc-next-auth
cd poc-next-auth
npm install
```

### 2. Configure your local environment

Copy the .env.local.example file in this directory to .env (which will be ignored by Git):

```
cp .env.local.example .env
```

Add details for one or more providers (e.g. Google, Twitter, GitHub, Email, etc).


### 3. Configure Authentication Providers

- Review and update options in `pages/api/auth/[...nextauth].js` as needed.

- When setting up OAuth, in the developer admin page for each of your OAuth services, you should configure the callback URL to use a callback path of `{server}/api/auth/callback/{provider}`.

  e.g. For Google OAuth you would use: `http://localhost:3000/api/auth/callback/google`

  A list of configured providers and their callback URLs is available from the endpoint `/api/auth/providers`. You can find more information at https://next-auth.js.org/configuration/providers/oauth

### 4. Start the application

To run your site locally, use:

```
npm run dev
```

To run it it production mode, use:

```
npm build
npm start
```
