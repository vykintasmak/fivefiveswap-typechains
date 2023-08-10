# FiveFiveSwap Typechain Generator

## Overview

This project provides the tools required to generate typechains from the ABIs of the FiveFiveSwap Ethereum protocol. Primarily, these tools target the `ethers-v5` library and produce typechain definitions for the Factory, Pair, and Router smart contracts of the FiveFiveSwap protocol.

## Key Features

- 🧰 Generate typechains specifically for the `ethers-v5` library.
- 📂 Input sources are based on the JSON files located in the `./src/config/abis/` directory.
- 🚀 Easily regenerate typechains as required.
- 📦 Majority of users will benefit from the pre-generated output, alleviating the need to run generation scripts on their end.

## Prerequisites

- Yarn for dependency management. If you don't have it installed, follow the instructions [here](https://classic.yarnpkg.com/en/docs/install/).

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
   
2. Change to the project directory:
   ```bash
   cd path_to_project_directory
   ```

3. Install dependencies using yarn:
   ```bash
   yarn install
   ```

## Generating Typechains

To generate the typechains, execute the following command:

```bash
typechain --target=ethers-v5 --out-dir=./types/config/abis './src/config/abis/*.json'
```

## Usage

For most users, the main utility lies in the generated output found in `./types/config/abis`. This output directory will contain type definitions tailored for the Factory, Pair, and Router smart contracts of the FiveFiveSwap protocol.

## Contributions

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## License

Please check the license file for more details.

---

We hope this tool serves the community well in their development endeavors with FiveFiveSwap!