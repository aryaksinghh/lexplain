import Tesseract from 'tesseract.js'

export const extractTextFromImage = async (imageUrl) => {
  const result = await Tesseract.recognize(imageUrl, 'eng')
  return result.data.text
}
