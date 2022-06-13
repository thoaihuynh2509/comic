import React, { createContext, useContext, useRef, useState } from 'react';
import { IFileObject } from '../types/chapter';

interface IChapterProviderProps {
  children: React.ReactNode
}

interface IProviderValue {
  chapter?: string,
  setChapter?: (chapter: string) => void,
  uploadedImage?: string | ArrayBuffer | null,
  setUploadedImage?: (uploadedImage: string | ArrayBuffer | null) => void
}

export const ChapterContext = createContext<IProviderValue>({});
export const useChapterContext = () => useContext<IProviderValue>(ChapterContext)
export default function ChapterProvider({ children }: IChapterProviderProps) {
  const [ chapter, setChapter ] = useState("Chapter 1")
  const [ uploadedImage, setUploadedImage ] = useState<string | ArrayBuffer | null>(null)

  const providerValue: IProviderValue = ({
    chapter,
    setChapter,
    uploadedImage,
    setUploadedImage
  })

  return (
    <ChapterContext.Provider value={providerValue}>
      {children}
    </ChapterContext.Provider>
  )
}
