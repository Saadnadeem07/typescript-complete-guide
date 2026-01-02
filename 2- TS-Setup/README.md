# TypeScript Setup Guide

This document explains how to initialize a TypeScript project, why TypeScript is installed as a dev dependency, and how the TypeScript compiler works.

---

## 1. Initialize a Node.js Project

First, initialize a Node.js project. This will create a `package.json` file:

```bash
npm init -y
```

---

## 2. Install TypeScript

Install TypeScript as a development dependency:

```bash
npm i -D typescript
```

### What does `-D` mean?

`-D` is short for:

```bash
--save-dev
```

So this command:

```bash
npm i -D typescript
```

means:

👉 **Install TypeScript as a devDependency**

---

## 3. Why TypeScript is a Dev Dependency

TypeScript is used **only during development**, not at runtime.

### How TypeScript Works

1. You write **TypeScript (`.ts`)**
2. TypeScript compiles it into **JavaScript (`.js`)**
3. JavaScript runs in the **browser or Node.js**

👉 **Production environments never run TypeScript, only JavaScript.**

### Dependency Rules

- ✅ Needed during development → `devDependencies`
- ❌ Not needed at runtime → not included in production builds

---

## 4. `dependencies` vs `devDependencies`

| Type | Used When | Examples |
|-----|---------|----------|
| dependencies | App is running | react, express |
| devDependencies | App is being developed | typescript, eslint, ts-node |

### Example `package.json`

```json
{
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "ts-node": "^10.9.0"
  }
}
```

---

## 5. When NOT to Use `-D`

Do **not** use `-D` if the package is required at runtime.

Example:

```bash
npm i axios
```

Axios is needed while the app is running, so it belongs in `dependencies`.

---

## 6. One-Line Summary (Interview-Ready)

> **TypeScript is installed as a devDependency because it is only used for type-checking and compiling code, not for running the application in production.**

---

## 7. Creating a TypeScript Configuration File

Initialize a TypeScript configuration file:

```bash
npx tsc --init
```

This creates a `tsconfig.json` file, which defines how TypeScript should compile your code.

---

## 8. What is `tsc`?

`tsc` is the **TypeScript Compiler**, installed inside `node_modules` when you install TypeScript.

It is responsible for:
- Type checking
- Converting `.ts` files into `.js` files

---

## 9. Important `tsconfig.json` Options

Inside `tsconfig.json`, you may see:

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```

### Meaning:
- `rootDir`: Where TypeScript source files are located
- `outDir`: Where compiled JavaScript files will be generated

This setup means:
- Write TypeScript in `/src`
- Compiled JavaScript output goes to `/dist`

---

## 10. Scripts Configuration

Update your `package.json` scripts:

```json
{
  "scripts": {
    "dev": "npx tsc",
    "start": "node dist/index.js"
  }
}
```

### Script Usage
- `npm run dev` → Compiles TypeScript
- `npm start` → Runs the compiled JavaScript

---

## ✅ Final Notes

- TypeScript is an **add-on to JavaScript**
- It improves **code quality, safety, and consistency**
- It never replaces JavaScript at runtime — it only enhances development
