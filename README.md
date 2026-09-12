# Blog App

## Authentication Context Breakdown

This app uses React Context to share authentication state and actions across components without passing them through props.

### 1. Define the user shape

In `src/context/AuthContext.ts`, the app defines the structure of a user:

```ts
interface User {
	id: string;
	username: string;
}
```

This gives TypeScript a consistent structure for user data.

### 2. Define the context contract

The `AuthContextType` interface describes everything authentication consumers can access:

```ts
interface AuthContextType {
	user: User | null;
	isAuthenticated: boolean;
	login: () => void;
	logout: () => void;
}
```

The context exposes:

- `user`: the current user or `null`
- `isAuthenticated`: whether the user is logged in
- `login`: the function that logs the user in
- `logout`: the function that logs the user out

### 3. Create the context

The context is created with React's `createContext` function:

```ts
export const AuthContext = createContext<AuthContextType>({
	user: null,
	isAuthenticated: false,
	login: () => console.warn("Login function"),
	logout: () => console.warn("Logout function"),
});
```

The default value must match `AuthContextType`. These default functions are placeholders; the real functions are supplied by `AuthProvider`.

### 4. Create the provider component

In `src/providers/AuthProvider.tsx`, the provider owns the authentication state:

```tsx
const [user, setUser] = useState({
	id: "101",
	username: "SoloDev101",
});

const [isAuthenticated, setIsAuthenticated] = useState(false);
```

The provider stores the current user and whether the user is authenticated.

### 5. Create login and logout actions

The provider defines functions that update the authentication state:

```tsx
const login = () => setIsAuthenticated(true);
const logout = () => setIsAuthenticated(false);
```

Calling `login()` changes the state to `true`. Calling `logout()` changes it to `false`. Because these values are React state, components using the context re-render when they change.

### 6. Provide the values to the component tree

The provider passes the state and functions into `AuthContext.Provider`:

```tsx
<AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
	{children}
</AuthContext.Provider>
```

The `children` prop represents the rest of the application. Any component rendered inside this provider can access these values.

### 7. Wrap the application with `AuthProvider`

In `src/main.tsx`, the app is wrapped with the provider:

```tsx
<BrowserRouter>
	<AuthProvider>
		<App />
	</AuthProvider>
</BrowserRouter>
```

Only components below `AuthProvider` can access its context values. The component hierarchy is:

```text
BrowserRouter
└── AuthProvider
		└── App
				├── NavBar
				├── LoginPage
				└── Other pages
```

### 8. Create a custom authentication hook

In `src/hooks/useAuth.ts`, the app creates a reusable wrapper around `useContext`:

```tsx
function useAuth() {
	const authContext = useContext(AuthContext);

	return {
		user: authContext.user,
		isAuthenticated: authContext.isAuthenticated,
		login: authContext.login,
		logout: authContext.logout,
	};
}
```

Components can now use authentication with one import:

```tsx
const { isAuthenticated, login, logout } = useAuth();
```

### 9. Use the context in the login page

In `src/pages/LoginPage.tsx`, the page gets the `login` function:

```tsx
const { login } = useAuth();

const handleClick = () => {
	login();
	navigate("/blogs");
};
```

When the button is clicked:

1. `login()` sets `isAuthenticated` to `true`.
2. Components using that value re-render.
3. The user is navigated to `/blogs`.

### 10. Use the context in the navigation bar

In `src/components/NavBar.tsx`, the component reads the authentication state:

```tsx
const { isAuthenticated, logout } = useAuth();
```

It conditionally renders the correct control:

```tsx
{isAuthenticated ? (
	<button onClick={onLogout}>Sign out</button>
) : (
	<NavLink to="/login">Login</NavLink>
)}
```

When the user signs out, `logout()` sets `isAuthenticated` to `false`, the navigation bar re-renders, the Login link appears, and the user is navigated back to `/`.

## Authentication Data Flow

```text
User clicks Login
				↓
LoginPage calls login()
				↓
AuthProvider sets isAuthenticated to true
				↓
AuthContext value changes
				↓
NavBar re-renders
				↓
"Sign out" appears
```

## Reusable Setup Recipe

When creating this pattern in another React app:

1. Create a `User` type.
2. Create an `AuthContextType` interface.
3. Create the context with `createContext`.
4. Create an `AuthProvider` component.
5. Store authentication state with `useState`.
6. Define `login` and `logout` functions.
7. Pass the state and functions into `AuthContext.Provider`.
8. Wrap the application with `AuthProvider`.
9. Create a `useAuth` custom hook.
10. Use `useAuth()` in components that need authentication data.
11. Add protected routes for pages that require login.

## Tips and Improvements

- Use `boolean` instead of `true | false` for boolean values.
- Set the user during login and clear it during logout:

	```tsx
	const login = () => {
		setUser({ id: "101", username: "SoloDev101" });
		setIsAuthenticated(true);
	};

	const logout = () => {
		setUser(null);
		setIsAuthenticated(false);
	};
	```

- In a real app, `login` would usually accept credentials, call an API, and update the context after a successful response.
- Add protected routes so users cannot access private pages simply by typing a URL such as `/blogs`.
- React state resets when the page refreshes. Real applications usually restore authentication from a server session or token stored using a secure strategy.
- A custom hook can throw an error when used outside `AuthProvider`, which makes missing-provider mistakes easier to find than placeholder warning functions.
