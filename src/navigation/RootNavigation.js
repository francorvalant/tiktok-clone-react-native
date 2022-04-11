import React from "react";
import { AppNavigation } from "./AppNavigation";
import { AuthNavigation } from "./AuthNavigation";
import { useAuth } from "../hooks";

export function RootNavigation() {
    const { auth } = useAuth();

    return auth ? <AppNavigation /> : <AuthNavigation />
}