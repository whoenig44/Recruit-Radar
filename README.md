# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md), which uses [Babel](https://babeljs.io/) for Fast Refresh
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc), which uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you're developing a production application, we recommend updating the configuration to enable type-aware lint rules:

* Configure the top-level `parserOptions` property as follows:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

* Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.
* Optionally, add `plugin:@typescript-eslint/stylistic-type-checked`.
* Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` and `plugin:react/jsx-runtime` to the `extends` list.

## Using the GitHub Search API

This project includes functionality to search for GitHub users using the GitHub Search API. Below is a comprehensive guide on how to use this feature.

### Setup

1. **Environment Variables**: Ensure you have a `.env` file in the root of your project with the following content:
    ```env
    VITE_GITHUB_TOKEN=your_github_token_here
    ```
    Replace `your_github_token_here` with your actual GitHub token.

2. **Install Dependencies**: Run the following command to install the necessary dependencies:
    ```sh
    npm install
    ```

3. **Start the Development Server**: Use the following command to start the development server:
    ```sh
    npm run dev
    ```

### Searching for GitHub Users

The application provides two main functions to interact with the GitHub API: `searchGithub` and `searchGithubUser`.

#### `searchGithub`

This function fetches a list of GitHub users starting from a random user ID.

```tsx
import { searchGithub } from './api/API';

const fetchUsers = async () => {
  const users = await searchGithub();
  console.log(users);
};

fetchUsers();
```

#### `searchGithubUser`

This function fetches detailed information about a specific GitHub user by their username.

```tsx
import { searchGithubUser } from './api/API';

const fetchUserDetails = async (username: string) => {
  const userDetails = await searchGithubUser(username);
  console.log(userDetails);
};

fetchUserDetails('octocat');
```

### Components

- **CandidateSearch**: This component allows users to search for GitHub candidates and save them to local storage.
- **SavedCandidates**: This component displays the list of saved candidates.
- **Candidate**: This component displays the details of a single candidate.

### Pages

- **CandidateSearchPage**: This page contains the `CandidateSearch` component and handles the logic for fetching and displaying candidates.
- **SavedCandidatesPage**: This page contains the `SavedCandidates` component and displays the saved candidates.

### Running the Application

1. **Navigate to the Root Directory**: Ensure you are in the root directory of the project.
2. **Start the Development Server**: Run the following command:
    ```sh
    npm run dev
    ```
3. **Open the Application**: Open your browser and navigate to `http://localhost:3000`.

### Additional Information

For more details on the GitHub API, refer to the [GitHub API Documentation](https://docs.github.com/en/rest).
