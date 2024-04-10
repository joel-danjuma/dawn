"use client"

import { useSearchParams } from "next/navigation"

export default function ErrorPage() {
    const params = useSearchParams();
    const error = params.get("error") ?? "";
    return <p>Sorry, something went wrong: {error}</p>
}