'use client';
import React from 'react';
import Game1 from '../../components/Game1';
export default function Home() {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold mb-4 textwhite text-center'>Selamat Datang!</h1><Game1 />
        </div>
    );
}