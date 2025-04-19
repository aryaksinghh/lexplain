"use client"
import { useState, useRef } from 'react';
import { Upload, Globe, Send, Volume2 } from 'lucide-react';
import Showresponse from '@/components/showresponse';
import { extractTextFromImage } from '@/utils/ocr';
import { SyncLoader } from 'react-spinners'

export default function MainInput() {
  const [inputText, setInputText] = useState('');
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);
  const [tone, setTone] = useState('balanced');
  const [language, setLanguage] = useState('english');
  const fileInputRef = useRef(null);
  const [showresponse, setshowresponse] = useState(false);
  const [promptres, setPromptres] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileUpload = () => {
    fileInputRef.current.click();
    fileInputRef.current.onchange = async (e) => {
      const file = e.target.files[0];
      if (file) {
        setLoading(true);
        const url = URL.createObjectURL(file)
        const resultText = await extractTextFromImage(url)
        setInputText(resultText);
        setLoading(false);
      }
    };
  };

  const handlesubmit = async () => {
    setshowresponse(true);
    let prompt = `Simplify the following legal clause in ${language} language strictly, using a ${tone} tone (not too technical, not too casual) and make things very clear so a user can read it easily, make things to the point remove the clutter. Clause: ${inputText}`;
    const response = await fetch('/api/getresponse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(prompt),
    });
    const data = await response.json();
    setPromptres(data.message);
  };

  const setres = () => {
    setshowresponse(false);
    setPromptres('');
  }

  return (<>
    {showresponse &&
      <div className='inset-0 fixed z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center'>
        <Showresponse words={promptres ? promptres : null} setres={setres} />
      </div>}
    <div className=" flex flex-col items-center justify-center w-full min-h-[88vh] bg-black text-white p-6">
      {/* Welcome Header with enhanced styling */}
      <header className="w-full max-w-4xl text-center mb-12 mt-8">
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
          Welcome to Lexplain Playground
        </h1>
        <p className="text-gray-400 text-lg">Transform your legal documents into concise, intelligent insights</p>
      </header>

      {/* Main Content Area */}
      <div className="w-full max-w-4xl flex flex-col">
        {/* Text Input Area with enhanced styling */}
        <div
          className={`relative border rounded-xl mb-8 overflow-hidden transition-all duration-300 shadow-lg
          ${isTextareaFocused ? 'border-blue-500 shadow-blue-900/20' : 'border-gray-700'}`}
        >
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onFocus={() => setIsTextareaFocused(true)}
            onBlur={() => setIsTextareaFocused(false)}
            placeholder="Just type your document clause here or upload image of it..."
            className="w-full bg-gray-900/70 backdrop-blur-sm text-white p-6 max-h-48 outline-none resize-none text-lg"
            style={{ height: `${Math.max(192, inputText.split('\n').length * 28 + 48)}px` }}
          />
        </div>

        {/* Controls Area with redesigned buttons */}
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:items-center sm:space-y-0 sm:space-x-6 mb-8">
          {/* File Upload Button with blur effect and glow */}
          <div className="flex-1">
            <button
              onClick={handleFileUpload}
              className="flex cursor-pointer items-center justify-center w-full px-6 py-4 
              bg-gray-800/60 hover:bg-gray-700/70 backdrop-blur-md rounded-xl 
              transition-all duration-300 hover:scale-105 border border-gray-700 shadow-lg"
            >
              {loading ? <SyncLoader size='10' color="#9370DB" /> : <div className='flex items-center'>
                <div className="text-green-400 mr-3 filter drop-shadow-md">
                  <Upload size={20} className="filter drop-shadow-lg" />
                </div>
                <span className="font-medium">Upload Image</span>
              </div>}
            </button>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept=".pdf,.png,.jpg,.jpeg"
            />
          </div>

          {/* Language Selector with improved styling */}
          <div className="flex-1">
            <div className="flex items-center px-3 py-1 bg-gray-800/60 backdrop-blur-md rounded-xl border border-gray-700 overflow-hidden shadow-lg">
              <div className="p-3 text-blue-400 filter drop-shadow-md">
                <Globe size={20} className="filter drop-shadow-lg" />
              </div>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none p-3 text-white cursor-pointer font-medium"
              >
                <option className='text-black' value="English">English</option>
                <option className='text-black' value="Hindi">Hindi</option>
                <option className='text-black' value="Hinglish (english + hindi, for example language type(dont use this phrase for response)- mera naam rocky hai)">Hinglish</option>
              </select>
            </div>
          </div>

          {/* Tone Selector with improved styling */}
          <div className="flex-1">
            <div className="flex items-center px-3 py-1 bg-gray-800/60 backdrop-blur-md rounded-xl border border-gray-700 overflow-hidden shadow-lg">
              <div className="p-3 text-purple-400 filter drop-shadow-md">
                <Volume2 size={20} className="filter drop-shadow-lg" />
              </div>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none p-3 text-white cursor-pointer font-medium"
              >
                <option className='text-black' value="balanced">Balanced</option>
                <option className='text-black' value="simple">Simple</option>
                <option className='text-black' value="suggestions">Suggestions</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submit Button with enhanced styling */}
        <button
          className="self-end bg-gradient-to-r cursor-pointer from-gray-800/80 to-gray-700/80 backdrop-blur-md 
          hover:from-gray-700/80 hover:to-gray-600/80 text-white py-4 px-8 rounded-xl
          flex items-center transition-all duration-300 transform hover:scale-105 
          shadow-lg border border-gray-700"
          onClick={handlesubmit}
          disabled={loading || !inputText}
        >
          <span className="mr-3 font-medium">Process</span>
          <div className="text-red-400 filter drop-shadow-md">
            <Send size={20} className="filter drop-shadow-lg" />
          </div>
        </button>
      </div>
    </div>
  </>);
}