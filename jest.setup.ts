import "@testing-library/jest-dom"

jest.mock('next-auth/react', () => ({
    __esModule: true,
    useSession: jest.fn(() => ({
        data: null,
        status: 'unauthenticated',
    })),
    signIn: jest.fn(),
    signOut: jest.fn(),
}))

jest.mock("next/navigation", () => ({
    __esModule: true,
    useRouter: jest.fn(() => ({
        push: jest.fn(),
        replace: jest.fn()
    }))
}))

jest.mock("./lib/react-query/hooks/auth.hook.ts", () => ({
    __esModule: true,
    useAuth: jest.fn((() => ({
        user: null,
        isLoading: false,
        isAuthenticated: false,
    })))
}))