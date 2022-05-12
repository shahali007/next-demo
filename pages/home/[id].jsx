import { useRouter } from "next/router";
import React from "react";

export default function Details() {
    const router = useRouter();
    return <div>Details

        <pre>{JSON.stringify(router.query)}</pre>
    </div>;
}
