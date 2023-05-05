import React, { useRef, useState } from 'react'

const sleep = (msec: number) => new Promise((resolve) => setTimeout(resolve, msec))

const UPLOAD_DELAY = 5000

export const ImageUploader = () => {
  // 隠されたInput要素にアクセスするためのRef
  const inputImageRef = useRef<HTMLInputElement>(null)
  // 選択されたファイルデータを保持するためのRef
  const fileRef = useRef<File | null>(null)
  const [message, setMessage] = useState<string | null>('')

  const onClickText = () => {
    if (inputImageRef.current !== null) {
      // input要素のクリックイベントを発火させる
      inputImageRef.current.click()
    }
  }

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files !== null && files.length > 0) {
      // fileRef.currentに選択されたファイルデータを保存する
      // fileRef.currentが変化しても再描画は発生しない
      fileRef.current = files[0]
    }
  }

  const onClickUpload = async () => {
    if (fileRef.current !== null) {
      const file = fileRef.current
      setMessage('Uploading...')
      // 通常はAPIをコールしてファイルをアップロードする
      // 今回は擬似的に一定時間待機する
      await sleep(UPLOAD_DELAY)
      setMessage(`${file.name} has been successfully uploaded`)
    }
  }

  return (
    <div>
      <p style={{ textDecoration: 'underline' }} onClick={onClickText}>
        画像をアップロード
      </p>
      <input
        ref={inputImageRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={onChangeImage}
      />
      <br/>
      <button onClick={onClickUpload}>アップロードする</button>
      {message !== null && <p>{message}</p>}
    </div>
  )
}
