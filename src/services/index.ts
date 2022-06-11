import { IChapter } from "../types/chapter";

export const getChapter = async (): Promise<IChapter> => {
  try {
    const response = await fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const data = await response.json()
    return data
  
  } catch (error) {
    console.log(error);
    return {}
  }
}

export const getChapterIds = async () => {
  
}