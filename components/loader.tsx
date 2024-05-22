import { useState, useEffect } from "react";
import Image from "next/image";

interface LoaderProps {
  progress: number;
}

export const Loader: React.FC<LoaderProps> = ({ progress }) => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image
          alt="Logo"
          src="/logo.png"
          layout="fill"
        />
      </div>
      <p className="text-sm text-muted-foreground">
        Sage is thinking...
      </p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};
