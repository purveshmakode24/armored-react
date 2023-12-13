import React from "react";

export function lazyImport(factory: () => Promise<any>, name: any) {
    return Object.create({
        [name]: React.lazy(() => factory().then((module) => ({ default: module[name] })))
    });
}

// Usage
// const { Home } = lazyImport(() => import("./Home"), "Home");