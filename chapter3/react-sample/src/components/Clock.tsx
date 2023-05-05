import React, {useState, useEffect, useLayoutEffect} from 'react'

// タイマーを呼び出す周期（ミリ秒）
const UPDATE_CYCLE = 1000
// localStorageで使用するキー
const KEY_LOCALE = 'KEY_LOCALE'

enum Locale {
  UK = 'en-UK',
  US = 'en-US',
  JP = 'ja-JP',
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.UK:
      return Locale.UK
    case Locale.US:
      return Locale.US
    case Locale.JP:
    default:
      return Locale.JP
  }
}

export const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date())
  const [locale, setLocale] = useState(Locale.JP)

  // タイマーをセットするための副作用
  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date())
    }, UPDATE_CYCLE)
    // タイマーをクリアするクリーンアップ関数
    return () => clearInterval(timer)
  }, [])

  // localStorageからlocaleの値を読み込むための副作用
  useLayoutEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE)
    if (savedLocale !== null) {
      setLocale(getLocaleFromString(savedLocale))
    }
  }, [])

  // locale変化時にlocalStorageにlocaleの値を保存するための副作用
  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale)
  }, [locale])

  return (
    <div>
      <h2>Clock</h2>
      <p>
        <span id="current-time-label">現在時刻</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select
          value={locale}
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
          <option value={Locale.UK}>en-UK</option>
          <option value={Locale.US}>en-US</option>
          <option value={Locale.JP}>ja-JP</option>
        </select>
      </p>
    </div>
  )
}
