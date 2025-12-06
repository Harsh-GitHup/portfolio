import '@testing-library/jest-dom'

// Provide a basic IntersectionObserver mock for components using it
class MockIntersectionObserver {
    callback: IntersectionObserverCallback
    constructor(callback: IntersectionObserverCallback) {
        this.callback = callback
    }
    observe = (_: Element) => {
        // Immediately invoke callback as intersecting for tests
        this.callback([{ isIntersecting: true } as IntersectionObserverEntry], this as unknown as IntersectionObserver)
    }
    unobserve = (_: Element) => { }
    disconnect = () => { }
    takeRecords = () => []
}

; (globalThis as any).IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver
