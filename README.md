# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deploying to Vercel

1. Push this repository to GitHub (see below), then in Vercel choose **Add New → Project** and import that repository.
2. Vercel reads `vercel.json`, which runs `NITRO_PRESET=vercel npm run build`; leave the output directory empty and set Node.js to 22.
3. Deploy. The site is server-rendered, so all five pages work from their own URLs.

To build the Vercel package locally:

```sh
NITRO_PRESET=vercel npm run build
```

The result is written to `.vercel/output`.

## Pushing to GitHub

Create an empty repository on GitHub, then from this folder:

```sh
git init -b main
git add .
git commit -m "Initial commit"
git remote add origin git@github.com:YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

