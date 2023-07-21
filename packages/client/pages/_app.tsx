import 'reflect-metadata';
import React from 'react';

//css
import 'tailwindcss/tailwind.css';
import '../styles/index';

//components
import {AppProps} from "next/app";


export default function DiskGolfEarth({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
