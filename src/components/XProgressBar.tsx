'use client';
import { progressbarPT } from "@/primereact-tailwindcss/progressBar.pt";
import { ProgressBar } from "primereact/progressbar";

const XProgressBar = ({ ...props }) => {
    return (
        <ProgressBar {...props} pt={{ ...progressbarPT }} />
    )
}

export default XProgressBar


