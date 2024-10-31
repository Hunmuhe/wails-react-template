import React from 'react';
import { Separator } from "@/components/ui/separator"

const LocalSettings: React.FC = () => {
    return (
        <>
            <div >
                <div className="flex h-[52px] items-center pl-5">
                    <h1 className="text-xl font-bold">LocalSettings</h1>
                </div>
                <Separator />
            </div>

        </>
    );
};

export default LocalSettings;