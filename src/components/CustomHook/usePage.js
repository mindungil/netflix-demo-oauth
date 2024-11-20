import { useState } from "react";

export default function usePage(currentPage = 1) {
    const [page, setPage] = useState(currentPage);

    const settingPage = (newPage) => setPage(prevPage => newPage);

    return [page, settingPage];
}