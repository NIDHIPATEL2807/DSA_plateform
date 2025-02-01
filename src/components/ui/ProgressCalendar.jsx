import { React } from "react";

export default function ProgressCalendar(){
    return (
        <>
        {/* Right Column - Calendar & Stats */}
        <div className="space-y-6">
        <ActivityCalendar />

        {/* Stats Card */}
        <div className="bg-gray-900 p-4 rounded-lg border border-violet-700/30">
        <h3 className="text-violet-300 font-semibold mb-4">Your Progress</h3>
        <div className="space-y-4">
            <div>
            <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Problems Solved</span>
                <span className="text-violet-300">45/450</span>
            </div>
            <div className="w-full bg-gray-800 h-2 rounded-full">
                <div className="bg-violet-500 h-2 rounded-full" style={{ width: '10%' }} />
            </div>
            </div>
            <div>
            <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Topics Covered</span>
                <span className="text-violet-300">8/36</span>
            </div>
            <div className="w-full bg-gray-800 h-2 rounded-full">
                <div className="bg-violet-500 h-2 rounded-full" style={{ width: '22%' }} />
            </div>
            </div>
        </div>
        </div>
        </div>
    </>
    )
}

