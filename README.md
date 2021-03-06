<div align="center">
	<br />
	<p>
		<a href="http://infotition.de">
			<img src="./.github/assets/infotition_logo.png" width=600px alt="infotition logo" />
		</a>
	</p>
	<h1>Infotition ESLint Config</h1>
	<p>This is the official eslint config which is used by the infotition team.</p>
  	<p>
		<a href="https://github.com/Infotition/eslint-config-infotition/issues" title="github issues">
			<img alt="issues" src="https://img.shields.io/github/issues/Infotition/eslint-config-infotition">
		</a>
		<a href="https://github.com/Infotition/eslint-config-infotition/blob/main/LICENSE" title="license">
			<img src="https://img.shields.io/github/license/Infotition/eslint-config-infotition" alt="license" />
		</a>
		<a href="https://discord.gg/NpxrDGYDwV" title="discord">
			<img src="https://img.shields.io/discord/792139920260464670?color=7289da&logo=discord&logoColor=white" alt="discord server" />
		</a>
	</p>
</div>

# Table of Contents
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Development](#development)
- [Issue Reporting](#issue-reporting)
- [Contribution](#contribution)
- [License](#license)

# Installation

1. Setup a basic typescript project:
   
   Install typescript and basic node types:
   ```bash
   yarn init
   yarn add -D @tsconfig/node16 @types/node typescript
   ```

   Create a `tsconfig.json` file at project root with the following content:
   ```json
   {
     "extends": "@tsconfig/node16/tsconfig.json",
     "exclude": ["node_modules"]
   }
   ```


2. Install the infotition eslint config package:
   ```bash
   yarn add -D @infotition/eslint-config
   ```

3. Create a Prettier config as described [here](https://github.com/Infotition/prettier-config-infotition).

4. Create a `.eslintrc.js` file at project root with the following content:
   
   For a plain node project:
   ```js
   module.exports = {
     extends: ['@infotition/eslint-config'],
     env: {
       node: true,
     },
   };
   ```
   or for a Next.js project:
   ```js
   module.exports = {
     extends: ['@infotition/eslint-config/next'],
   };
   ```  
# Development

If you want to develop in this repository, clone it and change the directory of your terminal to the downloaded repository.
```bash
$ git clone https://github.com/Infotition/eslint-config-infotition.git
$ cd eslint-config-infotition
```

Now you can install all development and production dependencies.
```bash
$ yarn install
```

# Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. For other related questions/support please use the official Infotition [Discord server](https://discord.gg/NpxrDGYDwV).

# Contribution

We appreciate feedback and contribution to this repo! Before you get started, please see the following:

- [Infotition Code of Conduct guidelines](./.github/CODE_OF_CONDUCT.md)
- [Infotition Contribution guidelines](./.github/CONTRIBUTING.md)

# License

This repo is covered under the MIT License, see the [LICENSE](./LICENSE) file for more information.
