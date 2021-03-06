# Typeorm + React(with NextJS) Full-Stack Web Authentication Boilerplate

## About This Boilerplate

The code base is entirely using TypeScript(I just like it more than any language(including Python, C++ and Javascript)).

It empowers incredible abilities such as consistent type definitions on both sides, and intuitive workflows integrating graphql code generators and all that fun stuff.

**Update Aug 21 2021**: We decided to integrate NextJS.

## Get Started

```bash
git clone --single-branch --branch publish https://github.com/timthedev07/typeorm-react-auth-boilerplate.git
cd typeorm-react-auth-boilerplate
rm -rf .git # ignore this step if your are contributing to the repository
sh setup.sh
```

Then follow the instructions in each of the README files respectively.

## Server Side Information

**Note:** Further details are described in [it's own README](server/README.md)

- Uses apollo-server-express to connect to the corresponding Apollo client and runs on top of NodeJS.
- Uses Typeorm as the orm library.

## Client Side Information

**Note:** Further details are described in [it's own README](client/README.md)

- Built with NextJS.
- Uses apollo client to make requests to our GraphQL API.

## Why Use This?

It is a pretty solid boilerplate to me and I guess I'll use it a lot in the future for developing graphql + NextJS applications.
For people who prefer GraphQL over REST, this is the right template for you if your want to develop a full-stack web application with basic authentication.

## Live Demo

Visit the live demo [here](https://typeorm-react-auth-boilerplate.netlify.app/)

- Todo: migrate live demo to vercel
