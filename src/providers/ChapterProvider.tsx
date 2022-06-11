import React, { createContext, useContext, useState } from 'react';

interface IChapterProviderProps {
  children: React.ReactNode
}

interface IProviderValue {
  chapter?: string,
  setChapter?: (chapter: string) => void
}

export const ChapterContext = createContext<IProviderValue>({});
export const useChapterContext = () => useContext<IProviderValue>(ChapterContext)
export default function ChapterProvider({ children }: IChapterProviderProps) {
  const [ chapter, setChapter ] = useState("Chapter 1")

  const providerValue: IProviderValue = {
    chapter,
    setChapter
  }

  return (
    <ChapterContext.Provider value={providerValue}>
      {children}
    </ChapterContext.Provider>
  )
}
