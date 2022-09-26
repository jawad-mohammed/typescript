[howtowritereadmemd] (https://medium.com/@saumya.ranjan/how-to-write-a-readme-md-file-markdown-file-20cb7cbcd6f) 

**what is TypeScript** 
TypeScript is an open source language and is a superset of JS

It offers additional features to JS including static types
Using types is completely Optional
Compiles down to regular JS
Can be used for-end JS as well as backend with Nodejs
Includes most features from ES6 ES7 (classes,arrow functions etc)
Types from 3rd party libraries can be added with type definitions
**What is dynamic and static languages**
In dynamic types languages the types are associalted with run-time values and not named explicitly in your code
In statically typed languages you explicitly assign types to variables, function parameters return values etc
static language : JAVA, C,C++,RUST
Dynamic language :JavaSCRIPT,pYTHON,Ruby

**Compiling TypeScript**
1. TypeScript uses .ts and .tsx extensions
2. TSC(TypeScript Compiler) is used to compile .ts files down to JS
3. Can watch files and report errors at compile time
4. Many tools inclide TS compilation by default

### how to install ts
> npm i -g typescript
**version**
tsc -v

tsc filename.ts
**watch a file**
tsc --watch filename.ts
**config**
tsc--init  
