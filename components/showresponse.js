import React from 'react'
import { TextGenerateEffect } from '@/components/ui/text-gen-effect'
import { SyncLoader } from 'react-spinners'
import { Toaster, toast } from 'react-hot-toast'


const Showresponse = ({ words, setres }) => {

    const copyToClipboard = () => {
        if (words) {
            navigator.clipboard.writeText(words).then(() => {
                toast.success('Text Copied');
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        }
    };

    return (<>
        <Toaster
            position="top-right"
            reverseOrder={false}
        />
        <div className='w-[90vw] h-[90vh] md:w-[75w] md:h-[80vh] lg:w-[66vw] border-2 py-4 lg:h-[75vh] bg-black flex flex-col gap-2 border-gray-600 rounded-lg'>
            <div className='px-4 flex justify-between items-center'>
                <button onClick={copyToClipboard} className='hover:bg-gray-700 cursor-pointer rounded-full p-2'><svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-files-icon lucide-files"><path d="M20 7h-3a2 2 0 0 1-2-2V2" /><path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" /><path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" /></svg></button>
                <button onClick={setres} className='hover:bg-gray-700 cursor-pointer rounded-full p-2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg></button>
            </div>
            <div className='border-b-1 border-gray-500'></div>
            <div className='px-4 h-full overflow-y-auto'>
                {words == null ? <div className='flex w-full h-full justify-center items-center'><SyncLoader size='10' color="#9370DB" /></div>
                    : <TextGenerateEffect words={words} />}
            </div>
        </div>
    </>)
}

export default Showresponse
