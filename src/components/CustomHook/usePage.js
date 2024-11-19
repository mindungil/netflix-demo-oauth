import { useState } from "react";

export default function usePage(currentPage = 1) {
    const [page, setPage] = useState(currentPage);

    const settingPage = (num = 1) => setPage(prevPage => Math.max(prevPage + num));

    return [page, settingPage];
}